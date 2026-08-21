"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

import { sitePath } from "@/lib/site-path";
import styles from "./EnchantedForestHero.module.css";

const SCENE = sitePath("/characters/xiaoyue-enchanted-forest-v3.jpg");
const SPRING = { stiffness: 48, damping: 24, mass: 0.9 };

const FIREFLIES = [
  { x: 4, y: 46, dx: 24, dy: -18, delay: -2.2, duration: 6.8, size: 3 },
  { x: 9, y: 76, dx: 18, dy: -26, delay: -5.1, duration: 8.4, size: 4 },
  { x: 18, y: 58, dx: -16, dy: -22, delay: -1.4, duration: 7.2, size: 2 },
  { x: 27, y: 82, dx: 22, dy: -14, delay: -4.6, duration: 6.4, size: 3 },
  { x: 34, y: 54, dx: -20, dy: -28, delay: -3.8, duration: 9.1, size: 3 },
  { x: 39, y: 36, dx: 13, dy: -18, delay: -6.2, duration: 7.7, size: 2 },
  { x: 48, y: 60, dx: -12, dy: -20, delay: -2.9, duration: 8.9, size: 3 },
  { x: 54, y: 22, dx: 16, dy: -12, delay: -5.4, duration: 6.9, size: 2 },
  { x: 70, y: 68, dx: 19, dy: -24, delay: -1.8, duration: 8.2, size: 3 },
  { x: 78, y: 49, dx: -16, dy: -18, delay: -6.7, duration: 7.5, size: 2 },
  { x: 86, y: 74, dx: 20, dy: -25, delay: -3.2, duration: 9.3, size: 4 },
  { x: 93, y: 42, dx: -18, dy: -16, delay: -5.7, duration: 7.9, size: 3 },
];

const MUSHROOM_GLOWS = [
  { x: 70, y: 580, r: 46, delay: -0.8 },
  { x: 272, y: 579, r: 42, delay: -2.4 },
  { x: 408, y: 745, r: 36, delay: -1.5 },
  { x: 514, y: 777, r: 40, delay: -3.1 },
  { x: 705, y: 610, r: 28, delay: -2.1 },
  { x: 1328, y: 642, r: 46, delay: -3.7 },
  { x: 1434, y: 603, r: 42, delay: -1.2 },
  { x: 1550, y: 661, r: 48, delay: -2.8 },
];

const WATER_RIPPLES = [
  { cx: 790, cy: 770, rx: 54, ry: 9, delay: -0.6 },
  { cx: 733, cy: 837, rx: 78, ry: 13, delay: -2.1 },
  { cx: 625, cy: 902, rx: 96, ry: 15, delay: -3.5 },
];

const MAGIC_PARTICLES = ["0s", "-0.8s", "-1.6s", "-2.4s", "-3.2s"];

export default function EnchantedForestHero() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, SPRING);
  const smoothY = useSpring(pointerY, SPRING);
  const sceneX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const sceneY = useTransform(smoothY, [-1, 1], [-4, 4]);
  const rotateX = useTransform(smoothY, [-1, 1], [0.8, -0.8]);
  const rotateY = useTransform(smoothX, [-1, 1], [-1.2, 1.2]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const handlePointerMove = (event) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };

    const resetPointer = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetPointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", resetPointer);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

  const motionStyle = prefersReducedMotion
    ? undefined
    : { x: sceneX, y: sceneY, rotateX, rotateY, transformPerspective: 1200 };

  return (
    <section
      className={styles.hero}
      role="img"
      aria-label="小悦站在有发光蘑菇、萤火虫和溪流的魔法森林中"
    >
      <motion.div className={styles.scenePlane} style={motionStyle}>
        <Image
          priority
          fill
          sizes="103vw"
          src={SCENE}
          alt=""
          className={styles.sceneImage}
          draggable={false}
        />

        <motion.div
          className={`${styles.spriteLayer} ${styles.hairLayer}`}
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 1.6, -0.4, 0], rotate: [0, 0.16, -0.06, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 5.8, ease: "easeInOut", repeat: Infinity }
          }
        >
          <Image fill sizes="103vw" src={SCENE} alt="" draggable={false} />
        </motion.div>

        <motion.div
          className={`${styles.spriteLayer} ${styles.cloakLayer}`}
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 2.8, -0.8, 0], rotate: [0, 0.28, -0.12, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 6.7, ease: "easeInOut", repeat: Infinity }
          }
        >
          <Image fill sizes="103vw" src={SCENE} alt="" draggable={false} />
        </motion.div>

        <div className={styles.blink} aria-hidden="true">
          <span />
          <span />
        </div>

        <svg
          className={styles.effects}
          viewBox="0 0 1672 941"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="mushroom-breath" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd77c" stopOpacity="0.68" />
              <stop offset="42%" stopColor="#ffb52e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ff9a16" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="magic-line" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffcf68" />
              <stop offset="55%" stopColor="#7ff8ed" />
              <stop offset="100%" stopColor="#fff4b4" />
            </linearGradient>
            <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <path
              id="magic-flight-path"
              d="M 821 306 C 854 275 785 247 826 220 C 874 190 802 165 843 137 C 881 111 845 87 870 63"
            />
          </defs>

          {MUSHROOM_GLOWS.map((glow) => (
            <circle
              key={`${glow.x}-${glow.y}`}
              className={styles.mushroomGlow}
              cx={glow.x}
              cy={glow.y}
              r={glow.r}
              fill="url(#mushroom-breath)"
              style={{ animationDelay: `${glow.delay}s` }}
            />
          ))}

          {WATER_RIPPLES.map((ripple) => (
            <ellipse
              key={`${ripple.cx}-${ripple.cy}`}
              className={styles.waterRipple}
              cx={ripple.cx}
              cy={ripple.cy}
              rx={ripple.rx}
              ry={ripple.ry}
              style={{ animationDelay: `${ripple.delay}s` }}
            />
          ))}

          <path
            className={styles.magicTrail}
            d="M 821 306 C 854 275 785 247 826 220 C 874 190 802 165 843 137 C 881 111 845 87 870 63"
          />

          {!prefersReducedMotion &&
            MAGIC_PARTICLES.map((begin, index) => (
              <circle
                key={begin}
                r={index % 2 === 0 ? 3.2 : 2.2}
                fill={index % 2 === 0 ? "#fff0a6" : "#76fff0"}
                filter="url(#soft-glow)"
              >
                <animateMotion dur="4s" begin={begin} repeatCount="indefinite">
                  <mpath href="#magic-flight-path" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;0.75;0"
                  dur="4s"
                  begin={begin}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
        </svg>

        {FIREFLIES.map((firefly, index) => (
          <span
            key={`${firefly.x}-${firefly.y}`}
            className={styles.firefly}
            style={{
              left: `${firefly.x}%`,
              top: `${firefly.y}%`,
              width: `${firefly.size}px`,
              height: `${firefly.size}px`,
              animationDelay: `${firefly.delay}s`,
              animationDuration: `${firefly.duration}s`,
              "--fly-x": `${firefly.dx}px`,
              "--fly-y": `${firefly.dy}px`,
            }}
            aria-hidden="true"
          />
        ))}
      </motion.div>

      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.depthLight} aria-hidden="true" />
    </section>
  );
}
