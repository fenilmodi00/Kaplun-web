"use client";

import React, { useEffect, useRef } from "react";

interface Band {
  label: string;
  title: string;
  body: string;
  stat: string;
  bg: string;
  text: string;
  btnBg: string;
  btnText: string;
  video?: string;
}

const bands: Band[] = [
  {
    label: "DISCOVERY",
    title: "Source creators from the most complete influencer graph",
    body: "Search by audience, engagement, content style, and historical performance across every major platform.",
    stat: "Nūrio cut creator discovery from 3 weeks to 2 days.",
    bg: "bg-[#eaf2fb]",
    text: "text-[rgb(0,20,51)]",
    btnBg: "bg-[#1a6dff]",
    btnText: "text-white",
    video: "/media/magnifier.webm",
  },
  {
    label: "SEEDING",
    title: "Run seeding programs that ship themselves",
    body: "Auto-ship products, track deliveries, collect posts, and manage rights — all from one workflow.",
    stat: "Bloom & Co. seeded 1,200 creators in one quarter with a team of two.",
    bg: "bg-[#fdf0e4]",
    text: "text-[rgb(56,16,5)]",
    btnBg: "bg-[#c45c0c]",
    btnText: "text-white",
  },
  {
    label: "CAMPAIGNS",
    title: "Orchestrate every campaign in one place",
    body: "From brief to live post to performance report — manage every moving part without a single spreadsheet.",
    stat: "Halcyon runs 40+ live campaigns without a single spreadsheet.",
    bg: "bg-[#e6f4ea]",
    text: "text-[rgb(5,50,25)]",
    btnBg: "bg-[#0d7a3b]",
    btnText: "text-white",
  },
  {
    label: "AMPLIFICATION",
    title: "Turn winning posts into paid growth",
    body: "Whitelisted creator ads, Spark Ads, and Meta Partnerships — launched and optimized from the same platform.",
    stat: "Velvet Skincare scaled creator ads to 3.8x ROAS.",
    bg: "bg-[#fce8f0]",
    text: "text-[rgb(60,10,30)]",
    btnBg: "bg-[#c21e6b]",
    btnText: "text-white",
  },
];

function BandCard({ band, onOpenWaitlist }: { band: Band; onOpenWaitlist?: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <div className={`${band.bg} rounded-3xl p-8 sm:p-14 overflow-hidden`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-current opacity-60 ${band.text}`}>
            {band.label}
          </span>

          <h3
            className={`text-3xl sm:text-[48px] font-medium leading-[1.0] tracking-[-1.92px] ${band.text}`}
            style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
          >
            {band.title}
          </h3>

          <p className="text-base sm:text-lg leading-relaxed opacity-80" style={{ color: "inherit" }}>
            {band.body}
          </p>

          <p className={`text-sm font-medium ${band.text} opacity-70`}>
            {band.stat}
          </p>

          <div className="flex items-center gap-3 flex-wrap pt-2">
            <button
              type="button"
              onClick={onOpenWaitlist}
              className={`px-5 py-2.5 rounded-xl ${band.btnBg} ${band.btnText} font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all`}
            >
              Start free trial
            </button>
            <button
              type="button"
              onClick={onOpenWaitlist}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity ${band.text}`}
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 flex items-center justify-center">
          {band.video ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full max-w-md rounded-2xl"
            >
              <source src={band.video} type="video/webm" />
            </video>
          ) : (
            <div className="w-full max-w-md h-64 sm:h-80 rounded-2xl bg-white/40 border border-black/5" />
          )}
        </div>
      </div>
    </div>
  );
}

interface ClayFeatureBandsProps {
  onOpenWaitlist?: () => void;
}

export function ClayFeatureBands({ onOpenWaitlist }: ClayFeatureBandsProps) {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {bands.map((band) => (
        <BandCard key={band.label} band={band} onOpenWaitlist={onOpenWaitlist} />
      ))}
    </section>
  );
}
