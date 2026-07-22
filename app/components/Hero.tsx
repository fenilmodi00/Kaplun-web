"use client";

import React, { useEffect, useRef } from "react";

interface ClayHeroProps {
  onOpenWaitlist?: () => void;
}

export function Hero({ onOpenWaitlist }: ClayHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="kaplun-hero-no-padding relative bg-[#035D44] overflow-hidden h-[80vh] lg:h-[94vh] lg:min-h-[640px] lg:max-h-[980px]">
      {/* Absolute Background Video spanning full section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src="/media/homemain.mp4" type="video/mp4" />
        </video>
        {/* Soft bottom gradient transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-[#035D44] via-[#035D44]/40 to-transparent pointer-events-none" />
      </div>

      {/* Relative text content on top of video, aligned to the bottom */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-[10vh] lg:pb-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          {/* Bottom-left: pill + h1 */}
          <div className="lg:col-span-7 space-y-5">
            <a
              href="#services"
              className="kaplun-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide uppercase bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>NEW: AI CREATOR MATCHING</span>
            </a>

            <h1
              className="kaplun-reveal kaplun-reveal-delay-1 text-[36px] sm:text-[56px] lg:text-[64px] xl:text-[88px] leading-[1.0] font-bold text-[rgb(254,253,251)] tracking-[-1.8px] sm:tracking-[-2.4px] lg:tracking-[-2.8px] xl:tracking-[-3.52px]"
              style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
            >
              Build systems to grow with creators
            </h1>
          </div>

          {/* Bottom-right: sub + dual CTA */}
          <div className="kaplun-reveal kaplun-reveal-delay-2 lg:col-span-5 space-y-6 lg:pb-2">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Infrastructure to source micro-influencers, launch seeding programs, and scale creator-led growth.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a0a0a] text-white font-semibold text-sm hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Join the waitlist</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#f3f2ed] text-[#0a0a0a] font-semibold text-sm hover:bg-white active:scale-[0.98] transition-all"
              >
                Get a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
