"use client";

import React from "react";

interface ClayFeatureCardsProps {
  onOpenWaitlist?: () => void;
}

export function ClayFeatureCards({ onOpenWaitlist }: ClayFeatureCardsProps) {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
          HOW IT WORKS
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold text-[#0a0a0a] tracking-tight">
          3 steps to scalable creator growth
        </h2>
      </div>

      {/* ── STEP 1: SOURCING ── */}
      <div className="bg-[#faf6ee] rounded-3xl border border-[rgba(209,205,199,0.5)] p-8 sm:p-14 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100 text-blue-700">
              STEP 01 — SOURCING
            </span>

            <h3 className="text-3xl sm:text-5xl font-semibold leading-tight text-[#0a0a0a] tracking-tight">
              AI + Human strategists <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                surface high-performing creators
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#383838] leading-relaxed">
              AI plus a human strategist surface the creators most likely to perform for your brand. Vetted shortlists delivered in 24 hours with complete engagement, audience majority, and fraud audits.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="px-6 py-3.5 rounded-full bg-[#0a0a0a] text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Join Waitlist &rarr;
              </button>
            </div>
          </div>

          {/* Card Graphic */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-black/5 shadow-md h-72 sm:h-80 flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-sky-50/30">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-3 font-bold text-xl">
              01
            </div>
            <h4 className="text-xl font-bold text-[#0a0a0a]">Audience-Matched Shortlists</h4>
            <p className="text-xs text-[#666666] max-w-sm mt-2">Delivered in 24 hours with pre-negotiated rate benchmarks</p>
          </div>
        </div>
      </div>

      {/* ── STEP 2: ACTIVATION ── */}
      <div className="bg-[#faf6ee] rounded-3xl border border-[rgba(209,205,199,0.5)] p-8 sm:p-14 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-700">
              STEP 02 — ACTIVATION & SEEDING
            </span>

            <h3 className="text-3xl sm:text-5xl font-semibold leading-tight text-[#0a0a0a] tracking-tight">
              Automated gifting, <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                contracts & onboarding
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#383838] leading-relaxed">
              We send product, sign contracts, and onboard every creator to your affiliate platform automatically. Your team reviews and approves everything from one unified dashboard.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="px-6 py-3.5 rounded-full bg-[#0a0a0a] text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Join Waitlist &rarr;
              </button>
            </div>
          </div>

          {/* Card Graphic */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-black/5 shadow-md h-72 sm:h-80 flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30">
            <div className="w-16 h-16 rounded-2xl bg-amber-600/10 flex items-center justify-center text-amber-600 mb-3 font-bold text-xl">
              02
            </div>
            <h4 className="text-xl font-bold text-[#0a0a0a]">Hands-Free Logistics</h4>
            <p className="text-xs text-[#666666] max-w-sm mt-2">Gifting fulfillment, usage rights management & tracking links</p>
          </div>
        </div>
      </div>

      {/* ── STEP 3: AMPLIFICATION ── */}
      <div className="bg-[#faf6ee] rounded-3xl border border-[rgba(209,205,199,0.5)] p-8 sm:p-14 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100 text-emerald-700">
              STEP 03 — AMPLIFICATION & ADS
            </span>

            <h3 className="text-3xl sm:text-5xl font-semibold leading-tight text-[#0a0a0a] tracking-tight">
              Ad-ready creative plugged <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                into paid-media pipeline
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#383838] leading-relaxed">
              Ad-ready whitelisted creative lands in your paid-media pipeline. Run it as-is or A/B test — every asset comes with full usage rights, raw B-roll, and real-time performance tracking.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="px-6 py-3.5 rounded-full bg-[#0a0a0a] text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Join Waitlist &rarr;
              </button>
            </div>
          </div>

          {/* Card Graphic */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-black/5 shadow-md h-72 sm:h-80 flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-600 mb-3 font-bold text-xl">
              03
            </div>
            <h4 className="text-xl font-bold text-[#0a0a0a]">Whitelisted Creator Ads</h4>
            <p className="text-xs text-[#666666] max-w-sm mt-2">Plug Meta & TikTok partnership ads straight into paid campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
}
