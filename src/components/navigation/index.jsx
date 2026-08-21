"use client";

import { BtnList } from "@/app/data";
import { Github, Home, Mail, Palette, Phone, User } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";

const iconMap = {
  home: Home,
  about: User,
  projects: Palette,
  contact: Phone,
  github: Github,
  mail: Mail,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const Navigation = () => {
  const size = useScreenSize();
  const reduceMotion = useReducedMotion();
  const viewport = size ?? 1024;
  const isDesktopOrbit = viewport >= 480;
  const angleIncrement = 360 / BtnList.length;
  const isLarge = viewport >= 1024;
  const isMedium = viewport >= 768;

  if (!isDesktopOrbit) {
    return (
      <nav
        aria-label="主导航"
        className="custom-bg fixed inset-x-3 bottom-3 z-50 flex items-stretch justify-around rounded-[1.6rem] p-2 sm:hidden"
      >
        {BtnList.slice(0, 5).map((item) => {
          const Icon = iconMap[item.icon] ?? Home;

          return (
            <Link
              key={item.label}
              href={item.link}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noreferrer" : undefined}
              className="flex min-w-14 flex-col items-center gap-1 rounded-2xl px-2 py-2 text-foreground/60 transition hover:bg-white/5 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              <span className="text-[9px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav
      aria-label="主导航"
      className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={
          reduceMotion
            ? "relative flex w-max items-center justify-center"
            : "group relative flex w-max animate-spin-slow items-center justify-center hover:pause"
        }
      >
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = isLarge
            ? "calc(20vw - 1rem)"
            : isMedium
              ? "calc(30vw - 1rem)"
              : "calc(40vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;

          return (
            <NavButton
              key={btn.label}
              x={x}
              y={y}
              reduceMotion={reduceMotion}
              {...btn}
            />
          );
        })}
      </motion.div>
    </nav>
  );
};

export default Navigation;
