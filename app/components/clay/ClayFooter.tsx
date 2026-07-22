"use client";

import React from "react";

const footerColumns = [
  {
    title: "Services",
    links: ["Creator Sourcing", "Product Seeding", "Affiliates", "UGC Content", "Creator Ads", "Whitelisting", "Analytics"],
  },
  {
    title: "Platform",
    links: ["Discovery", "Seeding", "Campaigns", "Amplification", "Pricing"],
  },
  {
    title: "Playbooks",
    links: ["Creator Playbook", "Pricing Report", "ROI Calculator"],
  },
  {
    title: "Resources",
    links: ["Blog", "Livestreams", "Academy", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Press"],
  },
  {
    title: "Customers",
    links: ["Case Studies", "Testimonials", "Partner Program"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export function ClayFooter() {
  return (
    <footer className="bg-[#faf5e8] border-t border-[rgba(209,205,199,0.5)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 7 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h5 className="font-bold uppercase tracking-wider text-[11px] text-[#0a0a0a]">{col.title}</h5>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-xs text-[#666666] hover:text-black cursor-pointer transition-colors">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[rgba(209,205,199,0.5)]">
          <div className="space-y-1">
            <p className="text-lg font-bold text-[#0a0a0a]">Kaplun</p>
            <p className="text-xs text-[#666666]">Born remote</p>
            <p className="text-xs text-[#9a9a9a]">©2026 Kaplun Tech.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#666666] hover:text-black transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#666666] hover:text-black transition-colors">
              <span className="sr-only">YouTube</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-[#666666] hover:text-black transition-colors">
              <span className="sr-only">X</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
