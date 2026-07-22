"use client";

import React, { useState } from "react";

const chipPrompts: Record<string, { query: string; resultsCount: string; sampleTag: string }> = {
  creators: {
    query: "Find Instagram lifestyle & beauty creators in the UK with >5% engagement and 100k+ followers",
    resultsCount: "840 Matched Creators",
    sampleTag: "Creator Discovery",
  },
  campaigns: {
    query: "Find top-performing TikTok UGC video hooks for skincare seeding campaigns",
    resultsCount: "1,250 Verified Hooks",
    sampleTag: "Campaign Intelligence",
  },
  ads: {
    query: "Find whitelisted Meta partnership ad creative with 3.5x+ historical ROAS",
    resultsCount: "420 Tested Assets",
    sampleTag: "Whitelisted Ad Assets",
  },
};

export function ClayAiSearchWidget() {
  const [selectedChip, setSelectedChip] = useState<"creators" | "campaigns" | "ads">("creators");
  const [inputValue, setInputValue] = useState(chipPrompts.creators.query);

  const handleChipClick = (chip: "creators" | "campaigns" | "ads") => {
    setSelectedChip(chip);
    setInputValue(chipPrompts[chip].query);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
      {/* Title */}
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-5xl font-semibold text-[#0a0a0a] tracking-tight">
          What creators do you want to source?
        </h2>
        <p className="text-base sm:text-lg text-[#666666]">
          Search natural language briefs or explore pre-vetted creator databases.
        </p>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              onClick={() => handleChipClick("creators")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedChip === "creators"
                  ? "bg-[#0a0a0a] text-white shadow-xs"
                  : "bg-[#faf6ee] text-[#383838] hover:bg-neutral-200/60"
              }`}
            >
              Find creator matches
            </button>

            <button
              type="button"
              onClick={() => handleChipClick("campaigns")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedChip === "campaigns"
                  ? "bg-[#0a0a0a] text-white shadow-xs"
                  : "bg-[#faf6ee] text-[#383838] hover:bg-neutral-200/60"
              }`}
            >
              Find campaign hooks
            </button>

            <button
              type="button"
              onClick={() => handleChipClick("ads")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedChip === "ads"
                  ? "bg-[#0a0a0a] text-white shadow-xs"
                  : "bg-[#faf6ee] text-[#383838] hover:bg-neutral-200/60"
              }`}
            >
              Find whitelisted ad assets
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
