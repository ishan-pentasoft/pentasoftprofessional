import React from "react";

const LogoMarqee = () => {
  const logos = [
    "/marqee/esl.png",
    "/marqee/jobportal.png",
    "/marqee/cbcs.png",
    "/marqee/rightlinks.png",
    "/marqee/jobportal.png",
    "/marqee/esl.png",
    "/marqee/rightlinks.png",
  ];

  return (
    <div
      className="py-16 lg:py-20 bg-slate-200 border-b border-slate-200"
      aria-label="Logo showcase section"
    >
      <div className="max-w-xl mx-auto text-center tracking-wider">
        <p className="sm:text-lg text-sm text-[#082448] mx-4 font-bold ">
          Our Clients
        </p>
      </div>

      <div
        className="overflow-hidden w-[80%] mx-auto pt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="region"
        aria-label="Scrolling marquee of company logos"
      >
        <div className="overflow-hidden relative w-full">
          <div
            className="flex min-w-max animate-marquee-infinite"
            style={{ willChange: "transform" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="group h-16 w-36  mr-3   sm:mr-10 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label={`Logo ${i + 1}`}
              >
                <img
                  src={logo}
                  alt={`Company logo ${i + 1}`}
                  className="h-10 object-contain max-w-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarqee;
