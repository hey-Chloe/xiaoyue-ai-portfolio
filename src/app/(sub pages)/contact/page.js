import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";

export const metadata = {
  title: "联系",
  description: "通过邮件或 GitHub 联系小悦。",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt=""
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative flex min-h-[calc(100dvh-10rem)] w-full flex-col items-center justify-center space-y-8 py-8 sm:py-0">
        <div className="flex flex-col items-center justify-center space-y-5 w-full sm:w-3/4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            START A CONVERSATION
          </p>
          <h1 className="text-foreground font-semibold text-center text-4xl sm:text-6xl tracking-tight">
            有值得做的 AI 问题，来找小悦。
          </h1>
          <p className="max-w-2xl text-center font-light text-sm xs:text-base leading-8 text-foreground/70">
            欢迎交流 Agent 系统、企业知识工程、Coding Agent、AI 基础设施，以及那些从 Demo 走向真实流程时遇到的难题。
          </p>
        </div>
        <div className="grid w-full max-w-3xl gap-4 md:grid-cols-2">
          <Link
            href="mailto:xiaoyue0227@yeah.net"
            className="group custom-bg rounded-2xl p-6 sm:p-8 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <div className="flex items-start justify-between">
              <Mail className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="mt-10 font-mono text-xs text-muted">EMAIL</p>
            <p className="mt-2 break-all text-lg sm:text-xl">xiaoyue0227@yeah.net</p>
          </Link>
          <Link
            href="https://github.com/hey-Chloe"
            target="_blank"
            rel="noreferrer"
            className="group custom-bg rounded-2xl p-6 sm:p-8 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <div className="flex items-start justify-between">
              <Github className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="mt-10 font-mono text-xs text-muted">GITHUB</p>
            <p className="mt-2 text-lg sm:text-xl">@hey-Chloe</p>
          </Link>
        </div>
        <p className="font-mono text-[10px] tracking-[0.16em] text-foreground/40">
          邮件会直接到达本人 · 不使用自动营销表单
        </p>
      </article>
    </>
  );
}
