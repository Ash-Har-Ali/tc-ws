"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-between gap-10 px-6 py-20">
      {/* Left side */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl lg:text-3xl font-black text-purple-700 leading-tight tracking-wider mb-4">
          TINKERCHAMPS IS MORE THAN A CAMP — IT’S A LIFE-DESIGN EXPERIENCE THAT
          TRANSFORMS HOW STUDENTS THINK, LEARN, AND CREATE.
        </h2>
        <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
          In a world where AI and automation redefine every career, memorisation
          is no longer enough. Students must learn to explore boldly, question
          deeply, and innovate confidently. TinkerChamps brings together
          experiential learning, behavioural science, and activity-based
          education to build exactly those skills.
        </p>
      </div>

      {/* Right side: video + badge */}
      <div className="relative flex-1 flex md:justify-end justify-center">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400">
          <video
            src="/videos/tinkerchamps.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl object-cover w-[350px] lg:w-[400px] h-[450px]"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative md:absolute top-10 md:left-40 right-10 bg-purple-600 text-white rounded-full w-30 h-30 flex flex-col items-center justify-center shadow-lg">
          <span className="text-3xl font-extrabold">17+</span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-white/80 justify-center text-center">
            Camps Completed
          </span>
        </div>
      </div>
    </section>
  );
}
