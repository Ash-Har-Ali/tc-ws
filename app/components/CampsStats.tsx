"use client";
import React from "react";

export default function CampsStats() {
  return (
    <section className="w-full bg-[#904BCF] py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        {/* Item 1 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          {/* Big number in background */}
          <span className="pointer-events-none select-none text-6xl font-black text-black/30 leading-none">
            17
          </span>
          {/* Label on top */}
          <span className="absolute text-sm font-semibold text-white">
            Camps in India
          </span>
        </div>

        {/* Item 2 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          <span className="pointer-events-none select-none text-6xl font-black text-black/30 leading-none">
            18
          </span>
          <span className="absolute text-sm font-semibold text-white">
            Camps in UAE
          </span>
        </div>

        {/* Item 3 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          <span className="pointer-events-none select-none text-6xl font-black text-black/30 leading-none">
            500+
          </span>
          <span className="absolute text-sm font-semibold text-white">
            Students
          </span>
        </div>
      </div>
    </section>
  );
}
