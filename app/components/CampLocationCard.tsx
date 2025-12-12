"use client";
import React from "react";
import Image from "next/image";

export default function CampCard() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-4 py-20 lg:flex-row lg:items-stretch lg:gap-16 lg:py-16">
      {/* LEFT SECTION */}
      <div className="relative w-full max-w-lg rounded-[28px] bg-[#7F3EDF] shadow-lg">
        {/* Main Image */}
        <div className="overflow-hidden rounded-t-[28px]">
          <Image
            src="/Assets/images/whiteschool.webp"
            alt="The White School International"
            width={480}
            height={360}
            className="h-110 w-full object-fill"
          />
        </div>

        {/* Floating Images (show from md and up to avoid crowding on mobile) */}
        <div className="absolute top-6 right-4 hidden flex-col gap-4 md:flex md:right-[-55px] md:top-10">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/Assets/images/whiteschool2.webp"
              alt="Campus path"
              width={150}
              height={100}
              className="h-[170px] w-[140px] object-cover rounded-2xl  "
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/Assets/images/whiteschool3.webp"
              alt="Campus building"
              width={150}
              height={100}
              className="h-[170px] w-[140px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom location bar */}
        <div className="flex items-start gap-3 rounded-b-[28px] bg-[#5E2AA5] px-5 py-3 text-white">
          <span className="mt-1 text-lg">📍</span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold">The White School</span>
            <span className="text-sm font-medium">
              International, Kozhikode
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-around rounded-[28px] bg-[#EDE0FF] px-5 py-8 shadow-md sm:px-8 sm:py-10">
        {/* Logo */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <Image
            src="/Assets/images/logo.webp"
            alt="TinkerChamps Logo"
            width={250}
            height={250}
            className="h-auto w-[200px] md:w-[300px]"
          />
        </div>

        {/* Info Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Date */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDD835]/40 text-lg">
              🗓️
            </span>
            <span>December 24 – 26</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDD835]/40 text-lg">
              ⏱️
            </span>
            <span>3 Days, 2 Nights</span>
          </div>

          {/* Book Now */}
          <button className="flex items-center justify-center gap-3 rounded-xl bg-[#FFC52B] px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-md transition hover:bg-[#ffce4d] md:col-span-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-lg">
              📨
            </span>
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
