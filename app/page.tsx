"use client";

import { useRef, useState } from "react";
import { WaitlistModal } from "./components/WaitlistModal";
import { Navbar } from "./components/Navbar";
import { ClayHero } from "./components/clay/ClayHero";
import { ClayLogoCloud } from "./components/clay/ClayLogoCloud";
import { ClayProofBento } from "./components/clay/ClayProofBento";
import { ClayInteractiveTabs } from "./components/clay/ClayInteractiveTabs";
import { ClayAiSearchWidget } from "./components/clay/ClayAiSearchWidget";
import { ClayFeatureBands } from "./components/clay/ClayFeatureBands";
import { ClayInfraBand } from "./components/clay/ClayInfraBand";
import { ClayCaseStudies } from "./components/clay/ClayCaseStudies";
import { ClayResourcesGrid } from "./components/clay/ClayResourcesGrid";
import { ClayCtaBand } from "./components/clay/ClayCtaBand";
import { ClayFooter } from "./components/clay/ClayFooter";
import { ScrollReveal } from "./components/clay/ScrollReveal";

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
      <ClayHero onOpenWaitlist={openWaitlist} />

      {/* 3. Social proof + bento marquee wrapped in a rounded overlapping container */}
      <div className="relative z-10 -mt-10 sm:-mt-16 bg-[#fffaf0] rounded-t-[32px] sm:rounded-t-[48px] border-t border-[rgba(209,205,199,0.3)] shadow-[0_-12px_32px_rgba(0,0,0,0.02)]">
        <ClayLogoCloud />
        <ClayProofBento />
      </div>

      {/* 4. Services tabs */}
      <ScrollReveal>
        <ClayInteractiveTabs />
      </ScrollReveal>

      {/* 5. AI prompt widget */}
      <ScrollReveal>
        <ClayAiSearchWidget />
      </ScrollReveal>

      {/* 6. 4 stacked tinted feature bands */}
      <ScrollReveal>
        <ClayFeatureBands onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 7. Infrastructure band */}
      <ScrollReveal>
        <ClayInfraBand onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 8. Case studies */}
      <ScrollReveal>
        <ClayCaseStudies onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 9. Resources grid — handles its own per-card reveal */}
      <ClayResourcesGrid />

      {/* 10. CTA band */}
      <ScrollReveal>
        <ClayCtaBand onOpenWaitlist={openWaitlist} />
      </ScrollReveal>

      {/* 11. Footer */}
      <ClayFooter />

      {/* Waitlist Modal — stays mounted through the exit transition */}
      <WaitlistModal open={waitlistOpen} mounted={waitlistMounted} onClose={closeWaitlist} />
    </main>
  );
}
