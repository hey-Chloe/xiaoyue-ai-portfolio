"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

import { sitePath } from "@/lib/site-path";

const SPRING = { stiffness: 80, damping: 22, mass: 0.7 };

export default function XiaoyueWitch() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, SPRING);
  const smoothY = useSpring(pointerY, SPRING);
  const rotateX = useTransform(smoothY, [-1, 1], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]);
  const glowX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const glowY = useTransform(smoothY, [-1, 1], [-10, 10]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const handlePointerMove = (event) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };

    const handlePointerLeave = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center overflow-hidden pt-[5vh] sm:pt-[3vh]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute top-[17vh] h-[48vh] w-[34vh] rounded-full bg-violet-500/25 blur-[80px] sm:h-[58vh] sm:w-[40vh]"
        style={{ x: glowX, y: glowY }}
      />

      <motion.div
        className="relative h-[73vh] w-[37vh] max-w-[76vw] sm:h-[82vh] sm:w-[42vh] lg:h-[86vh] lg:w-[44vh]"
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformPerspective: 1100,
          transformStyle: "preserve-3d",
        }}
        animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { y: { duration: 5.4, ease: "easeInOut", repeat: Infinity } }
        }
      >
        <div
          className="absolute inset-[4%_2%_3%] rotate-2 bg-violet-500/20 blur-sm"
          style={{ borderRadius: "46% 46% 16% 16% / 22% 22% 10% 10%" }}
        />

        <div
          className="absolute inset-[3%] overflow-hidden border border-accent/35 bg-[#100d1d] shadow-[0_0_18px_rgba(254,254,91,0.12),0_0_46px_rgba(124,58,237,0.34)]"
          style={{ borderRadius: "46% 46% 16% 16% / 22% 22% 10% 10%" }}
        >
          <Image
            priority
            fill
            sizes="(max-width: 640px) 76vw, 44vh"
            src={sitePath("/characters/xiaoyue-witch-v2.jpg")}
            alt=""
            className="select-none object-cover object-center"
            draggable={false}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_66%,rgba(9,7,18,0.22)_82%,rgba(9,7,18,0.68)_100%)]" />
          <div className="absolute inset-[1.5%] border border-violet-200/15" style={{ borderRadius: "inherit" }} />
        </div>

        <motion.div
          className="absolute left-[2%] top-[25%] h-2 w-2 rounded-full bg-violet-200 shadow-[0_0_16px_5px_rgba(168,85,247,0.9)]"
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.35, 1, 0.35], scale: [0.7, 1.25, 0.7] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 2.1, ease: "easeInOut", repeat: Infinity }
          }
        />
      </motion.div>
    </div>
  );
}
