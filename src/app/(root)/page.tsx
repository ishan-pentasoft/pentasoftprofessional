import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import LogoMarqee from "@/components/LogoMarqee";

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <LogoMarqee />
      <ServicesSection />
      <WhatWeOffer />
      <StatsSection />
      <ProjectsCarousel />
      <AboutSection />
    </main>
  );
};

export default page;
