"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const MinaText = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="gradient" className="relative h-screen">
      <div className="grid place-items-center h-full mix-blend-mode:color-burn">
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          src="/colorimage.png"
          alt="colorimage.png"
          className="w-[40vw] h-auto mix-blend-color-burn"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0.35, 0.17, 0.3, 0.86],
          }}
          className="text-xl"
        >
          you are cordially invited to,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.35, 0.17, 0.3, 0.86],
          }}
          className="text-xl relative"
        >
          the reunion of{" "}
          <span
            className="group relative italic underline decoration-dotted decoration-slate-400 underline-offset-4 hover:text-slate-400 cursor-pointer active:opacity-10 duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            mina-leen
            {isHovered && (
              <motion.img
                src="/envelope.png"
                alt="Hover image"
                initial={{ opacity: 0.2, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-4 max-w-[64px] opacity-100"
              />
            )}
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

export default MinaText;
