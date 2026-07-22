"use client";

import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

export function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (drawerTimer.current) clearTimeout(drawerTimer.current);
    };
  }, []);

  const setDrawer = (open: boolean) => {
    if (drawerTimer.current) {
      clearTimeout(drawerTimer.current);
      drawerTimer.current = null;
    }
    if (open) {
      setDrawerMounted(true);
      setMobileMenuOpen(true);
      drawerTimer.current = setTimeout(() => {
        setDrawerVisible(true);
      }, 20);
    } else {
      setDrawerVisible(false);
      setMobileMenuOpen(false);
      drawerTimer.current = setTimeout(() => {
        setDrawerMounted(false);
      }, 300);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setDrawer(false);
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
      {/* Backdrop overlay for mobile menu drawer */}
      {drawerMounted && (
        <div
          className={`fixed inset-0 z-40 bg-black/15 backdrop-blur-[1px] md:hidden transition-opacity duration-300 ${
            drawerVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setDrawer(false)}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-300">
        {/* Floating navbar container on both mobile (92% width) and desktop (98% width) */}
        <div
          className={`pointer-events-auto w-[92%] md:w-[98%] max-w-[1600px] h-[58.5px] bg-white/98 backdrop-blur-md border-b border-x border-[rgba(209,205,199,0.6)] rounded-b-2xl sm:rounded-b-3xl rounded-t-none px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "shadow-md bg-white border-neutral-300" : "shadow-none"
          }`}
        >
          {/* Left Side: Brand Logo + Desktop Nav Links */}
          <div className="flex items-center gap-6 lg:gap-8">
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
          </div>

          {/* Right Action Buttons with Clay's Exact Sizing & Styling */}
          <div className="hidden md:flex items-center gap-2">
            {/* Command K Search Shortcut chip */}
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="flex items-center gap-2 h-[38px] px-3.5 rounded-[12px] text-[13.92px] font-medium tracking-[-0.14px] text-neutral-700 hover:bg-[#f4f3f0] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
              title="Search creator database"
            >
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-mono border border-neutral-200 rounded text-neutral-600 bg-white">
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
              className="text-[13.92px] font-medium tracking-[-0.14px] text-[#0a0a0a] hover:text-[#7b7974] px-3 py-2 transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
            >
              Log in
            </button>

            {/* Get a demo — Oat-200 Light Rounded Rectangle button */}
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="bg-[#f3f2ed] hover:bg-[#eae8df] text-[#0a0a0a] border-[0.8px] border-transparent h-[38px] px-4 rounded-[12px] text-[13.92px] font-medium tracking-[-0.14px] flex items-center justify-center transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
            >
              Get a demo
            </button>

            {/* Start free trial — Solid Black Rounded Button */}
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="bg-[#0a0a0a] text-white hover:bg-neutral-800 border-[0.8px] border-transparent h-[38px] px-4 rounded-[12px] text-[13.92px] font-medium tracking-[-0.14px] flex items-center justify-center transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
            >
              Start free trial
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setDrawer(!mobileMenuOpen)}
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

        {/* Floating Mobile Drawer (Seamless extension of the floating navbar) */}
        {drawerMounted && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={`pointer-events-auto w-[92%] md:w-[98%] max-w-[1600px] bg-white/98 backdrop-blur-md p-6 space-y-6 md:hidden overflow-y-auto border-b border-x border-[rgba(209,205,199,0.6)] rounded-b-3xl shadow-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              drawerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
            onClick={() => setDrawer(false)}
            onKeyDown={(e) => { if (e.key === "Escape") setDrawer(false); }}
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
                  setDrawer(false);
                  onOpenWaitlist?.();
                }}
                className="w-full h-[44px] rounded-[12px] bg-[#0a0a0a] text-white font-semibold text-sm hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
              >
                Start free trial
              </button>
              <button
                type="button"
                onClick={() => {
                  setDrawer(false);
                  onOpenWaitlist?.();
                }}
                className="w-full h-[44px] rounded-[12px] bg-[#f3f2ed] hover:bg-[#eae8df] text-[#0a0a0a] font-semibold text-sm transition-colors cursor-pointer"
              >
                Get a demo
              </button>
              <button
                type="button"
                onClick={() => {
                  setDrawer(false);
                  onOpenWaitlist?.();
                }}
                className="w-full py-2.5 text-[#0a0a0a] hover:text-[#7b7974] font-semibold text-sm transition-colors cursor-pointer text-center"
              >
                Log in
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
