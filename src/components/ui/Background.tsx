'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Particles() {
    const [mounted, setMounted] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setMounted(true);
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
        >
            {[...Array(70)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full w-[3px] h-[3px]"
                    initial={{
                        x: Math.random() * dimensions.width,
                        y: Math.random() * dimensions.height,
                        opacity: Math.random(),
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 0px rgba(255,255,255,0)"
                    }}
                    animate={{
                        y: [null, Math.random() * dimensions.height],
                        opacity: [0, 1, 0],
                        backgroundColor: ["#ffffff", "#3b82f6", "#a855f7", "#ffffff"],
                        boxShadow: [
                            "0 0 0px rgba(255,255,255,0)",
                            "0 0 8px rgba(59,130,246,0.8)",
                            "0 0 8px rgba(168,85,247,0.8)",
                            "0 0 0px rgba(255,255,255,0)"
                        ]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </motion.div>
    );
}

export function Background() {
    return (
        <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
            {/* Deep Space Gradients */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-black animate-slow-spin opacity-50" />

            {/* Shooting Stars / Particles - Simplified for performance */}
            <Particles />

            {/* Grid Overlay for "Tech" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        </div>
    );
}
