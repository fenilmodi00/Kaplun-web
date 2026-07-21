"use client";

import { useState, useEffect, useRef } from "react";

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Threshold for scrolled shadow state
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        // Scrolling down & passed top threshold
        if (!mobileMenuOpen) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollYRef.current) {
        // Scrolling up (even slightly)
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setIsVisible(true);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className="kaplun-capsule-nav-wrapper"
        style={{
          position: "fixed",
          top: "16px",
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
          pointerEvents: "none",
          transform: isVisible || mobileMenuOpen ? "translateY(0)" : "translateY(-140%)",
          opacity: isVisible || mobileMenuOpen ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
        }}
      >
        <div
          className="kaplun-capsule-bar"
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: "880px",
            height: "56px",
            background: "rgba(255, 250, 240, 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(10, 10, 10, 0.08)",
            borderRadius: "9999px",
            boxShadow: isScrolled
              ? "0 12px 32px -8px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)"
              : "0 8px 24px -6px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 8px 0 24px",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "var(--clay-ink)",
              letterSpacing: "-0.5px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>Kaplun</span>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--clay-brand-pink)",
                display: "inline-block",
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="kaplun-desktop-links" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="kaplun-capsule-link"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "#how-it-works")}
              className="kaplun-capsule-link"
            >
              How It Works
            </a>
            <a
              href="#results"
              onClick={(e) => handleNavClick(e, "#results")}
              className="kaplun-capsule-link"
            >
              Results
            </a>
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="kaplun-btn kaplun-desktop-cta"
              style={{
                background: "var(--clay-primary)",
                color: "var(--clay-on-primary)",
                height: "40px",
                padding: "0 20px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Join Waitlist
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="kaplun-mobile-toggle"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: mobileMenuOpen ? "rgba(10, 10, 10, 0.08)" : "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--clay-ink)",
                transition: "background-color 0.2s ease",
              }}
            >
              {mobileMenuOpen ? (
                /* Close Icon (X) */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                /* Hamburger Menu Icon */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="17" x2="20" y2="17"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="kaplun-mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 45,
            background: "rgba(10, 10, 10, 0.25)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            animation: "fadeIn 0.25s ease forwards",
          }}
        >
          <div
            className="kaplun-mobile-menu-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: "80px",
              left: "16px",
              right: "16px",
              maxWidth: "500px",
              margin: "0 auto",
              background: "rgba(255, 250, 240, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(10, 10, 10, 0.1)",
              borderRadius: "24px",
              padding: "20px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              animation: "slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="kaplun-mobile-link"
            >
              Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "#how-it-works")}
              className="kaplun-mobile-link"
            >
              How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#results"
              onClick={(e) => handleNavClick(e, "#results")}
              className="kaplun-mobile-link"
            >
              Results
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <div style={{ height: "1px", background: "var(--clay-hairline)", margin: "4px 0" }} />

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="kaplun-btn"
              style={{
                background: "var(--clay-primary)",
                color: "var(--clay-on-primary)",
                height: "48px",
                width: "100%",
                borderRadius: "9999px",
                fontSize: "15px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              Join Waitlist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
