import { Github, Home, Mail, Palette, Phone, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const icons = {
  home: Home,
  about: User,
  projects: Palette,
  contact: Phone,
  github: Github,
  mail: Mail,
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  reduceMotion = false,
}) => {
  const Icon = icons[icon] ?? Home;

  return (
    <div
      className="pointer-events-auto absolute z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <NavLink
        variants={item}
        href={link}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
        className={
          reduceMotion
            ? "group flex flex-col items-center gap-2 text-foreground/70"
            : "group flex animate-spin-slow-reverse flex-col items-center gap-2 text-foreground/70 group-hover:pause"
        }
        aria-label={label}
        prefetch={!newTab}
      >
        <span className="custom-bg flex h-12 w-12 items-center justify-center rounded-full transition group-hover:border-accent/35 group-hover:text-accent sm:h-14 sm:w-14">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <span className="rounded-full border border-white/5 bg-background/55 px-2.5 py-1 text-[9px] text-foreground/60 backdrop-blur-md transition group-hover:text-foreground">
          {label}
        </span>
      </NavLink>
    </div>
  );
};

export default NavButton;
