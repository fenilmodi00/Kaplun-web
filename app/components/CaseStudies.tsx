"use client";

import React, { useEffect, useRef, useState } from "react";

interface ClayCaseStudiesProps {
  onOpenWaitlist?: () => void;
}

export function CaseStudies({ onOpenWaitlist }: ClayCaseStudiesProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (v) {
      v.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <h3
        className="text-3xl sm:text-[48px] font-medium text-[#0a0a0a] leading-[1.0] tracking-[-1.92px] text-center"
        style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
      >
        Hear from the brands that grow with Kaplun
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Nūrio card */}
        <div className="bg-[#faf6ee] rounded-3xl border border-[rgba(209,205,199,0.5)] p-8 space-y-4 kaplun-card-lift">
          <p className="text-3xl font-bold text-[#0a0a0a]">+212%</p>
          <p className="text-sm text-[#666666]">creator-sourced revenue</p>
          <p className="text-sm text-[#383838] leading-relaxed italic">
            &quot;Kaplun turned our creator program into our fastest-growing revenue channel.&quot;
          </p>
          <p className="text-xs font-semibold text-[#0a0a0a]">Nūrio</p>
        </div>

        {/* Video card */}
        <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden group">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          >
            <source src="/media/shapes-tower.webm" type="video/webm" />
            <source src="/media/shapes-tower.mp4" type="video/mp4" />
          </video>
          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-transparent"
              aria-label="Play video"
            >
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </button>
          )}
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
            <p className="text-white text-sm font-semibold">Watch how Bloom & Co. scaled seeding</p>
          </div>
        </div>

        {/* Halcyon card */}
        <div className="bg-[#faf6ee] rounded-3xl border border-[rgba(209,205,199,0.5)] p-8 space-y-4 kaplun-card-lift">
          <p className="text-3xl font-bold text-[#0a0a0a]">40+</p>
          <p className="text-sm text-[#666666]">live campaigns managed</p>
          <p className="text-sm text-[#383838] leading-relaxed italic">
            &quot;We replaced our entire campaign spreadsheet stack with Kaplun in a week.&quot;
          </p>
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="text-sm font-semibold text-[#0a0a0a] underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Read case study
          </button>
        </div>
      </div>
    </section>
  );
}
