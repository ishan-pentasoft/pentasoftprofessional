import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <ProjectsCarousel />
      <WhatWeOffer />
    </main>
  );
};

export default page;
