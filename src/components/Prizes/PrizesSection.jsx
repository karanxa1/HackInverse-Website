import React from "react";

import prize1Inner from "../../assets/1st-inner.png";
import prize1Border from "../../assets/Prizeborder.png";

import prize2Inner from "../../assets/2nd-inner.png";
import prize2Border from "../../assets/Prizeborder.png";

import prize3Inner from "../../assets/3rd-inner.png";
import prize3Border from "../../assets/Prizeborder.png";

import patternBg from "../../assets/BgPattern.png";

const PrizesSection = () => {
  const prizes = [
    { inner: prize2Inner, border: prize2Border, title: "2nd Prize", text: "coming soon" },
    { inner: prize1Inner, border: prize1Border, title: "1st Prize", text: "coming soon" },
    { inner: prize3Inner, border: prize3Border, title: "3rd Prize", text: "coming soon" },
  ];

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] px-2 text-center text-white font-cinzel-decorative"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "auto",
      }}
    >
      {/* ===== HEADING ===== */}
      <h1
        className="prizes-heading top-5 relative mb-6 inline-block text-[clamp(50px,7vw,140px)] font-medium uppercase leading-none tracking-[0.15em] text-[#1a1818]
        [text-shadow:0_0_5px_#c11c1c,0_0_10px_#c11c1c,0_0_20px_#c11c1c,0_0_40px_#c11c1c,0_0_60px_#c11c1c,0_0_80px_#c11c1c]
        [-webkit-text-stroke:3px_#c11c1c]"
        style={{ fontFamily: "StrangerThingsOutlined" }}
      >
        PRIZES

        <span
          className="block mt-[1.2vw] h-[0.5vh] w-[clamp(210px,35vw,580px)] bg-[#C83639]"
          style={{
            boxShadow:
              "0 0 5px #c11c1c, 0 0 10px #c11c1c, 0 0 20px #c11c1c, 0 0 40px #c11c1c, 0 0 60px #c11c1c, 0 0 80px #c11c1c",
          }}
        ></span>

        <span
          className="block mt-[0.8vw] h-[0.5vh] w-[clamp(210px,35vw,580px)] bg-[#C83639]"
          style={{
            boxShadow:
              "0 0 5px #c11c1c, 0 0 10px #c11c1c, 0 0 20px #c11c1c, 0 0 40px #c11c1c, 0 0 60px #c11c1c, 0 0 80px #c11c1c",
          }}
        ></span>
      </h1>

      {/* ===== PRIZE CARDS ===== */}
      <div className="mt-[5vw] flex max-w-[95vw] flex-wrap items-center justify-center gap-[8vw] lg:gap-[6vw] md:gap-[5vw] sm:gap-[4vw] xs:gap-[3vw]">
        {prizes.map((p, index) => (
          <div
            className={`flex flex-col items-center justify-center text-center ${
              index === 0 ? "translate-x-[-2vw]" : ""
            } ${index === 2 ? "translate-x-[2vw]" : ""}`}
            key={index}
          >
            {/* ===== BORDER + INNER IMAGE ===== */}
            <div
  className="relative flex items-center justify-center rounded-full z-10 flex-shrink-0 overflow-visible"
  style={{
    width:
      index === 1
        ? "clamp(260px, 27vw, 460px)" 
        : "clamp(220px, 23vw, 400px)",
    height:
      index === 1
        ? "clamp(260px, 27vw, 460px)"
        : "clamp(220px, 23vw, 400px)",
  }}
>
  <img
    src={p.border}
    className="absolute inset-0 h-full w-full object-contain z-[1]"
    alt="prize-border"
  />
  <img
    src={p.inner}
    className="relative z-[3] object-contain"
    alt="prize-inner"
    style={{
      width:
        index === 1
          ? "70%"    
          : "65%",   
      height: "70%",
    }}
  />
</div>


            <p className="mt-[2vw] text-[clamp(20px,1.9vw,30px)] text-[#b3b3b3]">
              {p.text}
            </p>

            <h3 className="mt-[0.7vw] font-inter text-[clamp(24px,3.5vw,63px)] font-bold text-white [text-shadow:0_0_8px_#c11c1c,0_0_20px_#c11c1c]">
              {p.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
