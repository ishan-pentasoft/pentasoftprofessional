import Link from "next/link";
import React from "react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CTAButton = ({ 
  href, 
  children, 
  variant = "primary", 
  size = "md",
  className = "" 
}: CTAButtonProps) => {
  const baseClasses = "group relative inline-flex items-center justify-center font-semibold rounded-lg shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-xl hover:scale-[1.02] hover:from-orange-600 hover:to-orange-700 focus:ring-orange-500",
    secondary: "text-orange-600 bg-white border-2 border-orange-500 hover:shadow-xl hover:scale-[1.02] hover:bg-orange-500 hover:text-white focus:ring-orange-500",
    outline: "text-orange-600 bg-transparent border-2 border-orange-500 hover:shadow-xl hover:scale-[1.02] hover:bg-orange-500 hover:text-white focus:ring-orange-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const hoverEffects = {
    primary: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-600 after:to-orange-700 after:rounded-lg after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-300 after:ease-out",
    secondary: "after:absolute after:inset-0 after:bg-orange-500 after:rounded-lg after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-300 after:ease-out",
    outline: "after:absolute after:inset-0 after:bg-orange-500 after:rounded-lg after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-300 after:ease-out"
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${hoverEffects[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg 
          className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" 
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
    </Link>
  );
};

export default CTAButton;
