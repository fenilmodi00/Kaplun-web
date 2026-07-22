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

export function validateEmail(email: string): { valid: boolean; reason?: string } {
  if (!email || typeof email !== "string") {
    return { valid: false, reason: "Email address is required." };
  }

  const normalized = email.trim();

  if (normalized.length > 254) {
    return { valid: false, reason: "Email address is too long." };
  }

  if (/\s/.test(normalized)) {
    return { valid: false, reason: "Email address cannot contain spaces." };
  }

  const parts = normalized.split("@");
  if (parts.length !== 2) {
    return { valid: false, reason: "Please enter a valid email format (e.g. name@domain.com)." };
  }

  const [localPart, domainPart] = parts;

  if (!localPart || localPart.length > 64) {
    return { valid: false, reason: "Invalid email username length." };
  }

  if (!domainPart || domainPart.length > 253) {
    return { valid: false, reason: "Invalid email domain length." };
  }

  // Local part regex: alphanumeric, allowed symbols. No leading/trailing/consecutive dots.
  const localRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
  if (!localRegex.test(localPart)) {
    return { valid: false, reason: "Invalid characters or format in email address." };
  }

  // Domain part: labels separated by dots, TLD at least 2 alpha characters
  const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  if (!domainRegex.test(domainPart)) {
    return { valid: false, reason: "Please enter a valid domain (e.g. domain.com or company.io)." };
  }

  // Reject placeholder / fake test domains
  const lowerDomain = domainPart.toLowerCase();
  const knownFakeDomains = [
    "example.com",
    "test.com",
    "sample.com",
    "fake.com",
    "tempmail.com",
    "mailinator.com",
    "10minutemail.com",
    "dispostable.com",
    "trashmail.com",
  ];
  if (knownFakeDomains.includes(lowerDomain)) {
    return { valid: false, reason: "Please enter a valid personal or work email address." };
  }

  return { valid: true };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = body?.email;

    if (!rawEmail || typeof rawEmail !== "string") {
      return NextResponse.json(
        { ok: false, error: "Email address is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = rawEmail.trim().toLowerCase();

    const emailCheck = validateEmail(normalizedEmail);
    if (!emailCheck.valid) {
      return NextResponse.json(
        { ok: false, error: emailCheck.reason || "Invalid email format" },
        { status: 400 }
      );
    }

    const client = getAppwriteClient();
    const databases = new Databases(client);

    let isDuplicate = false;

    try {
      const existing = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("email", normalizedEmail)]
      );

      if (existing.total > 0) {
        isDuplicate = true;
      }
    } catch (queryErr) {
      console.warn("Query by email failed, running fallback search:", queryErr);
      try {
        const fallbackList = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [Query.limit(100)]
        );
        if (
          fallbackList.documents.some(
            (doc: Record<string, any>) => doc.email?.toLowerCase() === normalizedEmail
          )
        ) {
          isDuplicate = true;
        }
      } catch (fallbackErr) {
        console.error("Fallback document check failed:", fallbackErr);
      }
    }

    if (isDuplicate) {
      return NextResponse.json({
        ok: true,
        alreadyRegistered: true,
        email: normalizedEmail,
        message: "You are already on the waitlist! We will reach out to you soon.",
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
      email: normalizedEmail,
      message: "Successfully joined the waitlist!",
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
