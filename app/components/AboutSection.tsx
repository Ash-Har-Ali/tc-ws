"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-20">
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl lg:text-4xl font-black text-purple-700 leading-tight tracking-tight mb-4">
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

      {/* Right Video Section */}
      <div className="relative flex-1 flex justify-center">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400">
          <video
            src="/videos/tinkerchamps.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl object-cover w-[350px] lg:w-[400px] h-[450px]"
          />
        </div>

        {/* Badge */}
        <div className="absolute -top-8 -left-8 bg-purple-600 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg">
          <span className="text-3xl font-extrabold">17+</span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-white/80">
            Camps Completed
          </span>
        </div>
      </div>

      {/* Decorative Curve */}
      <div className="absolute bottom-0 left-0 w-full h-10 overflow-hidden">
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          className="w-full h-full text-purple-400"
        >
          <path
            d="M0,30 C150,80 350,0 500,30 L500,50 L0,50 Z"
            fill="none"
            stroke="purple"
            strokeDasharray="8 8"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
