"use client";

import React from "react";

const resources = [
  {
    title: "Creator Playbook",
    subtitle: "The complete guide to scaling creator-led growth",
    tag: "Guide",
    bg: "bg-white",
  },
  {
    title: "2026 Creator Pricing Report",
    subtitle: "Benchmarks across 12 niches and 5 regions",
    tag: "Report",
    bg: "bg-[#faf6ee]",
  },
  {
    title: "How Kaplun uses Kaplun",
    subtitle: "Livestream — behind the scenes of our own campaigns",
    tag: "Livestream",
    bg: "bg-white",
  },
  {
    title: "Community Story",
    subtitle: "How a solo marketer built a 500-creator program",
    tag: "Story",
    bg: "bg-[#faf6ee]",
  },
  {
    title: "Come and join us",
    subtitle: "We're hiring creators, engineers, and strategists",
    tag: "Careers",
    bg: "bg-white",
  },
  {
    title: "Kaplun Academy",
    subtitle: "Free courses on creator strategy and campaign ops",
    tag: "Education",
    bg: "bg-[#faf6ee]",
  },
];

export function ClayResourcesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <h3
        className="text-3xl sm:text-[48px] font-medium text-[#0a0a0a] leading-[1.0] tracking-[-1.92px] text-center"
        style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
      >
        Learn more about creator-led growth
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <div
            key={res.title}
            className={`${res.bg} rounded-2xl border border-[rgba(209,205,199,0.5)] p-6 space-y-3 cursor-pointer hover:shadow-md transition-shadow`}
          >
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-600">
              {res.tag}
            </span>
            <h4 className="text-lg font-semibold text-[#0a0a0a]">{res.title}</h4>
            <p className="text-sm text-[#666666] leading-relaxed">{res.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
