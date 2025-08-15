"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CTAButton from "./ui/cta-button";
import { heroCarouselData } from "@/constants";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroCarouselData.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlideData = heroCarouselData[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-[#082448] to-amber-500 py-16 lg:py-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ease-out ${
            isTransitioning
              ? "opacity-0 translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="text-white space-y-6 order-1 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent md:text-left text-center">
                {currentSlideData.title}
              </h1>

              <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl text-justify">
                {currentSlideData.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href={currentSlideData.primaryCTA.href}
                variant="primary"
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                {currentSlideData.primaryCTA.text}
              </CTAButton>
            </div>
          </div>

          <div className="relative order-2 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-3xl"></div>

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroCarouselData.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 w-12"
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsTransitioning(false);
                }, 300);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
