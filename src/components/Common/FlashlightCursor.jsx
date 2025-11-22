import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const FlashlightCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Smooth spring animation for the flashlight movement
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[35] mix-blend-soft-light"
            style={{
                background: `radial-gradient(
          600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(255, 255, 255, 0.15), 
          transparent 40%
        )`,
            }}
        />
    );
};

export default FlashlightCursor;
