import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Wizard from "@/components/models/WizardClient";

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] overflow-hidden">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt=""
        fill
        className="-z-50 object-cover object-center opacity-30"
      />

      <Navigation />

      <div className="absolute inset-0 -z-10">
        <RenderModel className="opacity-90">
          <Wizard />
        </RenderModel>
      </div>

      <section className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between px-5 py-6 sm:px-10 sm:py-9 lg:px-16 lg:py-12">
        <header className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              AI SYSTEMS BUILDER
            </p>
            <p className="mt-2 text-xs text-foreground/45">
              Agent Runtime · Enterprise RAG · AI Infrastructure
            </p>
          </div>
          <div className="hidden items-center gap-2 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgb(var(--accent))]" />
            Open to meaningful AI work
          </div>
        </header>

        <div className="max-w-2xl pb-3 sm:pb-5">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/48">
            Hello, I am
          </p>
          <h1 className="text-6xl font-semibold leading-[0.84] tracking-[-0.075em] text-foreground sm:text-7xl lg:text-8xl">
            小悦<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
            我把模型、知识、工具和业务流程装进可验证的系统：能检索证据、调用工具、恢复失败，也能在真实的权限与交易边界中运行。
          </p>

          <div className="pointer-events-auto mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group flex min-h-11 items-center gap-3 rounded-full bg-foreground px-5 text-xs font-medium text-background transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              选择一个项目
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://github.com/hey-Chloe"
              target="_blank"
              rel="noreferrer"
              className="glass-control flex min-h-11 items-center gap-3 rounded-full px-5 text-xs"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <p className="pointer-events-none absolute bottom-6 right-6 z-20 hidden max-w-44 text-right text-[10px] leading-5 text-foreground/35 lg:block">
        环形导航可以直接选择页面，不需要向下滚动
      </p>
    </main>
  );
}
