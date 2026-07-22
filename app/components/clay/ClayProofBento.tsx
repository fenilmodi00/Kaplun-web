"use client";

import React from "react";

const bentoItems = [
  { type: "stat", value: "+184%", label: "creator-sourced revenue" },
  { type: "stat", value: "24h", label: "creator shortlists" },
  { type: "quote", text: "Kaplun cut our creator discovery from 3 weeks to 2 days.", brand: "Nūrio" },
  { type: "stat", value: "3.2x", label: "avg. ROAS on creator ads" },
  { type: "stat", value: "85%", label: "creator response rate" },
  { type: "quote", text: "We seeded 1,200 creators in one quarter with a team of two.", brand: "Bloom & Co." },
  { type: "stat", value: "500+", label: "campaigns shipped" },
  { type: "stat", value: "40M+", label: "creator-driven impressions" },
  { type: "quote", text: "We scaled creator ads to 3.8x ROAS in under 60 days.", brand: "Velvet Skincare" },
];

function BentoCard({ item }: { item: (typeof bentoItems)[number] & { id?: string } }) {
  if (item.type === "stat") {
    return (
      <div className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
        <p className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">{item.value}</p>
        <p className="text-sm text-[#666666] mt-1">{item.label}</p>
      </div>
    );
  }
  return (
    <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
      <p className="text-sm text-[#383838] leading-relaxed italic">"{item.text}"</p>
      <p className="text-xs font-semibold text-[#0a0a0a] mt-3">{item.brand}</p>
    </div>
  );
}

export function ClayProofBento() {
  const duplicated = bentoItems.map((item, i) => ({ ...item, id: `a-${i}` })).concat(
    bentoItems.map((item, i) => ({ ...item, id: `b-${i}` }))
  );

  return (
    <section className="pb-12 sm:pb-16 overflow-hidden">
      <div className="relative">
        <div className="kaplun-marquee gap-4">
          {duplicated.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
