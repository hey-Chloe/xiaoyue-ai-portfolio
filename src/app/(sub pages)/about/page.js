import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import HatModel from "@/components/models/HatModelClient";

export const metadata = {
  title: "关于我",
  description: "认识小悦：专注 Agent Runtime、企业 RAG、评测与真实业务系统的 AI 应用开发者。",
};

export default function About() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt=""
        className="fixed inset-0 -z-50 h-full w-full object-cover object-center opacity-25"
      />

      <div className="pointer-events-none fixed inset-0 -z-10 hidden opacity-45 lg:block">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <section className="relative z-20 mx-auto grid min-h-[calc(100dvh-10rem)] w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <header className="max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            ABOUT / 小悦
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-7xl">
            我关心的不是 AI 会不会说，
            <span className="text-foreground/38">而是它能不能把事情做完。</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-foreground/60">
            AI 应用开发与 Agent 工程。关注 Runtime、企业知识检索、工具调用、评测、安全执行，以及系统进入真实流程后必须面对的权限与失败。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Agent Runtime", "Enterprise RAG", "AI Infrastructure"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-background/30 px-3 py-2 font-mono text-[9px] text-foreground/50 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <AboutDetails />
      </section>
    </>
  );
}
