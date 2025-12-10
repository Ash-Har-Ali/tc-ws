"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-26 lg:flex lg:items-center lg:justify-between lg:gap-16">
      {/* Left side */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl lg:text-3xl font-black leading-tight tracking-[0.08em] text-[#6C30A4] mb-5 uppercase">
          TINKERCHAMPS IS MORE THAN A CAMP — IT’S A LIFE-DESIGN EXPERIENCE THAT
          TRANSFORMS HOW STUDENTS THINK, LEARN, AND CREATE.
        </h2>

        <p className="text-[15px] lg:text-base text-[#333333] leading-relaxed">
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
      </div>

      {/* Right side: video + badge */}
      <div className="relative mt-16 flex flex-1 justify-center lg:mt-0 lg:justify-end">
        <div className="relative">
          {/* Yellow offset card (like the image) */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-[430px] w-[310px] lg:h-[470px] lg:w-[340px] rounded-4xl bg-[#FFC52B]"
          />

          {/* Main video card */}
          <div className="relative h-[430px] w-[310px] lg:h-[470px] lg:w-[340px] overflow-hidden rounded-4xl bg-black shadow-xl">
            <video
              src="/videos/tinkerchamps.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Circular badge */}
          <div className="absolute -top-10 -left-10 flex h-28 w-28 -rotate-12 flex-col items-center justify-center rounded-full bg-[#F3D9FF] text-center text-[#6C30A4] shadow-lg">
            <span className="text-3xl font-extrabold leading-none">17+</span>
            <span className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.25em]">
              Camps
              <br />
              Completed
            </span>
          </div>
        </div>
      </div>

      {/* Dashed purple wave at the bottom */}
    </section>
  );
}
