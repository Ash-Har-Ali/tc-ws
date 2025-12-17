"use client";
import React from "react";
import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import Link from "next/link";

export default function Tclead() {
  return (
    <section
      id="venue"
      className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-4 py-20 lg:flex-row lg:items-stretch lg:gap-16 lg:py-0 lg:pb-16"
    >
      {/* RIGHT SECTION */}
      <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-around rounded-3xl bg-[#E5D8FC] px-5 py-8 shadow-md sm:px-8 sm:py-10">
        {/* Logo */}
        <div className="mb- flex justify-center">
          <Image
            src="/Assets/images/TCS18.webp"
            alt="TinkerChamps Logo"
            width={250}
            height={250}
            className="h-auto w-[250px] md:w-[350px]"
          />
        </div>

        {/* Info Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Date */}
          <div className="flex items-center gap-3 rounded-xl bg-[#F1EAFD] px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBCE3E] text-lg text-black">
              <FaRegCalendarDays />
            </span>
            <span>December 29 – 31</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3 rounded-xl bg-[#F1EAFD] px-4 py-3 text-sm font-semibold text-[#4C2380] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBCE3E] text-lg text-black">
              <FaClock />
            </span>
            <span>3 Days, 2 Nights</span>
          </div>

          {/* Book Now */}
          <Link
            href="https://wa.me/918075917297?text=I%20want%20to%20know%20more%20about%20Tinkerchamps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl bg-[#562190] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#6a2db3] md:col-span-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBCE3E] text-lg text-black">
              <RiGraduationCapFill />
            </span>
            <span>Book Now</span>
          </Link>
        </div>
      </div>

      {/* LEFT SECTION */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#562190] shadow-lg">
        {/* Main Image */}
        <div className="overflow-hidden rounded-t-3xl">
          <Image
            src="/Assets/images/lead1.webp"
            alt="LEAD College (Autonomous)"
            width={480}
            height={360}
            className="h-110 w-full object-fill pr-2 pl-2 pt-2 rounded-t-3xl"
          />
        </div>

        {/* Floating Images (show from md and up to avoid crowding on mobile) */}
        <div className="absolute top-6 right-4 hidden flex-col gap-4 md:flex md:left-[-55px] md:top-10">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/Assets/images/lead2.webp"
              alt="Campus path"
              width={150}
              height={100}
              className="h-[170px] w-[140px] object-cover rounded-2xl  "
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/Assets/images/lead3.webp"
              alt="Campus building"
              width={150}
              height={100}
              className="h-[170px] w-[140px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom location bar */}
        <div className="flex items-center gap-6 rounded-b-[20px] bg-[#562190] px-5 py-4 text-white">
          <FaMapLocationDot className="text-4xl text-white shrink-0" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold">LEAD College</span>
            <span className="text-lg font-semibold">
              (Autonomous), Palakkad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
