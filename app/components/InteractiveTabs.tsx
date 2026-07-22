"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  metrics: string;
  codeSnippet: string;
  tableData: Array<{ creator: string; platform: string; engagement: string; score: number }>;
}

const servicesData: ServiceItem[] = [
  {
    id: "creator-sourcing",
    label: "Creator Sourcing",
    title: "AI-driven discovery across Instagram & TikTok.",
    subtitle: "Our engine matches creators to your brand by audience demographics, content style, engagement rates, and historical performance.",
    metrics: "24h Vetted Shortlists",
    codeSnippet: "Looking for UK & US beauty creators on TikTok with >4.5% engagement rate, 50k-250k followers, and female 18-34 audience majority.",
    tableData: [
      { creator: "@sophia.beauty", platform: "TikTok / IG", engagement: "6.2% ER", score: 99 },
      { creator: "@emma_skincare", platform: "Instagram", engagement: "5.8% ER", score: 96 },
      { creator: "@claire.glow", platform: "TikTok", engagement: "7.1% ER", score: 94 },
      { creator: "@chloe_style", platform: "Instagram", engagement: "4.9% ER", score: 91 },
    ],
  },
  {
    id: "product-seeding",
    label: "Product Seeding",
    title: "Done-for-you product gifting at scale.",
    subtitle: "We handle sourcing, logistics, posting, rights, and payouts end-to-end — so your team stays focused on strategy.",
    metrics: "100% Automated Gifting",
    codeSnippet: "Auto-ship product seed boxes, trigger affiliate tracking links, and sync sales payouts to Shopify dashboard.",
    tableData: [
      { creator: "@olivia_wellness", platform: "TikTok", engagement: "340 Units Sold", score: 98 },
      { creator: "@grace_fitness", platform: "Instagram", engagement: "210 Units Sold", score: 95 },
      { creator: "@mia_lifestyle", platform: "TikTok", engagement: "185 Units Sold", score: 92 },
      { creator: "@hannah_organic", platform: "Instagram", engagement: "160 Units Sold", score: 89 },
    ],
  },
  {
    id: "affiliates",
    label: "Affiliates",
    title: "Affiliate management that runs itself.",
    subtitle: "Track links, commissions, and payouts in one place with automated reconciliation and real-time reporting.",
    metrics: "Auto Payouts",
    codeSnippet: "Curate 25 monthly UGC video assets with high-converting hooks, raw B-roll, and multi-format aspect ratios.",
    tableData: [
      { creator: "@alex_vlogs", platform: "Reels / TikTok", engagement: "UGC Video Delivered", score: 97 },
      { creator: "@zoe_daily", platform: "TikTok", engagement: "UGC Video Delivered", score: 94 },
      { creator: "@lily_review", platform: "Shorts", engagement: "UGC Video Delivered", score: 93 },
      { creator: "@nathan_tech", platform: "Reels", engagement: "UGC Video Delivered", score: 90 },
    ],
  },
  {
    id: "ugc-content",
    label: "UGC Content",
    title: "Ongoing paid creator posts that build a renewable content engine.",
    subtitle: "High-quality content for your owned and earned channels with full usage rights for paid amplification.",
    metrics: "Full Commercial Rights",
    codeSnippet: "Curate 25 monthly UGC video assets with high-converting hooks, raw B-roll, and multi-format aspect ratios.",
    tableData: [
      { creator: "@alex_vlogs", platform: "Reels / TikTok", engagement: "UGC Video Delivered", score: 97 },
      { creator: "@zoe_daily", platform: "TikTok", engagement: "UGC Video Delivered", score: 94 },
      { creator: "@lily_review", platform: "Shorts", engagement: "UGC Video Delivered", score: 93 },
      { creator: "@nathan_tech", platform: "Reels", engagement: "UGC Video Delivered", score: 90 },
    ],
  },
  {
    id: "creator-ads",
    label: "Creator Ads",
    title: "Whitelisted partnership ads on Meta & TikTok.",
    subtitle: "Ad-ready creative your paid team can plug straight in — no production delays, no rights ambiguity.",
    metrics: "68% Avg CTR Uplift",
    codeSnippet: "Deploy whitelisted Spark Ads and Meta Partnership ads with dynamic headline iterations and automated A/B testing.",
    tableData: [
      { creator: "@isabella_ads", platform: "Meta Partnership", engagement: "4.2x ROAS", score: 99 },
      { creator: "@lucas_ugc", platform: "TikTok Spark Ad", engagement: "3.8x ROAS", score: 96 },
      { creator: "@ava_creator", platform: "Meta Partnership", engagement: "3.5x ROAS", score: 94 },
      { creator: "@ethan_digital", platform: "TikTok Spark Ad", engagement: "3.1x ROAS", score: 91 },
    ],
  },
  {
    id: "whitelisting",
    label: "Whitelisting",
    title: "Run ads through creator handles with full transparency.",
    subtitle: "Whitelisted Spark Ads and Meta Partnership ads with dynamic headline iterations and automated A/B testing.",
    metrics: "Full Rights Bundled",
    codeSnippet: "Deploy whitelisted Spark Ads and Meta Partnership ads with dynamic headline iterations and automated A/B testing.",
    tableData: [
      { creator: "@isabella_ads", platform: "Meta Partnership", engagement: "4.2x ROAS", score: 99 },
      { creator: "@lucas_ugc", platform: "TikTok Spark Ad", engagement: "3.8x ROAS", score: 96 },
      { creator: "@ava_creator", platform: "Meta Partnership", engagement: "3.5x ROAS", score: 94 },
      { creator: "@ethan_digital", platform: "TikTok Spark Ad", engagement: "3.1x ROAS", score: 91 },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Real-time performance dashboards for every campaign.",
    subtitle: "Track ROAS, engagement, and creator ROI in one unified analytics suite.",
    metrics: "Live Dashboards",
    codeSnippet: "Track ROAS, engagement, and creator ROI in one unified analytics suite with automated reporting.",
    tableData: [
      { creator: "@isabella_ads", platform: "Meta Partnership", engagement: "4.2x ROAS", score: 99 },
      { creator: "@lucas_ugc", platform: "TikTok Spark Ad", engagement: "3.8x ROAS", score: 96 },
      { creator: "@ava_creator", platform: "Meta Partnership", engagement: "3.5x ROAS", score: 94 },
      { creator: "@ethan_digital", platform: "TikTok Spark Ad", engagement: "3.1x ROAS", score: 91 },
    ],
  },
];

export function InteractiveTabs() {
  const [activeTabId, setActiveTabId] = useState<string>("creator-sourcing");

  const activeTab = servicesData.find((s) => s.id === activeTabId) || servicesData[0];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2
          className="text-3xl sm:text-5xl lg:text-[72px] font-medium text-[#0a0a0a] tracking-[-2.16px] leading-[1.0]"
          style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
        >
          GTM engineers build on Kaplun
        </h2>
        <p className="text-lg text-[#666666]">
          Find every account in your TAM in one place.
        </p>
      </div>

      {/* Filter Tab Pills Header */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {servicesData.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#0a0a0a] text-white shadow-sm scale-[1.02]"
                  : "bg-white text-[#383838] border border-[rgba(209,205,199,0.5)] hover:bg-[#faf6ee]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Interactive Feature Demo Workspace Card — keyed so the panel re-mounts and crossfades on tab change */}
      <div key={activeTabId} className="bg-[#faf6ee] rounded-3xl border border-[rgba(209,205,199,0.5)] p-6 sm:p-10 shadow-sm kaplun-panel-enter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info box */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-700">
              {activeTab.metrics}
            </span>

            <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a] leading-tight">
              {activeTab.title}
            </h3>

            {/* Prompt Criteria Box */}
            <div className="bg-white rounded-2xl p-4 border border-black/5 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs text-[#666666] font-medium border-b border-neutral-100 pb-2">
                <span>Matching Brief Criteria</span>
                <span className="text-emerald-600 font-semibold">AI Match Active</span>
              </div>
              <p className="text-xs sm:text-sm text-[#383838] leading-relaxed font-mono bg-neutral-50 p-3 rounded-xl border border-neutral-200/60">
                &quot;{activeTab.codeSnippet}&quot;
              </p>
            </div>
          </div>

          {/* Right Live Table Preview Grid */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-black/10 shadow-lg p-5 overflow-hidden">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-neutral-500 ml-2">Matched Creator Shortlist</span>
              </div>
              <span className="text-xs font-mono text-neutral-400">4 Active Matches</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-neutral-100 text-neutral-400 uppercase tracking-wider text-[11px]">
                    <th className="pb-2 font-medium">Creator Handle</th>
                    <th className="pb-2 font-medium">Channel / Network</th>
                    <th className="pb-2 font-medium">Performance metric</th>
                    <th className="pb-2 font-medium text-right">Brand Fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 font-medium">
                  {activeTab.tableData.map((row) => (
                    <tr key={row.creator} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3 text-[#0a0a0a] font-semibold">{row.creator}</td>
                      <td className="py-3 text-[#383838]">{row.platform}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {row.engagement}
                        </span>
                      </td>
                      <td className="py-3 text-right font-mono font-bold text-emerald-600">
                        {row.score}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
