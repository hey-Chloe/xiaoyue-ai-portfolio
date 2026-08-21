"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { sitePath } from "@/lib/site-path";

const audioPath = sitePath("/audio/birds39-forest-20772.mp3");

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="group fixed right-2.5 top-4 z-50 xs:right-4">
      <audio ref={audioRef} loop preload="none">
        <source src={audioPath} type="audio/mpeg" />
        你的浏览器不支持音频播放。
      </audio>
      <motion.button
        type="button"
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2.5 text-foreground custom-bg xs:h-14 xs:w-14 xs:p-4"
        aria-label={isPlaying ? "关闭环境音" : "播放环境音"}
        name="sound-control"
      >
        {isPlaying ? (
          <Volume2
            className="h-full w-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="h-full w-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
