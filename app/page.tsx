"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { WaitlistModal } from "./components/WaitlistModal";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCloud } from "./components/LogoCloud";
import { ProofBento } from "./components/ProofBento";
import { ScrollReveal } from "./components/ScrollReveal";

const InteractiveTabs = dynamic(() => import("./components/InteractiveTabs").then(m => ({ default: m.InteractiveTabs })), { ssr: false });
const AiSearchWidget = dynamic(() => import("./components/AiSearchWidget").then(m => ({ default: m.AiSearchWidget })), { ssr: false });
const FeatureBands = dynamic(() => import("./components/FeatureBands").then(m => ({ default: m.FeatureBands })), { ssr: false });
const InfraBand = dynamic(() => import("./components/InfraBand").then(m => ({ default: m.InfraBand })), { ssr: false });
const CaseStudies = dynamic(() => import("./components/CaseStudies").then(m => ({ default: m.CaseStudies })), { ssr: false });
const ResourcesGrid = dynamic(() => import("./components/ResourcesGrid").then(m => ({ default: m.ResourcesGrid })), { ssr: false });
const CtaBand = dynamic(() => import("./components/CtaBand").then(m => ({ default: m.CtaBand })), { ssr: false });
const Footer = dynamic(() => import("./components/Footer").then(m => ({ default: m.Footer })), { ssr: false });

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistMounted, setWaitlistMounted] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openWaitlist = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setWaitlistMounted(true);
    setWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setWaitlistOpen(false);
    closeTimer.current = setTimeout(() => setWaitlistMounted(false), 280);
  };

  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#0a0a0a] selection:bg-amber-200">
      {/* 1. Nav */}
      <Navbar onOpenWaitlist={openWaitlist} />

      {/* 2. Hero */}
      <Hero onOpenWaitlist={openWaitlist} />

      {/* 3. Social proof + bento marquee wrapped in a rounded overlapping container */}
      <div className="relative z-10 mt-[-6vh] sm:-mt-16 bg-[#fffaf0] rounded-t-[32px] sm:rounded-t-[48px] border-t border-[rgba(209,205,199,0.3)] shadow-[0_-12px_32px_rgba(0,0,0,0.02)]">
        <LogoCloud />
        <ProofBento />
      </div>

      {/* 4. Services tabs */}
      <ScrollReveal>
        <InteractiveTabs />
      </ScrollReveal>

      {/* 5. AI prompt widget */}
      <ScrollReveal>
        <AiSearchWidget />
      </ScrollReveal>

      {/* 6. 4 stacked tinted feature bands */}
      <ScrollReveal>
        <FeatureBands onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 7. Infrastructure band */}
      <ScrollReveal>
        <InfraBand onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 8. Case studies */}
      <ScrollReveal>
        <CaseStudies onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 9. Resources grid — handles its own per-card reveal */}
      <ResourcesGrid />

      {/* 10. CTA band */}
      <ScrollReveal>
        <CtaBand onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 11. Footer */}
      <Footer />

      {/* Waitlist Modal — stays mounted through the exit transition */}
      <WaitlistModal open={waitlistOpen} mounted={waitlistMounted} onClose={closeWaitlist} />
    </main>
  );
}
