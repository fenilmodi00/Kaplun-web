"use client";

import { useState, useEffect } from "react";

function validateClientEmail(email: string): { valid: boolean; reason?: string } {
  if (!email || !email.trim()) {
    return { valid: false, reason: "Please enter an email address." };
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
  const localRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
  if (!localRegex.test(localPart)) {
    return { valid: false, reason: "Invalid characters in email username." };
  }
  const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  if (!domainRegex.test(domainPart)) {
    return { valid: false, reason: "Please enter a valid domain (e.g. domain.com or company.io)." };
  }
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

export function WaitlistModal({
  open,
  mounted,
  onClose,
}: {
  open: boolean;
  mounted: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [duplicateEmail, setDuplicateEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  // Reset state when modal is opened or closed
  useEffect(() => {
    if (!open) {
      setError(null);
      setSubmitting(false);
    }
  }, [open]);

  const handleClose = () => {
    setError(null);
    setSucceeded(false);
    setDuplicateEmail(false);
    setEmail("");
    onClose();
  };

  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const validation = validateClientEmail(email);
    if (!validation.valid) {
      setError(validation.reason || "Invalid email address");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (data.ok) {
        setSubmittedEmail(data.email || email.trim().toLowerCase());
        setDuplicateEmail(!!data.alreadyRegistered);
        setSucceeded(true);
      } else {
        setError(data.error || "Failed to join waitlist. Please check your email and try again.");
      }
    } catch (err) {
      console.error("Failed to join waitlist:", err);
      setError("Network error. Please check your internet connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const showSuccess = succeeded || duplicateEmail;
  const isAlreadyRegistered = duplicateEmail && succeeded;
  const hidden = open ? "" : " kaplun-hidden";

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(10, 10, 10, 0.5)",
        backdropFilter: "blur(8px)",
      }}
      className={`kaplun-modal-backdrop${hidden}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") handleClose();
      }}
    >
      <div
        style={{
          background: "var(--clay-surface-card)",
          borderRadius: "var(--clay-rounded-xl)",
          padding: "var(--clay-spacing-2xl)",
          maxWidth: 440,
          width: "90%",
          textAlign: showSuccess ? "center" : undefined,
        }}
        className={`kaplun-modal-dialog${hidden}`}
      >
        {showSuccess ? (
          <div className="kaplun-content-enter">
            <div
              style={{ fontSize: 48, marginBottom: "var(--clay-spacing-md)" }}
              className="kaplun-pop-in"
            >
              {isAlreadyRegistered ? "👋" : "🎉"}
            </div>
            <h2
              style={{
                fontSize: "var(--clay-title-lg)",
                fontWeight: 600,
                color: "var(--clay-ink)",
                marginBottom: "var(--clay-spacing-xs)",
              }}
            >
              {isAlreadyRegistered ? "Already on the list!" : "You're on the list!"}
            </h2>
            <p
              style={{
                fontSize: "var(--clay-body-md)",
                color: "var(--clay-body)",
                marginBottom: "var(--clay-spacing-xl)",
                lineHeight: 1.5,
              }}
            >
              {isAlreadyRegistered ? (
                <>
                  We already have <strong style={{ color: "var(--clay-ink)" }}>{submittedEmail}</strong> registered on our waitlist. Don't worry, we'll reach out to you as soon as we launch!
                </>
              ) : (
                <>
                  We'll notify <strong style={{ color: "var(--clay-ink)" }}>{submittedEmail}</strong> when Kaplun is ready. Thanks for your interest!
                </>
              )}
            </p>
            <button
              type="button"
              onClick={handleClose}
              style={{
                background: "var(--clay-primary)",
                color: "var(--clay-on-primary)",
                height: 44,
                padding: "12px 24px",
                borderRadius: "var(--clay-rounded-md)",
                fontSize: "var(--clay-button)",
                fontWeight: 600,
                fontFamily: '"Inter", sans-serif',
                border: "none",
                cursor: "pointer",
              }}
            >
              {isAlreadyRegistered ? "Got it" : "Done"}
            </button>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontSize: "var(--clay-title-lg)",
                fontWeight: 600,
                color: "var(--clay-ink)",
                marginBottom: "var(--clay-spacing-xs)",
                textAlign: "center",
              }}
            >
              Join the Waitlist
            </h2>
            <p
              style={{
                fontSize: "var(--clay-body-sm)",
                color: "var(--clay-muted)",
                marginBottom: "var(--clay-spacing-xl)",
                textAlign: "center",
              }}
            >
              Be the first to know when Kaplun launches.
            </p>

            {error && (
              <div
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  padding: "10px 14px",
                  borderRadius: "var(--clay-rounded-md)",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "var(--clay-spacing-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: 16 }}>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <label
                htmlFor="waitlist-email"
                style={{
                  display: "block",
                  fontSize: "var(--clay-body-sm)",
                  fontWeight: 500,
                  color: "var(--clay-ink)",
                  marginBottom: "var(--clay-spacing-xs)",
                }}
              >
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="you@company.com"
                style={{
                  width: "100%",
                  height: 44,
                  padding: "12px 16px",
                  borderRadius: "var(--clay-rounded-md)",
                  border: error
                    ? "1px solid #ef4444"
                    : "1px solid var(--clay-hairline)",
                  fontSize: "var(--clay-body-md)",
                  fontFamily: '"Inter", sans-serif',
                  color: "var(--clay-ink)",
                  background: "var(--clay-canvas)",
                  outline: "none",
                  boxSizing: "border-box",
                  marginBottom: "var(--clay-spacing-md)",
                }}
              />

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  height: 44,
                  padding: "12px 20px",
                  borderRadius: "var(--clay-rounded-md)",
                  fontSize: "var(--clay-button)",
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                  background: "var(--clay-primary)",
                  color: "var(--clay-on-primary)",
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            <button
              type="button"
              onClick={handleClose}
              style={{
                display: "block",
                width: "100%",
                marginTop: "var(--clay-spacing-sm)",
                background: "none",
                border: "none",
                color: "var(--clay-muted)",
                fontSize: "var(--clay-body-sm)",
                cursor: "pointer",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Maybe later
            </button>
          </>
        )}
      </div>
    </div>
  );
}
