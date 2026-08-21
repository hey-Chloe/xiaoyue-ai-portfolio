"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`个人网站联系：${name}`);
    const body = encodeURIComponent(`${message}\n\n来自：${name}\n回复邮箱：${email}`);

    window.location.href = `mailto:xiaoyue0227@yeah.net?subject=${subject}&body=${body}`;
  };

  return (
    <motion.form
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col items-center justify-center space-y-4"
    >
      <motion.input
        variants={item}
        type="text"
        name="name"
        minLength={2}
        required
        placeholder="你的名字"
        className="w-full rounded-md p-2 text-foreground shadow-lg custom-bg focus:outline-none focus:ring-2 focus:ring-accent/50"
      />
      <motion.input
        variants={item}
        type="email"
        name="email"
        required
        placeholder="你的邮箱"
        className="w-full rounded-md p-2 text-foreground shadow-lg custom-bg focus:outline-none focus:ring-2 focus:ring-accent/50"
      />
      <motion.textarea
        variants={item}
        name="message"
        required
        minLength={10}
        maxLength={500}
        rows={4}
        placeholder="想聊什么？"
        className="w-full rounded-md p-2 text-foreground shadow-lg custom-bg focus:outline-none focus:ring-2 focus:ring-accent/50"
      />
      <motion.button
        variants={item}
        type="submit"
        className="cursor-pointer rounded-md border border-accent/30 bg-background px-10 py-4 text-foreground shadow-lg backdrop-blur-sm hover:shadow-glass-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
      >
        通过邮件发送
      </motion.button>
      <motion.p variants={item} className="text-center text-xs text-foreground/65">
        xiaoyue0227@yeah.net · {" "}
        <a
          href="https://github.com/hey-Chloe"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent"
        >
          GitHub @hey-Chloe
        </a>
      </motion.p>
    </motion.form>
  );
}
