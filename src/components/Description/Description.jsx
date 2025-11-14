import React from "react";
import bottomLeftTreeImage from "../../assets/toplefttree.png";
import bottomRightTreeImage from "../../assets/toprighttree.png";
import cyclistsImage from "../../assets/cyclists.png";

export default function Description() {
  return (
    <div 
      className="
        relative min-h-screen w-full bg-[#1a1a1a] overflow-hidden text-white font-inter 
        flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16

        pt-[18vh]     /* MOBILE: text moved further down */
        sm:pt-[12vh] md:pt-[14vh] lg:pt-[16vh]
      "
    >
      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-black z-30"></div>

      {/* TEXT SECTION */}
      <div
        className="
          text-center z-20 
          mb-[10vh] sm:mb-[12vh] md:mb-[14vh] lg:mb-[16vh] 
          mt-4 sm:mt-6
        "
      >
        <h1 className="text-[#b30000] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          And Many More...
        </h1>

        <p className="text-[#9a9a9a] text-base sm:text-lg md:text-2xl lg:text-4xl leading-snug max-w-xl mx-auto mt-3 sm:mt-4 lg:mt-5 font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* LEFT TREE */}
      <div
        className="
          absolute bottom-0 left-0
          max-sm:w-[38vw] max-sm:h-[30vh]
          w-[65vw] h-[35vh]
          sm:w-[50vw] sm:h-[45vh]
          md:w-[40vw] md:h-[70vh]

          z-10
        "
        style={{
          backgroundImage: `url(${bottomLeftTreeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "contain",
        }}
      ></div>

      {/* RIGHT TREE */}
      <div
        className="
          absolute bottom-0 right-0
          max-sm:w-[38vw] max-sm:h-[30vh]
          w-[65vw] h-[35vh]
          sm:w-[50vw] sm:h-[45vh]
          md:w-[40vw] md:h-[70vh]

          z-10
        "
        style={{
          backgroundImage: `url(${bottomRightTreeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
        }}
      ></div>

      {/* CYCLISTS */}
      <div
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          max-sm:w-[35vw] max-sm:h-[12vh]

          /* DEFAULT (unchanged) */
          w-[80vw] h-[18vh]
          sm:w-[60vw] sm:h-[22vh]
          md:w-[55vw] md:h-[28vh]
          z-10
        "
        style={{
          backgroundImage: `url(${cyclistsImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
}
