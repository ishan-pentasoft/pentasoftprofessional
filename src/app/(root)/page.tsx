import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesSection />
      <StatsSection />
    </main>
  );
};

export default page;
