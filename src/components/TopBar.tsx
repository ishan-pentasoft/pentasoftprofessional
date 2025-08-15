import { Mail, Phone } from "lucide-react";
import React from "react";
import {
  EMAIL_ADDRESS,
  facebookLink,
  instagramLink,
  linkedinLink,
  PHONE_NUMBER,
} from "@/constants/contact";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  return (
    <div className="bg-[#082448] text-accent">
      <div className="max-w-7xl mx-auto px-3 py-3 flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-2 lg:gap-3 flex-wrap">
        {/* Contact Info */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 lg:gap-5">
          {PHONE_NUMBER.map((phone) => (
            <Link href={"tel:" + phone} key={phone}>
              <div className="flex items-center justify-center gap-1 lg:gap-2 text-xs xl:text-base font-semibold lg:border-r lg:pr-3 xl:pr-5 border-muted-foreground hover:text-amber-500 transition-colors duration-200">
                <Phone className="h-3 lg:h-4 text-amber-500" />
                +91 {phone}
              </div>
            </Link>
          ))}
          <Link href={"mailto:" + EMAIL_ADDRESS}>
            <div className="flex items-center justify-center gap-1 lg:gap-2 text-xs xl:text-base font-semibold hover:text-amber-500 transition-colors duration-200">
              <Mail className="h-3 lg:h-4 text-amber-500" />
              <span className="hidden sm:inline">{EMAIL_ADDRESS}</span>
              <span className="sm:hidden">info@pentasoft...</span>
            </div>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 lg:gap-4 xl:gap-5 items-center justify-center flex-wrap">
          <span className="text-xs lg:text-sm xl:text-base font-semibold whitespace-nowrap">
            Follow Us:
          </span>
          <Link href={facebookLink} target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-3 hover:text-amber-500 transition-colors duration-200"
            />
          </Link>
          <Link href={instagramLink} target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-3 hover:text-amber-500 transition-colors duration-200"
            />
          </Link>
          <Link href={linkedinLink} target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-3 hover:text-amber-500 transition-colors duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
