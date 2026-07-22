"use client";

import { useState } from "react";
import { WaitlistModal } from "./components/WaitlistModal";
import { Navbar } from "./components/Navbar";
import { ClayHero } from "./components/clay/ClayHero";
import { ClayLogoCloud } from "./components/clay/ClayLogoCloud";
import { ClayInteractiveTabs } from "./components/clay/ClayInteractiveTabs";
import { ClayAiSearchWidget } from "./components/clay/ClayAiSearchWidget";
import { ClayFeatureCards } from "./components/clay/ClayFeatureCards";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#0a0a0a] selection:bg-amber-200">
      {/* ═══ 80% WIDTH CLAY STYLED FLOATING NAVBAR ═══ */}
      <Navbar onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* ═══ HERO SECTION ═══ */}
      <ClayHero onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* ═══ LOGO PROOF BAND & METRICS ═══ */}
      <ClayLogoCloud />

      {/* ═══ KAPLUN SERVICES TABS ═══ */}
      <ClayInteractiveTabs />

      {/* ═══ WHAT CREATORS DO YOU WANT TO SOURCE SEARCH CARD ═══ */}
      <ClayAiSearchWidget />

      {/* ═══ HOW IT WORKS (SOURCING, ACTIVATION, AMPLIFICATION) ═══ */}
      <ClayFeatureCards onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* ═══ PRICING & FINAL CTA BAND ═══ */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0e1217] rounded-3xl p-10 sm:p-16 text-white text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 bg-white/10 px-3.5 py-1.5 rounded-full">
              JOIN THE FUTURE OF CREATOR MARKETING
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Ready to scale your creator growth engine?
            </h2>
            <p className="text-base sm:text-lg text-neutral-400">
              Join leading consumer brands using Kaplun to source, activate, and amplify creator campaigns.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => setWaitlistOpen(true)}
              className="px-8 py-4 rounded-full bg-white text-[#0a0a0a] font-bold text-base hover:bg-neutral-100 transition-colors shadow-lg active:scale-95"
            >
              Get Early Access &rarr;
            </button>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-neutral-700 text-white font-semibold text-base hover:bg-neutral-800 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[rgba(209,205,199,0.5)] bg-[#faf6ee] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-xs sm:text-sm text-[#666666]">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-[#0a0a0a]">
              <span>Kaplun</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed">
              The AI Creator-Led Growth Partner. Sourcing, seeding, affiliates, and creator ads, end-to-end.
            </p>
            <p className="text-[11px] text-neutral-400">© 2026 Kaplun Tech. All rights reserved.</p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-[11px] text-[#0a0a0a]">Services</h5>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer"><a href="#services">Influencer Sourcing</a></li>
              <li className="hover:text-black cursor-pointer"><a href="#services">Seeding & Affiliates</a></li>
              <li className="hover:text-black cursor-pointer"><a href="#services">Organic Content</a></li>
              <li className="hover:text-black cursor-pointer"><a href="#services">Creator Ads</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-[11px] text-[#0a0a0a]">How It Works</h5>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer"><a href="#how-it-works">01. Sourcing</a></li>
              <li className="hover:text-black cursor-pointer"><a href="#how-it-works">02. Activation</a></li>
              <li className="hover:text-black cursor-pointer"><a href="#how-it-works">03. Amplification</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-[11px] text-[#0a0a0a]">Company</h5>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer"><a href="#results">Results & Stories</a></li>
              <li className="hover:text-black cursor-pointer"><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* ═══ WAITLIST MODAL ═══ */}
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </main>
  );
}
