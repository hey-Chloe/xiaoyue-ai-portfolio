import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import ItemLayout from "./ItemLayout";

const SkillCard = ({ title, children }) => (
  <ItemLayout className="col-span-full flex-col items-start sm:col-span-6 lg:col-span-4">
    <p className="text-lg font-semibold text-accent">{title}</p>
    <p className="text-xs leading-6 text-foreground/70 sm:text-sm">{children}</p>
  </ItemLayout>
);

const AboutDetails = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout className="col-span-full row-span-2 flex-col items-start lg:col-span-8">
          <p className="text-xs tracking-[0.2em] text-accent">FROM DEMO TO SYSTEM</p>
          <h2 className="w-full text-left text-xl md:text-2xl">
            从 Demo 到真实系统
          </h2>
          <p className="text-xs font-light leading-6 sm:text-sm md:text-base md:leading-8">
            我关注的不只是模型能否回答，而是系统能否在真实权限、数据和失败边界中可靠运行。工作覆盖 Agent Runtime、企业级 RAG、工具调用、评测、权限治理与交易基础设施。
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full flex-col items-start text-accent xs:col-span-6 lg:col-span-4">
          <p className="w-full text-left text-3xl font-semibold sm:text-5xl">97.92%</p>
          <p className="text-xs leading-5 text-foreground/65">
            Enterprise RAG · 240 条 CPU 分层样本中的 Fusion Top-10 文档召回率
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full flex-col items-start text-accent xs:col-span-6 lg:col-span-4">
          <p className="w-full text-left text-3xl font-semibold sm:text-5xl">E2E</p>
          <p className="text-xs leading-5 text-foreground/65">
            ReminderCat 已完成企业微信手机端真实提醒验收并部署
          </p>
        </ItemLayout>

        <SkillCard title="Agent Runtime">
          有界循环、Tool Calling、权限策略、Checkpoint、会话恢复与执行 Trace。
        </SkillCard>
        <SkillCard title="Enterprise RAG">
          Dense + BM25、RRF、Reranker、ACL、页级引用与离线评测。
        </SkillCard>
        <SkillCard title="AI Infrastructure">
          OIDC、RBAC / ABAC、幂等、状态机、交易履约与账本边界。
        </SkillCard>

        <ItemLayout className="col-span-full flex-col items-start md:col-span-8">
          <p className="text-xs tracking-[0.2em] text-accent">HOW I BUILD</p>
          <h3 className="text-xl font-semibold">先定义可靠性，再追求聪明感。</h3>
          <p className="text-xs leading-6 text-foreground/70 sm:text-sm">
            先确认目标、权限、数据来源与失败路径，再选择模型和框架。模型可以不确定，但证据、审计和恢复路径必须明确。
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full flex-col items-start md:col-span-4">
          <div className="flex w-full items-center justify-between">
            <Github className="h-7 w-7 text-accent" strokeWidth={1.5} />
            <ArrowUpRight className="h-5 w-5 text-muted" />
          </div>
          <Link
            href="https://github.com/hey-Chloe"
            target="_blank"
            rel="noreferrer"
            className="text-lg hover:text-accent"
          >
            github.com/hey-Chloe
          </Link>
          <Link
            href="mailto:xiaoyue0227@yeah.net"
            className="flex items-center gap-2 break-all text-xs text-foreground/65 hover:text-accent"
          >
            <Mail className="h-4 w-4 shrink-0" />
            xiaoyue0227@yeah.net
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
