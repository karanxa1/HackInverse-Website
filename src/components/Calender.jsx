import React, { useState, useEffect } from "react";
import ScrollReveal from "./Common/ScrollReveal";

const Calender = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to (approx 63 days from Nov 22, 2025)
    const countDownDate = new Date("Jan 24, 2026 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      <ScrollReveal>
        <h2 className="text-[#222222] text-2xl sm:text-3xl md:text-6xl text-center font-serif mt-10 sm:mt-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] [text-shadow:1px_1px_0_red,-1px_-1px_0_red,1px_-1px_0_red,-1px_1px_0_red]">
          Mark Your Calender
        </h2>
        <div
          className="after:content-[''] after:block after:h-[1.5px] after:w-full after:bg-red-600 after:mt-1 before:content-[''] before:block before:h-[1.5px] before:w-full before:bg-red-600 mx-4 sm:mx-8 md:mx-20 lg:mx-100"
        ></div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex items-center justify-center mt-10 md:mt-16 text-white overflow-x-auto px-4">
          <div className="overflow-x-hidden flex flex-nowrap items-center justify-center gap-5 md:space-x-8 lg:space-x-10">
            <Timebox value={formatTime(timeLeft.days)} label="Days" />
            <div className="text-red-500 text-xl md:text-5xl font-bold flex flex-col justify-center -mt-2 md:-mt-8">
              :
            </div>
            <Timebox value={formatTime(timeLeft.hours)} label="Hrs" />
            <div className="text-red-500 text-xl md:text-5xl lg:text-5xl font-bold flex flex-col justify-center -mt-2 md:-mt-8">
              :
            </div>
            <Timebox value={formatTime(timeLeft.minutes)} label="Mins" />
            <div className="text-red-500 text-xl md:text-5xl lg:text-5xl font-bold flex flex-col justify-center -mt-2 md:-mt-8">
              :
            </div>
            <Timebox value={formatTime(timeLeft.seconds)} label="Secs" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

function Timebox(props) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 text-black rounded-md shadow-[0_0_15px_#ff0000aa] w-12 h-18 md:w-24 md:h-28 lg:w-28 lg:h-34 flex items-center justify-center text-xl md:text-5xl font-bold hover:scale-90 hover:shadow-[0_0_30px_#ff0000dd] cursor-pointer">
        {props.value}
      </div>
      <span className="mt-2 text-red-500 font-mono text-xs md:text-3xl">
        {props.label}
      </span>
    </div>
  );
}

export default Calender;
