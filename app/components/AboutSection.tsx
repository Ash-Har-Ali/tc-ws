"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setMuted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-26 overflow-x-hidden lg:flex lg:items-center lg:justify-between lg:gap-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Left side */}
      <motion.div
        className="flex-1 max-w-2xl"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl lg:text-3xl font-black leading-tight tracking-wider text-[#6C30A4] mb-5 uppercase">
          TINKERCHAMPS IS MORE THAN A CAMP — IT’S A LIFE-DESIGN EXPERIENCE THAT
          TRANSFORMS HOW STUDENTS THINK, LEARN, AND CREATE.
        </h2>

        <p className="text-base lg:text-base text-[#333333] leading-relaxed">
          In a world where AI and automation redefine every career, memorisation
          is no longer enough. Students must learn to explore boldly, question
          deeply, and innovate confidently. TinkerChamps brings together
          experiential learning, behavioural science, and activity-based
          education to build exactly those skills.
        </p>

        <div className="pointer-events-none relative -bottom-6 left-0 right-0 hidden md:block">
          <svg
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
            className="h-16 w-full"
          >
            <path
              d="M0,40 C120,10 200,70 320,40 C400,20 440,30 500,50"
              fill="none"
              stroke="#C47BFF"
              strokeWidth="3"
              strokeDasharray="10 10"
            />
          </svg>
        </div>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="relative mt-16 flex flex-1 justify-end lg:mt-0 lg:justify-end"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Yellow offset card */}
          <div
            aria-hidden="true"
            className="absolute -bottom-2 -right-2 h-[450px] w-[310px] lg:h-[500px] lg:w-[340px] rounded-2xl bg-[#FBC333]"
          />

          {/* Main video card */}
          <div className="relative h-[450px] w-[310px] lg:h-[500px] lg:w-[340px] overflow-hidden rounded-2xl bg-black shadow-xl">
            <video
              ref={videoRef}
              src="/Assets/video/video1tc.mp4"
              autoPlay
              loop
              playsInline
              muted={muted}
              className="h-full w-full object-cover"
            />

            <button
              onClick={() => setMuted((prev) => !prev)}
              className="absolute bottom-4 right-4 bg-[#6C30A4]/80 hover:bg-[#562190] text-white rounded-full p-2 text-xs md:text-sm transition"
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? "🔇" : "🔊"}
            </button>
          </div>

          {/* Circular badge */}
          <motion.div
            className="absolute top-10 -left-10 flex h-26 w-26 -rotate-12 flex-col items-center justify-center border border-dashed border-[#904BCF] rounded-full bg-[#E5D8FC] text-center text-[#3D1076] shadow-lg"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-5xl font-extrabold leading-none tracking-wider">
              17+
            </h2>
            <span className="text-[9px] font-bold uppercase leading-tight">
              Camps
              <br />
              Completed
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
