import { NextResponse } from "next/server";
import { Client, Databases, Query } from "appwrite";

const DATABASE_ID = "vernacular_saas";
const COLLECTION_ID = "waitlist";

function getAppwriteClient() {
  const endpoint = process.env.APPWRITE_ENDPOINT;
  const projectId = process.env.APPWRITE_PROJECT_ID;
  const apiKey = process.env.APPWRITE_API_KEY;

  if (!endpoint || !projectId || !apiKey) {
    throw new Error("Missing Appwrite environment variables");
  }

  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId);

  // Appwrite SDK v15 uses X-Appwrite-Key header directly
  client.headers["X-Appwrite-Key"] = apiKey;

  return client;
}

function isValidEmail(email: string): boolean {
  return email.includes("@") && email.includes(".");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = body?.email;

    if (!rawEmail || typeof rawEmail !== "string") {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = rawEmail.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const client = getAppwriteClient();
    const databases = new Databases(client);

    const existing = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("email", normalizedEmail)]
    );

    if (existing.total > 0) {
      return NextResponse.json({
        ok: true,
        alreadyRegistered: true,
      });
    }

    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      "unique()",
      {
        email: normalizedEmail,
        created_at: new Date().toISOString(),
      }
    );

    return NextResponse.json({
      ok: true,
      alreadyRegistered: false,
    });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
