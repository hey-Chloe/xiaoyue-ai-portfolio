"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      <header className="mb-4 w-full text-center lg:text-left">
        <p className="text-xs tracking-[0.2em] text-accent">SELECTED AI SYSTEMS</p>
        <h1 className="mt-2 text-3xl font-semibold">选择一个项目</h1>
        <p className="mt-2 text-xs leading-6 text-foreground/65 sm:text-sm">
          Agent、企业知识工程与 AI 基础设施。点击公开项目可进入源码仓库。
        </p>
      </header>
      {projects.map((project, index) => {
        return <ProjectLayout key={project.id ?? index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
