"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const MinaText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleSpanClick = () => {
    setIsPhotoVisible(!isPhotoVisible);
    setIsHovered(!isHovered);
  };

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  const skewX = useTransform(mouseX, [0, window.innerWidth], [-0.8, 0.8]);
  const skewY = useTransform(mouseY, [0, window.innerHeight], [0.8, -0.8]);

  return (
    <div className="relative h-screen" onMouseMove={handleMouseMove}>
      <AnimatePresence>
        {isPhotoVisible && (
          <motion.div
            className="absolute inset-0 z-10 grid place-items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.img
              drag
              whileDrag={{
                scale: 1.1,
                backgroundColor: "#73737323",
                cursor: "grabbing",
              }}
              id="transform-gpu"
              src="/photo.png"
              alt="photo.png"
              className="w-[40vw] h-auto transform"
              style={{
                skewX,
                skewY,
              }}
            />
            {/* // style={{
              //   transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
              //   transition: "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
              //   transformStyle: "preserve-3d",
              //   willChange: "transform",
              // }}
            /> */}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isPhotoVisible && (
          <motion.div
            className="absolute inset-0 grid place-items-center mix-blend-color-burn"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src="/colorimage.png"
              alt="colorimage.png"
              className="w-[40vw] h-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>

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
            onClick={handleSpanClick}
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
