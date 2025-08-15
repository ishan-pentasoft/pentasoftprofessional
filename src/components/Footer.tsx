"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import CTAButton from "./ui/cta-button";
import {
  mapLink,
  facebookLink,
  instagramLink,
  linkedinLink,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  address,
} from "@/constants/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { footerNavigation, quickLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-[#082448] text-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-[#082448] p-6 sm:p-8 lg:p-12 rounded-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              <div className="text-white text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Subscribe Our Newsletter to
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Get Company Update
                </h3>
              </div>
              <div className="relative w-full lg:w-auto lg:min-w-[450px]">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white text-gray-900 placeholder:text-gray-500 rounded-full w-full h-12 sm:h-14 text-base sm:text-lg pr-32 sm:pr-36"
                />
                <Button className="absolute right-2 top-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-4 sm:px-6 py-2 h-8 sm:h-10 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.02] group">
                  <span className="flex items-center gap-1">
                    <span className="hidden sm:inline">Subscribe Now</span>
                    <span className="sm:hidden">Subscribe</span>
                    <svg
                      className="w-3 h-3 transition-transform duration-300 ease-out group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="bg-orange-500 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/logo_light.png"
                    alt="Pentasoft Professional Logo"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className="bg-white p-8 lg:p-12 flex flex-col justify-center items-center lg:items-end">
                <div className="text-center lg:text-right">
                  <div className="text-blue-900 font-bold text-2xl lg:text-3xl mb-6">
                    Ready to discuss your project?
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <CTAButton href="/contact" variant="primary" size="md">
                      Start Your Project
                    </CTAButton>
                    <CTAButton href="/contact" variant="primary" size="md">
                      Let's Talk
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 py-16 border-t border-blue-800/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6 lg:col-span-1">
            <div className="relative">
              <h4 className="text-2xl font-bold text-white mb-2 relative">
                About Us
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Pentasoft Professional is a leading website design and development
              company in India, offering comprehensive IT solutions and web
              development services. Established in 2012, we deliver innovative
              digital solutions.
            </p>
            <div className="pt-2">
              <p className="text-gray-400 text-sm mb-4">
                Follow us on social media
              </p>
              <div className="flex gap-4">
                <Link href={facebookLink} target="_blank" className="group">
                  <div className="w-10 h-10 bg-blue-800/30 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors"
                    />
                  </div>
                </Link>
                <Link href={instagramLink} target="_blank" className="group">
                  <div className="w-10 h-10 bg-blue-800/30 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors"
                    />
                  </div>
                </Link>
                <Link href={linkedinLink} target="_blank" className="group">
                  <div className="w-10 h-10 bg-blue-800/30 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <h4 className="text-2xl font-bold text-white mb-2 relative">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div
                      className="w-0 h-0 mr-3 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 
                  border-t-4 border-b-4 border-l-8 border-l-orange-500 
                  border-transparent"
                    ></div>
                    <span className="text-sm lg:text-base group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <h4 className="text-2xl font-bold text-white mb-2 relative">
                Contact Info
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </h4>
            </div>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-800/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Address
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-800/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-800/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${PHONE_NUMBER[0]}`}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <span>+91</span> {PHONE_NUMBER[0]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <h4 className="text-2xl font-bold text-white mb-2 relative">
                Find Us
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </h4>
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 p-1 rounded-xl">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={mapLink}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pentasoft Professional Location"
                    className="transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent hover:from-blue-900/10 hover:to-transparent transition-all duration-300 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 py-6 border-t border-blue-800/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-gray-300 text-sm md:text-base text-center md:text-left">
            Copyright 2023{" "}
            <Link href="/" className="text-orange-500 font-semibold">
              Pentasoft Professional{" "}
            </Link>
            - All Rights Reserved
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            {footerNavigation.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
