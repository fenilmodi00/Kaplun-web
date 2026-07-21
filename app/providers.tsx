"use client";

import { useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ignore browser extension DOM mutation warnings (e.g. Bitwarden bis_skin_checked) in dev mode
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      const origError = console.error;
      console.error = (...args: unknown[]) => {
        const errorMsg = typeof args[0] === "string" ? args[0] : "";
        if (
          errorMsg.includes("bis_skin_checked") ||
          (errorMsg.includes("hydration-mismatch") && args.some((arg) => String(arg).includes("bis_skin_checked")))
        ) {
          return;
        }
        origError.apply(console, args);
      };
    }
  }, []);

  return <ClerkProvider>{children}</ClerkProvider>;
}
