import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Wizard from "@/components/models/WizardClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 px-6 text-center sm:bottom-10">
        <p className="text-2xl font-semibold tracking-[0.18em] text-accent sm:text-3xl">
          小悦
        </p>
        <p className="mt-2 text-xs tracking-[0.16em] text-foreground/70 sm:text-sm">
          AI 应用开发 · Agent 工程
        </p>
        <p className="mx-auto mt-2 max-w-xl text-[10px] leading-5 text-foreground/50 sm:text-xs">
          把模型、知识、工具与业务流程，做成可验证、可恢复、可审计的 AI 系统。
        </p>
      </div>
    </main>
  );
}
