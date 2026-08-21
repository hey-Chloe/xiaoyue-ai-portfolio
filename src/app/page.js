import EnchantedForestHero from "@/components/hero/EnchantedForestHero";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#041316]">
      <EnchantedForestHero />

      <div className="w-full h-screen">
        <div className="relative z-30">
          <Navigation />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 px-6 text-center sm:bottom-10 md:left-10 md:right-auto md:max-w-md md:text-left">
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
