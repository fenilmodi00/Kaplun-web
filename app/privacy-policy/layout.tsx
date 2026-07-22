import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Kaplun privacy policy and learn how we collect, use, retain, and protect user information on our platform.",
  alternates: {
    canonical: "https://kaplun.tech/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
