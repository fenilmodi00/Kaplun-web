import { SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main style={{ background: "var(--clay-canvas)", minHeight: "100vh" }}>
      {/* ═══ HERO SECTION ═══ */}
      <section style={{ padding: "var(--clay-spacing-section) var(--clay-spacing-lg)", maxWidth: 1280, margin: "0 auto" }}>
        <div className="kaplun-hero-grid">
          {/* Left — Headline */}
          <div>
            <h1 className="kaplun-hero-title" style={{
              fontSize: "var(--clay-display-xl)",
              lineHeight: 1.0,
              letterSpacing: "-2.5px",
              fontWeight: 500,
              fontFamily: '"Inter", sans-serif',
              color: "var(--clay-ink)",
              marginBottom: "var(--clay-spacing-lg)"
            }}>
              Something Big<br />Is Coming
            </h1>
            <p style={{
              fontSize: "var(--clay-body-md)",
              color: "var(--clay-body)",
              marginBottom: "var(--clay-spacing-xl)",
              maxWidth: 480
            }}>
              Kaplun is building the future of intelligent automation. Enterprise-grade AI that adapts to your business.
            </p>
            <SignUpButton mode="modal">
              <button type="button" style={{
                background: "var(--clay-primary)",
                color: "var(--clay-on-primary)",
                height: 44,
                padding: "12px 20px",
                borderRadius: "var(--clay-rounded-md)",
                fontSize: "var(--clay-button)",
                fontWeight: 600,
                fontFamily: '"Inter", sans-serif',
                border: "none",
                cursor: "pointer"
              }}>
                Get Early Access
              </button>
            </SignUpButton>
          </div>

          {/* Right — Claymation illustration card */}
          <div style={{
            background: "var(--clay-surface-soft)",
            borderRadius: "var(--clay-rounded-xl)",
            padding: "var(--clay-spacing-xl)",
            height: 400,
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Gradient blobs — placeholder claymation */}
            <div style={{
              position: "absolute", width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, var(--clay-brand-pink) 0%, transparent 70%)",
              top: 40, right: 60, opacity: 0.8
            }} />
            <div style={{
              position: "absolute", width: 160, height: 160, borderRadius: "50%",
              background: "radial-gradient(circle, var(--clay-brand-teal) 0%, transparent 70%)",
              bottom: 60, left: 40, opacity: 0.8
            }} />
            <div style={{
              position: "absolute", width: 140, height: 140, borderRadius: "50%",
              background: "radial-gradient(circle, var(--clay-brand-lavender) 0%, transparent 70%)",
              top: 120, left: 140, opacity: 0.8
            }} />
          </div>
        </div>
      </section>

      {/* ═══ FEATURE CARDS SECTION ═══ */}
      <section style={{ padding: "var(--clay-spacing-section) var(--clay-spacing-lg)", maxWidth: 1280, margin: "0 auto" }}>
        <p style={{
          fontSize: "var(--clay-caption-uppercase)",
          fontWeight: 600,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "var(--clay-muted)",
          marginBottom: "var(--clay-spacing-lg)"
        }}>
          What We&apos;re Building
        </p>
        <div className="kaplun-cards-grid">
          {/* Card 1 — Hot Pink */}
          <div style={{
            background: "var(--clay-brand-pink)",
            borderRadius: "var(--clay-rounded-xl)",
            padding: "var(--clay-spacing-xl)",
            color: "var(--clay-on-primary)"
          }}>
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginBottom: "var(--clay-spacing-md)" }}>
              <rect x="4" y="4" width="32" height="32" rx="8" stroke="white" strokeWidth="2" />
              <circle cx="20" cy="20" r="6" fill="white" />
            </svg>
            <h3 style={{ fontSize: "var(--clay-title-md)", fontWeight: 600, marginBottom: "var(--clay-spacing-xs)" }}>
              AI-Powered Automation
            </h3>
            <p style={{ fontSize: "var(--clay-body-sm)", opacity: 0.9 }}>
              Intelligent workflows that adapt to your business. Built for scale from day one.
            </p>
          </div>

          {/* Card 2 — Deep Teal */}
          <div style={{
            background: "var(--clay-brand-teal)",
            borderRadius: "var(--clay-rounded-xl)",
            padding: "var(--clay-spacing-xl)",
            color: "var(--clay-on-primary)"
          }}>
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginBottom: "var(--clay-spacing-md)" }}>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="white" strokeWidth="2" />
              <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3 style={{ fontSize: "var(--clay-title-md)", fontWeight: 600, marginBottom: "var(--clay-spacing-xs)" }}>
              Enterprise Security
            </h3>
            <p style={{ fontSize: "var(--clay-body-sm)", opacity: 0.9 }}>
              Your data is protected by enterprise-grade security. SOC 2 compliant by design.
            </p>
          </div>

          {/* Card 3 — Lavender */}
          <div style={{
            background: "var(--clay-brand-lavender)",
            borderRadius: "var(--clay-rounded-xl)",
            padding: "var(--clay-spacing-xl)",
            color: "var(--clay-ink)"
          }}>
            <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginBottom: "var(--clay-spacing-md)" }}>
              <rect x="6" y="20" width="6" height="14" rx="2" fill="var(--clay-ink)" />
              <rect x="17" y="12" width="6" height="22" rx="2" fill="var(--clay-ink)" />
              <rect x="28" y="6" width="6" height="28" rx="2" fill="var(--clay-ink)" />
            </svg>
            <h3 style={{ fontSize: "var(--clay-title-md)", fontWeight: 600, marginBottom: "var(--clay-spacing-xs)" }}>
              Data-Driven Insights
            </h3>
            <p style={{ fontSize: "var(--clay-body-sm)", opacity: 0.85 }}>
              Real-time analytics that help you make smarter decisions. Know what matters, when it matters.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section style={{ padding: "0 var(--clay-spacing-lg) var(--clay-spacing-section)", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          background: "var(--clay-surface-soft)",
          borderRadius: "var(--clay-rounded-xl)",
          padding: "80px var(--clay-spacing-xl)",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "var(--clay-display-md)",
            fontWeight: 500,
            letterSpacing: "-1px",
            color: "var(--clay-ink)",
            marginBottom: "var(--clay-spacing-md)"
          }}>
            Be the First to Know
          </h2>
          <p style={{
            fontSize: "var(--clay-body-md)",
            color: "var(--clay-body)",
            marginBottom: "var(--clay-spacing-xl)"
          }}>
            Join the waitlist for early access and exclusive updates.
          </p>
          <SignUpButton mode="modal">
            <button type="button" style={{
              background: "var(--clay-primary)",
              color: "var(--clay-on-primary)",
              height: 44,
              padding: "12px 20px",
              borderRadius: "var(--clay-rounded-md)",
              fontSize: "var(--clay-button)",
              fontWeight: 600,
              fontFamily: '"Inter", sans-serif',
              border: "none",
              cursor: "pointer"
            }}>
              Join the Waitlist
            </button>
          </SignUpButton>
          <p style={{
            fontSize: "var(--clay-body-sm)",
            color: "var(--clay-muted-soft)",
            marginTop: "var(--clay-spacing-md)"
          }}>
            No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        background: "var(--clay-surface-soft)",
        padding: "80px var(--clay-spacing-lg) var(--clay-spacing-xl)"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="kaplun-footer-grid" style={{
            marginBottom: "var(--clay-spacing-2xl)"
          }}>
            {/* Brand column */}
            <div>
              <h4 style={{ fontSize: "var(--clay-title-lg)", fontWeight: 700, color: "var(--clay-ink)", marginBottom: "var(--clay-spacing-xs)" }}>
                Kaplun
              </h4>
              <p style={{ fontSize: "var(--clay-body-sm)", color: "var(--clay-muted)", maxWidth: 280 }}>
                The future of intelligent automation. Enterprise-grade AI that adapts to your business.
              </p>
            </div>
            {/* Product column */}
            <div>
              <h5 style={{ fontSize: "var(--clay-body-sm)", fontWeight: 600, color: "var(--clay-ink)", marginBottom: "var(--clay-spacing-sm)" }}>Product</h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Features", "Pricing", "FAQ"].map((item) => (
                  <li key={item} style={{ marginBottom: "var(--clay-spacing-xs)" }}>
                    <a href={`#${item.toLowerCase()}`} style={{ fontSize: "var(--clay-body-sm)", color: "var(--clay-muted)", textDecoration: "none" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company column */}
            <div>
              <h5 style={{ fontSize: "var(--clay-body-sm)", fontWeight: 600, color: "var(--clay-ink)", marginBottom: "var(--clay-spacing-sm)" }}>Company</h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["About", "Blog", "Contact"].map((item) => (
                  <li key={item} style={{ marginBottom: "var(--clay-spacing-xs)" }}>
                    <a href={`#${item.toLowerCase()}`} style={{ fontSize: "var(--clay-body-sm)", color: "var(--clay-muted)", textDecoration: "none" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal column */}
            <div>
              <h5 style={{ fontSize: "var(--clay-body-sm)", fontWeight: 600, color: "var(--clay-ink)", marginBottom: "var(--clay-spacing-sm)" }}>Legal</h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Privacy", "Terms"].map((item) => (
                  <li key={item} style={{ marginBottom: "var(--clay-spacing-xs)" }}>
                    <a href={`#${item.toLowerCase()}`} style={{ fontSize: "var(--clay-body-sm)", color: "var(--clay-muted)", textDecoration: "none" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <p style={{ fontSize: "var(--clay-body-sm)", color: "var(--clay-muted-soft)", borderTop: "1px solid var(--clay-hairline)", paddingTop: "var(--clay-spacing-lg)" }}>
            © 2026 Kaplun. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
