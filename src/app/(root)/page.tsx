import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesSection />
    </main>
  );
};

export default page;
