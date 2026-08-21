import "./globals.css";
import FireFliesBackground from "@/components/FireFliesBackground";

export const metadata = {
  title: {
    template: "%s | 小悦",
    default: "小悦 · AI 应用开发与 Agent 工程",
  },
  description:
    "小悦的 AI 工程作品集：Agent Runtime、企业级 RAG、AI 基础设施与真实业务系统。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "小悦 · AI Systems Builder",
    description:
      "能检索证据、调用工具、恢复失败，并在真实权限边界中运行的 AI 系统。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="bg-background text-foreground font-inter">
        {children}
        <FireFliesBackground />
        <div id="my-modal" />
      </body>
    </html>
  );
}
