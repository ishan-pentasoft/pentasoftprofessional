"use client";
import { stats } from "@/constants";
import React, { useEffect, useRef, useState } from "react";

const CountUpBase: React.FC<{
  end: string;
  durationMs?: number;
  startDelayMs?: number;
  start?: boolean;
}> = ({ end, durationMs = 1500, startDelayMs = 0, start = true }) => {
  const match = /^(\d+)(.*)$/.exec(end);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    const startAnimation = () => {
      const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        setValue(target);
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const id = window.setTimeout(startAnimation, startDelayMs);
    return () => window.clearTimeout(id);
  }, [durationMs, startDelayMs, target, start]);

  return (
    <span aria-hidden="true">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const CountUp = React.memo(CountUpBase);
CountUp.displayName = "CountUp";

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCounts, setStartCounts] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounts(true);
            io.disconnect(); // run once
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -25% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative py-14 lg:py-16 bg-white"
      ref={sectionRef}
      role="region"
      aria-describedby="stats-desc"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
        <h2 id="stats-heading" className="sr-only">
          Company stats
        </h2>
        <p id="stats-desc" className="sr-only">
          Key company metrics displayed as four cards.
        </p>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map(({ label, value, Icon }, i) => (
            <li
              key={label}
              className="rounded-xl bg-[#0A2A52] text-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              aria-label={`${value} ${label}`}
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ring-1 ring-orange-200 bg-accent" aria-hidden="true">
                <Icon className="h-8 w-8 text-orange-500" strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="text-4xl font-extrabold tracking-tight" aria-live="off">
                <CountUp
                  end={value}
                  startDelayMs={i * 250}
                  start={startCounts}
                />
                <span className="sr-only">{`${value} ${label}`}</span>
              </div>
              <p className="mt-1 text-sm text-slate-200">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StatsSection;
