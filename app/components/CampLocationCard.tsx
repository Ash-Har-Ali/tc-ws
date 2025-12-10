"use client";
import React from "react";
import Image from "next/image";

export default function CampCard() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-18 px-6 py-16 lg:flex-row">
      {/* LEFT SECTION */}
      <div className="relative w-full max-w-lg rounded-[28px] bg-[#7F3EDF]  shadow-lg">
        {/* Main Image */}
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/main-campus.jpg"
            alt="The White School International"
            width={480}
            height={360}
            className="h-90 w-full object-cover"
          />
        </div>

        {/* Floating Images */}
        <div className="absolute right-[-45px] top-10 flex flex-col gap-5">
          <div className="overflow-hidden rounded-[18px] border-[3px] border-white shadow-lg">
            <Image
              src="/images/campus-small1.jpg"
              alt="Campus path"
              width={150}
              height={100}
              className="h-[110px] w-[150px] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[18px] border-[3px] border-white shadow-lg">
            <Image
              src="/images/campus-small2.jpg"
              alt="Campus building"
              width={150}
              height={100}
              className="h-[110px] w-[150px] object-cover"
            />
          </div>
        </div>

        {/* Bottom location bar */}
        <div className="mt-4 flex items-start gap-3 rounded-b-[20px] bg-[#5E2AA5] px-5 py-3 text-white">
          <span className="text-lg mt-">📍</span>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-base">The White School</span>
            <span className="text-sm font-medium">
              International, Kozhikode
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full max-w-lg rounded-[28px] bg-[#EDE0FF] px-6 py-10 shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/Assets/images/logo.webp"
            alt="TinkerChamps Logo"
            width={250}
            height={250}
            className="h-auto w-[230px] md:w-[230px]"
          />
        </div>

        {/* Info Grid */}
        <div className=" grid gap-4 md:grid-cols-2">
          {/* Date */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDD835]/40 text-lg">
              🗓️
            </span>
            December 24 – 26
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDD835]/40 text-lg">
              ⏱️
            </span>
            3 Days, 2 Nights
          </div>

          {/* Venue */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDD835]/40 text-lg">
              🎓
            </span>
            De&apos; Lead International
          </div>

          {/* Book Now */}
          <button className="flex items-center gap-3 rounded-xl bg-[#FFC52B] px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-md hover:bg-[#ffce4d] transition">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-lg">
              📨
            </span>
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
