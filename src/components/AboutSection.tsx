"use client";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

const bullets = [
  "Cutting-edge Web Technology",
  "Commitment to Quality",
  "Timely Delivery",
  "Cost-Effective Solutions",
  "Mobile-Friendly Website Design",
  "Search Engine-Friendly Approach",
  "Diverse Industry Expertise",
];

const AboutSection = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative py-20 bg-white overflow-x-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
      >
        <div className="absolute top-4 left-4 h-56 w-56 rounded-full bg-orange-100/40 blur-xl" />
        <div className="absolute bottom-4 right-4 h-64 w-64 rounded-full bg-blue-100/40 blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl bg-slate-50 p-6 sm:p-10 lg:p-12 ring-1 ring-slate-200 shadow-sm overflow-hidden">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              About Us
            </span>
            <h2
              id="about-heading"
              className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#082448] to-orange-600 bg-clip-text text-transparent">
                Why choose us?
              </span>
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed text-justify">
              With a decade of industry experience, Pentasoft Professional has
              established itself as a leading web design and development company
              in India. We deliver a comprehensive suite of IT services tailored
              to your specific business needs and growth objectives.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <span
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AnimatedButton
                href="/about"
                variant="orange"
                size="sm"
                animation="slide"
                className="rounded-full px-5 py-2.5 w-full sm:w-auto"
                aria-label="Read more about Pentasoft Professional"
                icon={
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                }
              >
                Read More
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                variant="outline"
                size="sm"
                animation="slide"
                className="rounded-full px-5 py-2.5 w-full sm:w-auto border-orange-300 text-orange-700 hover:text-orange-800 hover:border-orange-400"
              >
                Start a Project
              </AnimatedButton>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[560px] aspect-[4/3] sm:aspect-[16/12] lg:aspect-[16/12] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-md bg-white">
              <Image
                src="/aboutus.png"
                alt="Why choose Pentasoft Professional"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
                className="object-contain p-4 relative z-[1]"
                priority={false}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyNmMmY0ZjYnIC8+PC9zdmc+"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
