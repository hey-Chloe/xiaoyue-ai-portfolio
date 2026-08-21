"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { projectCategories } from "@/app/data";

const deckPosition = (position, reduceMotion) => {
  if (reduceMotion) {
    return {
      x: position === 0 ? 0 : position * 10,
      y: Math.abs(position) * 12,
      scale: 1 - Math.abs(position) * 0.025,
      rotate: 0,
      opacity: position === 0 ? 1 : 0.38,
    };
  }

  return {
    x: position * 24,
    y: Math.abs(position) * 18,
    scale: 1 - Math.abs(position) * 0.04,
    rotate: position * 1.35,
    opacity: position === 0 ? 1 : 0.42,
  };
};

const ProjectList = ({ projects }) => {
  const [categoryId, setCategoryId] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const stageRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const visibleProjects = useMemo(
    () =>
      categoryId === "all"
        ? projects
        : projects.filter((project) => project.categoryId === categoryId),
    [categoryId, projects]
  );

  const selected = visibleProjects[selectedIndex] ?? visibleProjects[0];

  const selectCategory = (nextCategory) => {
    setCategoryId(nextCategory);
    setSelectedIndex(0);
    requestAnimationFrame(() => stageRef.current?.focus());
  };

  const showProject = (nextIndex) => {
    setSelectedIndex(
      (nextIndex + visibleProjects.length) % visibleProjects.length
    );
  };

  const getRelativePosition = (index) => {
    let position = index - selectedIndex;
    const half = visibleProjects.length / 2;

    if (position > half) position -= visibleProjects.length;
    if (position < -half) position += visibleProjects.length;

    return position;
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showProject(selectedIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showProject(selectedIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setSelectedIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setSelectedIndex(visibleProjects.length - 1);
    }
  };

  return (
    <section
      ref={stageRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-label="小悦的项目幻灯片"
      className="relative z-20 mx-auto flex min-h-[calc(100dvh-9rem)] w-full max-w-7xl flex-col justify-center outline-none"
    >
      <header className="mb-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            PROJECT CONSTELLATION / 2026
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
            选择方向，再一层层翻开项目。
          </h1>
        </div>
        <p className="max-w-md text-xs leading-6 text-foreground/55 lg:text-right">
          点击卡片、拖动当前卡片，或使用 ← → 切换。每个案例都说明问题、系统方案与可核实结果。
        </p>
      </header>

      <div
        role="tablist"
        aria-label="项目分类"
        className="mb-5 flex max-w-full gap-2 overflow-x-auto pb-1"
      >
        {projectCategories.map((category) => {
          const active = category.id === categoryId;
          const count =
            category.id === "all"
              ? projects.length
              : projects.filter(
                  (project) => project.categoryId === category.id
                ).length;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => selectCategory(category.id)}
              className={
                active
                  ? "shrink-0 rounded-full bg-foreground px-4 py-2.5 text-xs font-medium text-background"
                  : "shrink-0 rounded-full border border-foreground/10 bg-background/25 px-4 py-2.5 text-xs text-foreground/55 backdrop-blur-md transition hover:border-accent/35 hover:text-foreground"
              }
            >
              {category.label}
              <span className="ml-2 font-mono text-[9px] opacity-55">
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[30rem] flex-1 lg:min-h-[32rem]">
        {visibleProjects.map((project, index) => {
          const position = getRelativePosition(index);
          const active = position === 0;

          if (Math.abs(position) > 2) return null;

          return (
            <motion.article
              key={project.id}
              role={active ? "group" : undefined}
              aria-roledescription={active ? "幻灯片" : undefined}
              aria-label={
                active
                  ? `${selectedIndex + 1} / ${visibleProjects.length}：${project.name}`
                  : undefined
              }
              aria-hidden={!active}
              initial={false}
              animate={deckPosition(position, reduceMotion)}
              transition={{ type: "spring", stiffness: 210, damping: 26 }}
              drag={active && !reduceMotion ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) showProject(selectedIndex + 1);
                if (info.offset.x > 70) showProject(selectedIndex - 1);
              }}
              onClick={() => {
                if (!active) setSelectedIndex(index);
              }}
              style={{ zIndex: 20 - Math.abs(position) }}
              className={
                active
                  ? "project-card absolute inset-0 flex cursor-grab flex-col overflow-hidden rounded-[2rem] p-5 active:cursor-grabbing sm:p-8 lg:p-10"
                  : "project-card absolute inset-0 cursor-pointer overflow-hidden rounded-[2rem] p-6"
              }
            >
              <div className="aurora-orb -right-20 -top-24" aria-hidden="true" />

              {active ? (
                <>
                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.22em] text-accent">
                        {project.number} / {String(visibleProjects.length).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-xs text-foreground/55">
                        {project.category}
                      </p>
                    </div>
                    <p className="rounded-full border border-foreground/10 px-3 py-2 font-mono text-[9px] tracking-[0.16em] text-foreground/45">
                      {project.year} · VERIFIED SCOPE
                    </p>
                  </div>

                  <div className="relative mt-5 max-w-4xl">
                    <h2 className="text-3xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                      {project.name}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
                      {project.summary}
                    </p>
                  </div>

                  <div className="relative mt-5 grid gap-4 border-t border-foreground/10 pt-5 md:grid-cols-3">
                    {[
                      ["问题", project.challenge],
                      ["系统方案", project.solution],
                      ["结果与口径", project.outcome],
                    ].map(([label, content]) => (
                      <div key={label} className="rounded-2xl bg-white/[0.025] p-4">
                        <p className="font-mono text-[9px] tracking-[0.2em] text-accent">
                          {label}
                        </p>
                        <p className="mt-2 text-[11px] leading-5 text-foreground/62 sm:text-xs sm:leading-6">
                          {content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
                    <div>
                      <p className="mb-3 font-mono text-[9px] tracking-[0.16em] text-foreground/40">
                        {project.evidence}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-foreground/10 bg-background/25 px-3 py-1.5 text-[9px] text-foreground/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-11 items-center gap-2 rounded-full border border-accent/35 bg-accent/5 px-5 text-xs text-accent transition hover:bg-accent hover:text-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {project.linkLabel}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="flex min-h-11 items-center gap-2 rounded-full border border-foreground/10 px-5 text-xs text-foreground/45">
                        <LockKeyhole className="h-4 w-4" />
                        {project.linkLabel}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <div className="relative flex h-full items-end">
                  <p className="text-2xl font-semibold tracking-tight text-foreground/25">
                    {project.name}
                  </p>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>

      <footer className="mt-4 flex items-center justify-between gap-4">
        <p aria-live="polite" className="font-mono text-[10px] text-foreground/45">
          当前项目 · {selected?.name}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => showProject(selectedIndex - 1)}
            aria-label="上一个项目"
            className="glass-control flex h-11 w-11 items-center justify-center rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="min-w-14 text-center font-mono text-[10px] text-foreground/45">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(visibleProjects.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => showProject(selectedIndex + 1)}
            aria-label="下一个项目"
            className="glass-control flex h-11 w-11 items-center justify-center rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ProjectList;
