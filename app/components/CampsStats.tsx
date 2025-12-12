"use client";
import React from "react";

export default function CampsStats() {
  return (
    <section className="w-full bg-[#904BCF] py-16 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-16 px-6 md:flex-row">
        {/* Item 1 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          {/* Big number in background */}
          <h2 className="pointer-events-none select-none text-7xl font-black text-[#00000080] leading-none tracking-wider">
            17
          </h2>
          {/* Label on top */}
          <span className="absolute text-sm font-semibold text-white">
            Camps in India
          </span>
        </div>

        {/* Item 2 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          <h2 className="pointer-events-none select-none text-7xl font-black text-[#00000080] leading-none tracking-wider">
            18
          </h2>
          <span className="absolute text-sm font-semibold text-white">
            Camps in UAE
          </span>
        </div>

        {/* Item 3 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          <h2 className="pointer-events-none select-none text-7xl font-black text-[#00000080] leading-none tracking-wider">
            500+
          </h2>
          <span className="absolute text-sm font-semibold text-white">
            Students
          </span>
        </div>
      </div>
    </section>
  );
}
