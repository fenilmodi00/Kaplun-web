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
  video: string;
  videoWidth: string;
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
    video: "/media/fun1.webm",
    videoWidth: "max-w-sm",
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
    video: "/media/fun3.webm",
    videoWidth: "max-w-md",
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
    video: "/media/fun2.webm",
    videoWidth: "max-w-lg",
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
    video: "/media/fun4.webm",
    videoWidth: "max-w-sm",
  },
];

function BandVideo({ src, widthClass }: { src: string; widthClass: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`w-full ${widthClass} rounded-2xl shadow-lg kaplun-float`}
    >
      <source src={src} type="video/webm" />
    </video>
  );
}

/* ── Sticky stacked-deck feature bands ── */

interface ClayFeatureBandsProps {
  onOpenWaitlist?: () => void;
}

const STICKY_BASE = 64; // clears the fixed nav
const STICKY_STEP = 14; // visible deck-edge sliver per band

export function ClayFeatureBands({ onOpenWaitlist }: ClayFeatureBandsProps) {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = cardRefs.current.filter((c): c is HTMLElement => c !== null);
    const observers: IntersectionObserver[] = [];

    for (let i = 0; i < cards.length - 1; i++) {
      const card = cards[i];
      const next = cards[i + 1];
      // A thin observation strip at the very top of the viewport, ending at the
      // next card's sticky line. Fires exactly when the next card starts covering.
      const stickyTop = STICKY_BASE + (i + 1) * STICKY_STEP;
      const bottomShrink = Math.max(window.innerHeight - stickyTop, 0);
      const io = new IntersectionObserver(
        ([entry]) => {
          card.style.transform = entry.isIntersecting ? "scale(0.965)" : "scale(1)";
          card.style.filter = entry.isIntersecting ? "brightness(0.93)" : "none";
        },
        { rootMargin: `0px 0px -${bottomShrink}px 0px`, threshold: 0 }
      );
      io.observe(next);
      observers.push(io);
    }

    return () => {
      observers.forEach((io) => {
        io.disconnect();
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 pb-24">
      {bands.map((band, i) => (
        <article
          key={band.label}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className={`sticky mb-8 lg:mb-12 ${band.bg} rounded-3xl overflow-hidden shadow-[0_-12px_40px_rgba(0,0,0,0.10)] transition-[transform,filter] duration-300 ease-out will-change-transform`}
          style={{ top: `${STICKY_BASE + i * STICKY_STEP}px`, zIndex: i + 1, transformOrigin: "top center" }}
        >
          <div className="min-h-[62vh] lg:min-h-[70vh] flex items-center p-8 sm:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
              <div className="lg:col-span-6 space-y-6">
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-current opacity-60 ${band.text}`}>
                  {band.label}
                </span>

                <h3
                  className={`text-3xl sm:text-[48px] font-bold leading-[1.0] tracking-[-1.92px] ${band.text}`}
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
                <BandVideo src={band.video} widthClass={band.videoWidth} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
