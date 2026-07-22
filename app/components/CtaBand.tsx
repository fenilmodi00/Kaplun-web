"use client";

import React from "react";

interface ClayCtaBandProps {
  onOpenWaitlist?: () => void;
}

export function CtaBand({ onOpenWaitlist }: ClayCtaBandProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-[44px] font-medium text-[#0a0a0a] leading-[1.1] tracking-[-0.88px]"
          style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
        >
          Turn your creator ideas into revenue today
        </h2>
        <p className="text-base sm:text-lg text-[#666666]">
          Book your demo today. No commitment required.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-xl bg-[#0a0a0a] text-white font-semibold text-sm hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-sm"
          >
            Join the waitlist
          </button>
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-xl bg-[#f3f2ed] text-[#0a0a0a] font-semibold text-sm hover:bg-white active:scale-[0.98] transition-all"
          >
            Get a demo
          </button>
        </div>
      </div>
    </section>
  );
}
