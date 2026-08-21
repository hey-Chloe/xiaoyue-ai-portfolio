"use client";

import { Home, Palette, Phone, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页", Icon: Home },
  { href: "/about", label: "关于", Icon: User },
  { href: "/projects", label: "项目", Icon: Palette },
  { href: "/contact", label: "联系", Icon: Phone },
];

const HomeBtn = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="页面导航"
      className="custom-bg fixed left-1/2 top-3 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full p-1.5"
    >
      {links.map(({ href, label, Icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "flex min-h-10 items-center gap-2 rounded-full bg-foreground px-3 text-[10px] font-medium text-background"
                : "flex min-h-10 items-center gap-2 rounded-full px-3 text-[10px] text-foreground/50 transition hover:bg-white/5 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            }
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
            <span className="hidden xs:inline">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default HomeBtn;
