"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesCards } from "@/constants/services";
import CTAButton from "./ui/cta-button";

const ServicesSection = () => {
  return (
    <section
      className="relative py-16 lg:py-20 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <p
            id="services-heading"
            className="text-md font-bold tracking-wider text-[#082448] uppercase"
          >
            Our Services
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-primary">
            Embrace a transformative digital experience with our expert IT
            services.
          </h2>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {servicesCards.map((s) => (
            <li key={s.slug} className="group h-full">
              <Link
                href={s.slug}
                className="flex h-full flex-col rounded-xl border border-slate-200 hover:border-orange-300 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                aria-label={`${s.title} - Learn more`}
              >
                <div className="flex items-center justify-start mb-4">
                  <div className="relative h-16 w-16 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full ring-1 ring-orange-200"
                      aria-hidden="true"
                    />
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={50}
                      height={50}
                      sizes="64px"
                      className="relative z-[1] object-contain"
                    />
                    {/* Orbit 1 */}
                    <div
                      className="absolute inset-0 animate-spin [animation-duration:6s]"
                      aria-hidden="true"
                    >
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-orange-500 shadow-sm" />
                    </div>
                    {/* Orbit 2 (reverse and slower) */}
                    <div
                      className="absolute inset-0 animate-spin [animation-duration:8s] [animation-direction:reverse]"
                      aria-hidden="true"
                    >
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-blue-500 shadow-sm" />
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-[#082448] group-hover:text-orange-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 text-justify">
                    {s.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <CTAButton href="/get-a-quote" variant="primary" size="md">
            Get a Quote
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
