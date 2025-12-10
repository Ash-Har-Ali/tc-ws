"use client";

import React from "react";
import Image from "next/image";

export default function CampLocationCard() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:items-stretch">
      {/* LEFT: Image stack card */}
      <div className="relative w-full max-w-md rounded-4xl bg-[#7F3EDF] p-3 shadow-xl">
        {/* Main image */}
        <div className="overflow-hidden rounded-[28px]">
          <Image
            src="/images/campus-main.jpg"
            alt="The White School International campus"
            width={480}
            height={360}
            className="h-[260px] w-full object-cover md:h-80"
          />
        </div>

        {/* Stacked small images on the right */}
        <div className="pointer-events-none absolute right-[-35px] top-16 flex flex-col gap-4">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/campus-top.jpg"
              alt="Campus path"
              width={170}
              height={130}
              className="h-[120px] w-[150px] object-cover md:h-[130px] md:w-[170px]"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/campus-bottom.jpg"
              alt="Campus greenery"
              width={170}
              height={130}
              className="h-[120px] w-[150px] object-cover md:h-[130px] md:w-[170px]"
            />
          </div>
        </div>

        {/* Bottom location bar */}
        <div className="mt-4 flex items-center gap-2 rounded-3xl bg-[#6B2FCC] px-4 py-3 text-sm font-semibold text-white">
          <span className="text-lg">📍</span>
          <span>The White School International, Kozhikode</span>
        </div>
      </div>

      {/* RIGHT: Info card */}
      <div className="w-full max-w-xl rounded-4xl bg-[#F1E6FF] px-8 py-10 shadow-md">
        {/* Logo / heading */}
        <div className="flex justify-center">
          {/* Replace with your real logo image */}
          <Image
            src="/Assets/images/logo.webp"
            alt="TinkerChamps Logo"
            width={260}
            height={120}
            className="h-auto w-[220px] md:w-[260px]"
          />
        </div>

        {/* Pills grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <button className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE3A4] text-[#4C2380] text-lg">
              🗓️
            </span>
            <span>December 24–26</span>
          </button>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE3A4] text-[#4C2380] text-lg">
              ⏱️
            </span>
            <span>3 Days, 2 Nights</span>
          </button>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE3A4] text-[#4C2380] text-lg">
              🎓
            </span>
            <span>De&apos; Lead International</span>
          </button>

          <button className="flex items-center gap-3 rounded-2xl bg-[#FFC52B] px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#4C2380] text-lg">
              📨
            </span>
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
