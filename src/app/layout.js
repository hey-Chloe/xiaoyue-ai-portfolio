import "./globals.css";
import FireFliesBackground from "@/components/FireFliesBackground";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://xiaoyue-ai-systems.itankg64.chatgpt.site";
const canonicalUrl = new URL(`${siteUrl.replace(/\/$/, "")}/`);

export const metadata = {
  metadataBase: canonicalUrl,
  title: {
    template: "%s | 小悦",
    default: "小悦 · AI 应用开发与 Agent 工程",
  },
  description:
    "小悦的 AI 工程作品集：Agent Runtime、企业级 RAG、AI 基础设施与真实业务系统。",
  alternates: {
    canonical: canonicalUrl.href,
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    locale: "zh_CN",
    title: "小悦 · AI Systems Builder",
    description:
      "能检索证据、调用工具、恢复失败，并在真实权限边界中运行的 AI 系统。",
  },
  twitter: {
    card: "summary",
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
