"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { services } from "@/constants";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [paymentOpen, setPaymentOpen] = React.useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" aria-label="Main">
      <div className="max-w-[100rem] mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
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
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline  hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 px-2 xl:px-4">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
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
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 px-2 xl:px-4">
                Payment
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 text-right md:w-[600px] px-2">
                  <ListItem title="Bank Deposit" href="/bank-deposit" />
                </ul>
              </NavigationMenuContent>
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
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-center px-10 py-3 text-gray-300 text-sm hover:bg-blue-800 hover:text-white transition-colors duration-200"
                        >
                          {service.title}
                        </Link>
                      ))}
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
