"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { services } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CTAButton from "./ui/cta-button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { facebookLink, instagramLink, linkedinLink } from "@/constants/contact";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [paymentMenuOpen, setPaymentMenuOpen] = useState(false);
  const [webDevOpen, setWebDevOpen] = useState(false);
  const [mobileDevOpen, setMobileDevOpen] = useState(false);

  const webDevSub = [
    { title: "PHP Development", href: "/web-development/php" },
    { title: "CMS Development", href: "/web-development/cms" },
    { title: ".NET Development", href: "/web-development/dotnet" },
    { title: "E-commerce Development", href: "/web-development/ecommerce" },
  ];
  const mobileSub = [
    { title: "Android Application", href: "/android-application" },
    { title: "iPhone Application", href: "/iphone-application" },
  ];
  const paymentItems = [{ title: "Bank Deposit", href: "/bank-deposit" }];

  return (
    <nav className="w-full border-b border-gray-200 bg-white" aria-label="Main">
      <div className="max-w-[100rem] mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link
          href="/"
          className="flex-shrink-0"
          aria-label="Pentasoft Professional Home"
        >
          <Image
            src={"/logo.png"}
            alt="Pentasoft Professional logo"
            height={60}
            width={200}
            className="h-16 w-50 lg:h-[60px] lg:w-[200px]"
            draggable={false}
            sizes="(min-width: 1024px) 200px, 160px"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-0.5">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} font-semibold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 px-2 xl:px-4`}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem
              className="relative hidden lg:list-item before:content-[''] before:absolute before:left-0 before:top-full before:h-2 before:w-full"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button
                className={`${navigationMenuTriggerStyle()} font-semibold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline  hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 px-2 xl:px-4 cursor-pointer`}
                aria-expanded={servicesMenuOpen}
                onClick={() => setServicesMenuOpen((v) => !v)}
              >
                <span className="inline-flex items-center">
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      servicesMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {servicesMenuOpen && (
                <div className="absolute left-0 top-full mt-0 z-50 rounded-md border bg-white shadow-lg">
                  {(() => {
                    const others = services.filter(
                      (s) =>
                        s.title !== "Web Development" &&
                        s.title !== "Mobile Application"
                    );
                    return (
                      <div className="grid w-[460px] gap-2 p-2 md:w-[560px] lg:w-[620px] md:grid-cols-3">
                        <div>
                          <div className="px-2 py-1 font-semibold">
                            Web Development
                          </div>
                          <ul className="space-y-1.5">
                            {webDevSub.map((s) => (
                              <li key={s.title} className="group">
                                <Link
                                  href={s.href}
                                  className="block rounded px-2.5 py-1.5 text-sm text-gray-700 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:translate-x-1 relative after:absolute after:left-2 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-[calc(100%-1rem)]"
                                >
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="px-2 py-1 font-semibold">
                            Mobile Application
                          </div>
                          <ul className="space-y-1.5">
                            {mobileSub.map((s) => (
                              <li key={s.title} className="group">
                                <Link
                                  href={s.href}
                                  className="block rounded px-2.5 py-1.5 text-sm text-gray-700 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:translate-x-1 relative after:absolute after:left-2 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-[calc(100%-1rem)]"
                                >
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="px-2 py-1 font-semibold">
                            Other Services
                          </div>
                          <ul className="space-y-1.5">
                            {others.map((service) => (
                              <li key={service.title} className="group">
                                <Link
                                  href={service.href}
                                  className="block rounded px-2.5 py-1.5 text-sm text-gray-700 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:translate-x-1 relative after:absolute after:left-2 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-[calc(100%-1rem)]"
                                >
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} font-semibold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 px-2 xl:px-4`}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} font-semibold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 px-2 xl:px-4`}
              >
                <Link href="/portfolio">Portfolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} font-semibold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 px-2 xl:px-4`}
              >
                <Link href="/live-demo">Live Demos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem
              className="relative hidden lg:list-item before:content-[''] before:absolute before:left-0 before:top-full before:h-2 before:w-full"
              onMouseEnter={() => setPaymentMenuOpen(true)}
              onMouseLeave={() => setPaymentMenuOpen(false)}
            >
              <button
                className={`${navigationMenuTriggerStyle()} font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 px-2 xl:px-4`}
                aria-expanded={paymentMenuOpen}
                onClick={() => setPaymentMenuOpen((v) => !v)}
              >
                <span className="inline-flex items-center">
                  Payment
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      paymentMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {paymentMenuOpen && (
                <div className="absolute left-0 top-full mt-0 z-50 rounded-md border bg-white shadow-lg">
                  <div className="w-[250px] p-1">
                    <div className="px-1 py-1 font-semibold">
                      Payment Options
                    </div>
                    <ul className="space-y-1">
                      {paymentItems.map((p) => (
                        <li key={p.title} className="group">
                          <Link
                            href={p.href}
                            className="block rounded px-2 py-1 text-sm text-gray-700 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:translate-x-1 relative after:absolute after:left-2 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-[calc(100%-1rem)]"
                          >
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} font-semibold hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 px-2 xl:px-4`}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation - Sheet/Sidebar */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 h-10 w-10 border border-gray-200 hover:border-gray-300"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-[#082448] text-white border-l-orange-500 border-l-4 p-0"
          >
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>
            {/* Scrollable Container */}
            <div className="h-full flex flex-col overflow-hidden">
              {/* Header with Logo and Company Name - Fixed */}
              <div className="flex-shrink-0 p-6 border-b border-gray-700">
                <Link href="/" aria-label="Pentasoft Professional Home">
                  <Image
                    src={"/logo_light.png"}
                    alt="Pentasoft Professional logo"
                    height={300}
                    width={300}
                    className="h-16 w-auto"
                    draggable={false}
                    sizes="160px"
                  />
                </Link>
              </div>

              {/* Scrollable Navigation Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="flex items-center px-6 py-4 text-white text-base font-medium border-b border-gray-700 hover:bg-blue-800 transition-colors duration-200"
                  >
                    Home
                  </Link>

                  <Collapsible
                    open={servicesOpen}
                    onOpenChange={setServicesOpen}
                    className="border-b border-gray-700"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-white text-base font-medium hover:bg-blue-800 transition-colors duration-200">
                      <span>Services</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="overflow-hidden transition-all duration-200">
                      {services.map((service) => {
                        const isWeb = service.title === "Web Development";
                        const isMobile = service.title === "Mobile Application";
                        if (isWeb) {
                          return (
                            <Collapsible
                              key={service.title}
                              open={webDevOpen}
                              onOpenChange={setWebDevOpen}
                              className="border-t border-gray-800 first:border-t-0"
                            >
                              <CollapsibleTrigger className="flex items-center justify-between w-full px-10 py-3 text-gray-300 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200">
                                <span>Web Development</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    webDevOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <div className="mb-2">
                                  {webDevSub.map((s) => (
                                    <Link
                                      key={s.title}
                                      href={s.href}
                                      className="flex items-center px-14 py-2 text-gray-300 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200"
                                    >
                                      — {s.title}
                                    </Link>
                                  ))}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          );
                        }
                        if (isMobile) {
                          return (
                            <Collapsible
                              key={service.title}
                              open={mobileDevOpen}
                              onOpenChange={setMobileDevOpen}
                              className="border-t border-gray-800"
                            >
                              <CollapsibleTrigger className="flex items-center justify-between w-full px-10 py-3 text-gray-300 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200">
                                <span>Mobile Application</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    mobileDevOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <div className="mb-2">
                                  {mobileSub.map((s) => (
                                    <Link
                                      key={s.title}
                                      href={s.href}
                                      className="flex items-center px-14 py-2 text-gray-300 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200"
                                    >
                                      — {s.title}
                                    </Link>
                                  ))}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          );
                        }
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="flex items-center px-10 py-3 text-gray-300 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200 border-t border-gray-800 first:border-t-0"
                          >
                            {service.title}
                          </Link>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>

                  <Link
                    href="/about"
                    className="flex items-center px-6 py-4 text-white text-base font-medium border-b border-gray-700 hover:bg-blue-800 transition-colors duration-200"
                  >
                    About
                  </Link>

                  <Link
                    href="/portfolio"
                    className="flex items-center px-6 py-4 text-white text-base font-medium border-b border-gray-700 hover:bg-blue-800 transition-colors duration-200"
                  >
                    Portfolio
                  </Link>

                  <Link
                    href="/live-demo"
                    className="flex items-center px-6 py-4 text-white text-base font-medium border-b border-gray-700 hover:bg-blue-800 transition-colors duration-200"
                  >
                    Live Demos
                  </Link>

                  <Collapsible
                    open={paymentOpen}
                    onOpenChange={setPaymentOpen}
                    className="border-b border-gray-700"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-white text-base font-medium hover:bg-blue-800 transition-colors duration-200">
                      <span>Payment</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          paymentOpen ? "rotate-180" : ""
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="overflow-hidden transition-all duration-200">
                      <Link
                        href="/bank-deposit"
                        className="flex items-center px-10 py-3 text-gray-300 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200"
                      >
                        Bank Deposit
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>

                  <Link
                    href="/blog"
                    className="flex items-center px-6 py-4 text-white text-base font-medium border-b border-gray-700 hover:bg-blue-800 transition-colors duration-200"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center px-6 py-4 text-white text-base font-medium border-b border-gray-700 hover:bg-blue-800 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </div>

                {/* Follow Us Section (matches TopBar) */}
                <div className="p-6">
                  <h3 className="text-white text-base font-semibold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href={facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                      className="text-white hover:text-amber-500 transition-colors duration-200"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="h-5"
                        aria-hidden="true"
                      />
                    </Link>
                    <Link
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="text-white hover:text-amber-500 transition-colors duration-200"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="h-5"
                        aria-hidden="true"
                      />
                    </Link>
                    <Link
                      href={linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with us on LinkedIn"
                      className="text-white hover:text-amber-500 transition-colors duration-200"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="h-5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex items-center gap-4">
          <CTAButton href="/get-a-quote" variant="primary" size="md">
            Get A Quote
          </CTAButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
