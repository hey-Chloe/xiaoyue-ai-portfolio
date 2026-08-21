"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Blocks, CheckCircle2, Route } from "lucide-react";
import { useState } from "react";

const panels = [
  {
    id: "capability",
    label: "能力",
    Icon: Blocks,
    eyebrow: "WHAT I BUILD",
    title: "把 Agent 做成系统，而不是聊天界面。",
    description:
      "从模型调用继续向下：知识检索、工具协议、上下文预算、失败恢复、权限与审计，都要成为可以验证的工程边界。",
    items: [
      ["Agent Runtime", "有界循环、工具调用、检查点、恢复与执行追踪"],
      ["Enterprise RAG", "混合检索、重排、页级证据、ACL 与离线评测"],
      ["AI Infrastructure", "身份、交易状态机、幂等、账本与后台治理"],
    ],
  },
  {
    id: "method",
    label: "方法",
    Icon: Route,
    eyebrow: "HOW I WORK",
    title: "先定义可靠性，再追求“聪明感”。",
    description:
      "我先确认目标、权限、数据来源与失败路径，再选择模型和框架。模型不确定，但系统的边界、证据和回滚路径必须确定。",
    items: [
      ["01 · Scope", "把业务目标翻译成可验证的系统行为"],
      ["02 · Build", "让领域规则只有一个来源，让工具副作用可控"],
      ["03 · Evaluate", "用离线样本、轨迹和失败分类持续定位退化"],
    ],
  },
  {
    id: "evidence",
    label: "成果",
    Icon: CheckCircle2,
    eyebrow: "PROOF, NOT HYPE",
    title: "只展示能解释口径的结果。",
    description:
      "公开项目给出仓库，性能数字注明样本与环境；私有项目只说明实现范围。没有验证的数据，不拿来装饰简历。",
    items: [
      ["97.92%", "企业 RAG 在 240 条 CPU 分层样本中的 Top-10 文档召回"],
      ["26 / 26", "Coding Agent Runtime 离线确定性夹具验证"],
      ["E2E", "ReminderCat 完成企业微信真机端到端验收并部署"],
    ],
  },
];

const AboutDetails = () => {
  const [activeId, setActiveId] = useState("capability");
  const reduceMotion = useReducedMotion();
  const active = panels.find((panel) => panel.id === activeId) ?? panels[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="关于小悦"
        className="mb-4 flex gap-2"
      >
        {panels.map(({ id, label, Icon }) => {
          const selected = id === activeId;

          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(id)}
              className={
                selected
                  ? "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-2xl bg-foreground px-4 text-xs font-medium text-background"
                  : "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-background/30 px-4 text-xs text-foreground/50 backdrop-blur-md transition hover:text-foreground"
              }
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              {label}
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[28rem]">
        <div
          aria-hidden="true"
          className="absolute inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-white/[0.06] bg-background/30"
        />
        <AnimatePresence mode="wait">
          <motion.article
            key={active.id}
            role="tabpanel"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 28, rotate: 0.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -20, rotate: -0.4 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="project-card relative flex min-h-[28rem] flex-col rounded-[2rem] p-6 sm:p-8"
          >
            <div className="aurora-orb -right-24 -top-24" aria-hidden="true" />
            <p className="relative font-mono text-[10px] tracking-[0.25em] text-accent">
              {active.eyebrow}
            </p>
            <h2 className="relative mt-5 max-w-xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              {active.title}
            </h2>
            <p className="relative mt-4 max-w-xl text-sm leading-7 text-foreground/65">
              {active.description}
            </p>

            <div className="relative mt-auto grid gap-3 pt-7 sm:grid-cols-3">
              {active.items.map(([label, copy]) => (
                <div key={label} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="font-mono text-[10px] text-accent">{label}</p>
                  <p className="mt-3 text-[11px] leading-5 text-foreground/58">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutDetails;
