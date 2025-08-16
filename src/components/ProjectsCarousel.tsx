"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const ProjectsCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = React.useRef(false);

  React.useEffect(() => {
    if (!api) return;

    const start = () => {
      if (autoplayRef.current) return;
      autoplayRef.current = setInterval(() => {
        if (!isHoveredRef.current) api.scrollNext();
      }, 2200);
    };

    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    start();
    return () => stop();
  }, [api]);

  return (
    <section
      className="relative py-16 lg:py-20 bg-white"
      aria-labelledby="featured-projects-heading"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 lg:mb-12">
          <p
            id="featured-projects-heading"
            className="text-md font-bold tracking-wider text-[#082448] uppercase"
          >
            Featured Projects
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-primary">
            Our efforts have enabled businesses to advance to the next level
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="px-8"
            aria-label="Featured projects carousel"
            setApi={setApi}
          >
            <CarouselContent>
              {projects.map((p) => (
                <CarouselItem
                  key={p.title}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Image only */}
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                    {/* Hover overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 shadow-lg">
                        <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold leading-tight tracking-tight drop-shadow line-clamp-1">
                          {p.title}
                        </h3>
                        <Link
                          href={p.liveUrl || "#"}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-white transition-all hover:bg-white hover:text-[#082448] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
