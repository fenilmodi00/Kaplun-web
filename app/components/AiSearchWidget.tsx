"use client";

import React, { useState } from "react";

const chipPrompts: Record<string, { query: string; resultsCount: string; sampleTag: string }> = {
  skincare: {
    query: "Find skincare creators with >5% engagement and 100k+ followers in the UK and US",
    resultsCount: "840 Matched Creators",
    sampleTag: "Creator Discovery",
  },
  fitness: {
    query: "Find fitness creators with high engagement and authentic audience in Europe",
    resultsCount: "1,250 Verified Creators",
    sampleTag: "Creator Discovery",
  },
  food: {
    query: "Find food and beverage creators with strong storytelling and 50k+ followers",
    resultsCount: "620 Matched Creators",
    sampleTag: "Creator Discovery",
  },
};

export function AiSearchWidget() {
  const [selectedChip, setSelectedChip] = useState<"skincare" | "fitness" | "food">("skincare");
  const [inputValue, setInputValue] = useState(chipPrompts.skincare.query);

  const handleChipClick = (chip: "skincare" | "fitness" | "food") => {
    setSelectedChip(chip);
    setInputValue(chipPrompts[chip].query);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
      {/* Title */}
      <div className="space-y-3">
        <h3
          className="text-3xl sm:text-5xl lg:text-[48px] font-medium text-[#0a0a0a] tracking-[-1.92px] leading-[1.0]"
          style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
        >
          What creators do you want to source?
        </h3>
      </div>

      {/* AI Search Card styled with Clay aesthetics */}
      <div className="bg-white rounded-3xl border border-[rgba(209,205,199,0.6)] shadow-xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden">
        {/* Search Input Box */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe what creators or campaign brief you want to run..."
            className="w-full bg-[#faf6ee] text-[#0a0a0a] placeholder-[#8e8e8e] text-base sm:text-lg rounded-2xl py-4 pl-5 pr-14 border border-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 font-medium transition-all"
          />
          <button
            type="button"
            className="absolute right-3 p-3 bg-[#0a0a0a] text-white rounded-xl hover:bg-neutral-800 transition-transform active:scale-95 shadow-sm"
            aria-label="Execute search query"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Prompt Chips Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => handleChipClick("skincare")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedChip === "skincare"
                  ? "bg-[#0a0a0a] text-white shadow-xs"
                  : "bg-[#faf6ee] text-[#383838] hover:bg-neutral-200/60"
              }`}
            >
              Find skincare creators
            </button>

            <button
              type="button"
              onClick={() => handleChipClick("fitness")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedChip === "fitness"
                  ? "bg-[#0a0a0a] text-white shadow-xs"
                  : "bg-[#faf6ee] text-[#383838] hover:bg-neutral-200/60"
              }`}
            >
              Find fitness creators
            </button>

            <button
              type="button"
              onClick={() => handleChipClick("food")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedChip === "food"
                  ? "bg-[#0a0a0a] text-white shadow-xs"
                  : "bg-[#faf6ee] text-[#383838] hover:bg-neutral-200/60"
              }`}
            >
              Find food creators
            </button>
          </div>

          {/* Result Badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{chipPrompts[selectedChip].resultsCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
