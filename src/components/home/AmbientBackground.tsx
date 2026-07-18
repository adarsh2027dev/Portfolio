"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundTemplate = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      var(--accent-secondary),
      transparent 80%
    )
  `;

  return (
    <div aria-hidden="true" className="ambient-canvas">
      {/* Existing CSS Blobs for fallback and base gradient */}
      <span className="ambient-blob ambient-blob-a" />
      <span className="ambient-blob ambient-blob-b" />
      <span className="ambient-blob ambient-blob-c" />
      <span className="ambient-blob ambient-blob-d" />
      
      {/* Dynamic Mouse Follower Aura */}
      {isMounted && (
        <motion.div
          className="absolute inset-0 z-[-1] pointer-events-none opacity-40 dark:opacity-20"
          style={{
            background: backgroundTemplate,
          }}
        />
      )}

      {/* Grid Pattern and Vignette Overlay */}
      <div className="ambient-grid" />
      <div className="ambient-vignette" />
      
      {/* Subtle floating particles (Pure CSS or SVG for performance) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--text-strong)] opacity-20"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
