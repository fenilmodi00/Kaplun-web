"use client";

import React from "react";

interface ClayHeroProps {
  onOpenWaitlist?: () => void;
}

export function ClayHero({ onOpenWaitlist }: ClayHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 3D Visual Backdrop representing Clay's interactive hero header */}
      <div className="w-full h-64 sm:h-80 md:h-[380px] rounded-3xl overflow-hidden relative mb-12 shadow-sm border border-[rgba(209,205,199,0.5)] bg-gradient-to-b from-[#134e3a] via-[#1b5e46] to-[#0f3d2e] flex items-center justify-center">
        {/* Soft atmospheric radial glows */}
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-teal-300/20 blur-3xl" />
        
        {/* Decorative 3D shapes representing Kaplun's AI engine */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6 text-center">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 shadow-xl transform -rotate-6 flex items-center justify-center border border-white/20">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 shadow-2xl flex items-center justify-center border border-white/20">
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 shadow-xl transform rotate-6 flex items-center justify-center border border-white/20">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Content Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Top Launch Badge — Clay Rounded Square Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide uppercase bg-[#0e1217] text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>LATEST LAUNCH: MCP IN KAPLUN &rarr;</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] leading-[1.02] font-semibold text-[#0a0a0a] tracking-[-0.035em]">
            Build systems to <br className="hidden sm:inline" />
            grow revenue
          </h1>
        </div>

        <div className="lg:col-span-4 lg:pt-14 space-y-6">
          {/* Subtitle Description */}
          <p className="text-lg text-[#383838] leading-relaxed font-normal">
            Infrastructure to get any data, run agentic workflows, and launch GTM plays.
          </p>

          {/* Hero CTA Button — Clay White Rounded Rectangle Button with Arrow */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0a0a0a] border border-black/10 font-semibold text-base hover:bg-neutral-100 active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Start free trial</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
