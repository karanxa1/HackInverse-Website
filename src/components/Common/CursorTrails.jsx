import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorTrails = () => {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newTrail = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };

            setTrails((prev) => [...prev, newTrail].slice(-20)); // Keep last 20 points
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrails((prev) => prev.filter((t) => Date.now() - t.id < 500)); // Remove old trails
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            <AnimatePresence>
                {trails.map((trail) => (
                    <motion.div
                        key={trail.id}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-2 h-2 bg-[#FF0505] rounded-full blur-[1px]"
                        style={{
                            left: trail.x,
                            top: trail.y,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CursorTrails;
