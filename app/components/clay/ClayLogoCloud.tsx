"use client";

import React from "react";

export function ClayLogoCloud() {
  return (
    <section id="results" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Metrics Band inside Clay rounded card */}
      <div className="bg-[#faf6ee] rounded-3xl border border-[rgba(209,205,199,0.5)] p-8 sm:p-12 space-y-8">
        <p className="text-center text-sm sm:text-base text-[#666666] font-medium max-w-2xl mx-auto">
          Trusted by high-growth consumer brands. Driven by <strong className="text-[#0a0a0a]">AI discovery</strong> and executed by <strong className="text-[#0a0a0a]">creator strategists</strong>.
        </p>

        {/* 4 Metric Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs">
            <p className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">8,000+</p>
            <p className="text-xs text-[#666666] font-medium mt-1">Creators Sourced</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs">
            <p className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">500+</p>
            <p className="text-xs text-[#666666] font-medium mt-1">Campaigns Launched</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs">
            <p className="text-3xl sm:text-4xl font-bold text-emerald-600">68%</p>
            <p className="text-xs text-[#666666] font-medium mt-1">Avg. CTR Improvement</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs">
            <p className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">&lt; 24h</p>
            <p className="text-xs text-[#666666] font-medium mt-1">Time to First Creators Live</p>
          </div>
        </div>

        {/* Customer Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Quote 1: Skin+Me */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                4.5× Increase in Signups
              </span>
              <span className="text-sm font-bold text-[#0a0a0a]">Skin+Me</span>
            </div>
            <p className="text-sm text-[#383838] leading-relaxed italic">
              "Working with Kaplun felt like hiring an entire influencer marketing team — we supplied the brief, they executed a 360° campaign across hundreds of creators."
            </p>
            <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0a0a0a]">Freddie Scheckter</span>
              <span className="text-neutral-400">Chief of Staff</span>
            </div>
          </div>

          {/* Quote 2: Fussy */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700 px-3 py-1 rounded-full">
                +175% Revenue in 2 Months
              </span>
              <span className="text-sm font-bold text-[#0a0a0a]">Fussy</span>
            </div>
            <p className="text-sm text-[#383838] leading-relaxed italic">
              "Kaplun took over the heavy lifting and manual workflows, freeing us up to focus on strategy — and delivered a 175% increase in revenue in 2 months."
            </p>
            <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0a0a0a]">Bríd McNulty</span>
              <span className="text-neutral-400">Global Influencer Channel Lead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
