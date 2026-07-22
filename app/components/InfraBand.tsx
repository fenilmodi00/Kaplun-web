"use client";

import React from "react";

interface ClayInfraBandProps {
  onOpenWaitlist?: () => void;
}

export function InfraBand({ onOpenWaitlist }: ClayInfraBandProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border border-[rgba(209,205,199,0.5)] p-8 sm:p-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-neutral-100 text-neutral-700">
              CREATOR INFRASTRUCTURE
            </span>

            <h3
              className="text-3xl sm:text-[48px] font-medium text-[#0a0a0a] leading-[1.0] tracking-[-1.92px]"
              style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
            >
              Build systems that make your team more productive
            </h3>

            <p className="text-base sm:text-lg text-[#383838] leading-relaxed">
              AI-assisted briefs, automated outreach, and real-time dashboards so your marketers spend time on strategy, not spreadsheets.
            </p>

            <div className="flex items-center gap-3 flex-wrap pt-2">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="px-5 py-2.5 rounded-xl bg-[#0a0a0a] text-white font-semibold text-sm hover:bg-neutral-800 active:scale-[0.98] transition-all"
              >
                Start free trial
              </button>
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="px-5 py-2.5 rounded-xl bg-[#f3f2ed] text-[#0a0a0a] font-semibold text-sm hover:bg-white active:scale-[0.98] transition-all"
              >
                Get a demo
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {/* Chat mock */}
            <div className="bg-[#faf6ee] rounded-2xl p-5 border border-black/5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">K</div>
                <div className="bg-white rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-[#383838] shadow-sm border border-black/5">
                  Which skincare micro-creators have &gt;8% engagement this month?
                </div>
              </div>
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">AI</div>
                <div className="bg-[#0a0a0a] rounded-xl rounded-tr-none px-4 py-2.5 text-sm text-white shadow-sm">
                  Found 142 creators. Top match: @glowdaily (12.3% ER, 180k followers, UK-based).
                </div>
              </div>
            </div>

            {/* Stat card */}
            <div className="bg-[#faf5e8] rounded-2xl p-5 border border-black/5">
              <p className="text-2xl font-bold text-[#0a0a0a]">+32%</p>
              <p className="text-sm text-[#666666]">more revenue per marketer with Kaplun</p>
              <p className="text-xs text-[#9a9a9a] mt-1">Terrapin case study</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
