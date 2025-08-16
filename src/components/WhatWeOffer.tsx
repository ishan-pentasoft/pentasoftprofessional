"use client";

import React from "react";
import { offers } from "@/constants/offers";

const WhatWeOffer = () => {
  return (
    <section aria-labelledby="offer-heading" className="relative py-18 lg:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#081A2E] via-[#0A2542] to-[#081A2E]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="offer-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>
          <p className="mt-3 text-slate-200/80 max-w-2xl mx-auto">
            A focused set of capabilities to design, build, and grow your
            digital presence.
          </p>
        </div>

        <ul role="list" className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 [grid-auto-flow:dense] items-stretch">
          {offers.map((o, idx) => (
            <li
              key={o.title}
              role="listitem"
              className={[
                "group relative rounded-2xl p-6 sm:p-7 bg-white/10 backdrop-blur-md",
                "ring-1 ring-white/15 shadow-[0_1px_0_rgba(255,255,255,0.05),0_8px_20px_-10px_rgba(0,0,0,0.6)]",
                "transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-white/15 motion-safe:hover:ring-white/25 motion-safe:hover:shadow-[0_1px_0_rgba(255,255,255,0.08),0_14px_28px_-12px_rgba(0,0,0,0.7)]",
                "[content-visibility:auto] [contain-intrinsic-size:1px_150px]",
                idx === offers.length - 1 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent"
                aria-hidden
              />
              <div className="h-full">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-1 text-slate-200/85 leading-relaxed text-justify">
                  {o.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeOffer;
