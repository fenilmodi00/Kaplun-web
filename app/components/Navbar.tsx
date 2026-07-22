"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

export function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      {/* 85% width top navbar container attached flush to the top of screen */}
      <div
        className={`pointer-events-auto w-[94%] sm:w-[88%] lg:w-[85%] max-w-6xl h-[58.5px] bg-white/98 backdrop-blur-md border-b border-x border-[rgba(209,205,199,0.6)] rounded-b-2xl sm:rounded-b-3xl rounded-t-none px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "shadow-md bg-white border-neutral-300" : "shadow-none"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-[#0a0a0a] tracking-tight no-underline hover:opacity-90 transition-opacity"
        >
          <Logo size={24} />
          <span className="font-semibold text-lg tracking-tight">Kaplun</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-[#0a0a0a] hover:text-[#7b7974] transition-colors"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, "#how-it-works")}
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-[#0a0a0a] hover:text-[#7b7974] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#results"
            onClick={(e) => handleNavClick(e, "#results")}
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-[#0a0a0a] hover:text-[#7b7974] transition-colors"
          >
            Results
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-[#0a0a0a] hover:text-[#7b7974] transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Right Action Buttons with Clay's Exact Sizing & Styling */}
        <div className="hidden md:flex items-center gap-2">
          {/* Command K Search Shortcut chip */}
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-[#f4f3f0] transition-colors cursor-pointer"
            title="Search creator database"
          >
            <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-mono border border-neutral-200 rounded text-neutral-600 bg-neutral-50">
              ⌘ K
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-neutral-500">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Vertical Split Line */}
          <div className="h-4 w-[1px] bg-[#bfc4cd]/60 my-auto mx-0.5" />

          {/* Log in text link */}
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="text-xs font-semibold text-[#0a0a0a] hover:text-[#7b7974] px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            Log in
          </button>

          {/* Get a demo — Oat-200 Light Rounded Rectangle button */}
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="px-3.5 py-1.5 rounded-xl bg-[#f3f2ed] hover:bg-[#dad4c8] text-xs font-semibold text-[#0a0a0a] transition-all cursor-pointer"
          >
            Get a demo
          </button>

          {/* Start free trial — Solid Black Rounded Button */}
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="px-3.5 py-1.5 rounded-xl bg-[#000000] text-white text-xs font-semibold hover:bg-[#282c35] active:scale-95 transition-all shadow-xs cursor-pointer"
          >
            Start free trial
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0a0a0a] hover:bg-[#f4f3f0] rounded-xl transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[58.5px] z-40 bg-white/98 backdrop-blur-md p-6 space-y-6 md:hidden overflow-y-auto pointer-events-auto border-b border-neutral-200 shadow-xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="space-y-3 text-base font-semibold text-[#0a0a0a]">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="block py-2.5 px-3 rounded-xl hover:bg-[#faf5e8]"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "#how-it-works")}
              className="block py-2.5 px-3 rounded-xl hover:bg-[#faf5e8]"
            >
              How It Works
            </a>
            <a
              href="#results"
              onClick={(e) => handleNavClick(e, "#results")}
              className="block py-2.5 px-3 rounded-xl hover:bg-[#faf5e8]"
            >
              Results
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="block py-2.5 px-3 rounded-xl hover:bg-[#faf5e8]"
            >
              Pricing
            </a>
          </div>

          <div className="pt-4 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist?.();
              }}
              className="w-full py-3.5 rounded-xl bg-[#000000] text-white font-semibold text-sm hover:bg-[#282c35] transition-colors shadow-md"
            >
              Start free trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
