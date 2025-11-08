import React, { useEffect, useState } from "react";
import "./Description.css";

export default function Description() {
  /*const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust speed here — larger divisor = slower
      setScrollX(window.scrollY / 3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/

  return (
    <div className="scene">
      <div className="content">
        <h1>And Many More...</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* background elements */}
      <div className="trees"></div>
      {/* cyclists — moves with scroll */}
      {/*<div
        className="cyclists"
        style={{ transform: `translateX(${-scrollX}px)` }}
  ></div>*/}
    </div>
  );
}
