import "./index.css";
import GallerySection from "./components/Gallery/GallerySection";
import PrizesSection from "./components/Prizes/PrizesSection";
import Description from "./components/Description/Description";
import TracksSection from "./components/Tracks/TracksSection";
import ElevatorAnimation from "./components/Elevator/ElevatorAnimation";
import Venue from "./components/Venue/VenueSection";
import SponsorsSection from "./components/Sponsors/SponsorsSection";
import Calender from "./components/Calender.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "./components/Footer.jsx";
import FAQ from "./components/FAQ.jsx";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import DetailsSection from "./components/DetailsSection.jsx";

import CursorTrails from "./components/Common/CursorTrails.jsx";
import FlashlightCursor from "./components/Common/FlashlightCursor.jsx";

function App() {
    const { scrollYProgress } = useScroll();

    const scrollToView = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <div className="min-h-screen background-dark overflow-x-hidden relative">
                {/* Scroll Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-[#FF0505] origin-left z-[100]"
                    style={{ scaleX: scrollYProgress }}
                />


                {/* Dynamic Cursor Effects */}
                <CursorTrails />
                <FlashlightCursor />

                {/* Navbar */}
                <header className="fixed top-0 left-0 right-0 z-50">
                    <Navbar scrollToView={scrollToView} refs={{}} />
                </header>

                <main className="">
                    <section id="home" className=" md:mb-40">
                        <HeroSection />
                    </section>

                    <section className="">
                        <DetailsSection />
                    </section>

                    <section className="my-32 md:my-44 mx-6 md:mx-0">
                        <Calender />
                    </section>

                    <section id="about" className="mb-10 md:mb-20 mx-6 md:mx-0">
                        <AboutSection />
                    </section>

                    <section id="sponsors">
                        <SponsorsSection />
                    </section>

                    <section>
                        <GallerySection />
                    </section>

                    <section id="prizes">
                        <PrizesSection />
                    </section>

                    <section>
                        <Description />
                    </section>

                    <section id="tracks">
                        <TracksSection />
                    </section>

                    <section>
                        <ElevatorAnimation />
                    </section>

                    <section>
                        <Venue />
                    </section>

                    <section id="faq">
                        <FAQ />
                    </section>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default App;
