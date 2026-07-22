"use client";

import { useState } from "react";
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

  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#0a0a0a] selection:bg-amber-200">
      {/* 1. Nav */}
      <Navbar onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* 2. Hero */}
      <ClayHero onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* 3. Social proof + bento marquee */}
      <ClayLogoCloud />
      <ClayProofBento />

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
        <ClayFeatureBands onOpenWaitlist={() => setWaitlistOpen(true)} />
      </ScrollReveal>

      {/* 7. Infrastructure band */}
      <ScrollReveal>
        <ClayInfraBand onOpenWaitlist={() => setWaitlistOpen(true)} />
      </ScrollReveal>

      {/* 8. Case studies */}
      <ScrollReveal>
        <ClayCaseStudies onOpenWaitlist={() => setWaitlistOpen(true)} />
      </ScrollReveal>

      {/* 9. Resources grid */}
      <ScrollReveal>
        <ClayResourcesGrid />
      </ScrollReveal>

      {/* 10. CTA band */}
      <ScrollReveal>
        <ClayCtaBand onOpenWaitlist={() => setWaitlistOpen(true)} />
      </ScrollReveal>

      {/* 11. Footer */}
      <ClayFooter />

      {/* Waitlist Modal */}
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </main>
  );
}
