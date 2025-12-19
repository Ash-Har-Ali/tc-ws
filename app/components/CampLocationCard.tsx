"use client";
import React from "react";
import Image from "next/image";
import { FaMapLocationDot, FaClock, FaRegCalendarDays } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import Link from "next/link";

export default function CampCard() {
  return (
    <section id="venue" className="py-16">
      {/* SECTION HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6C30A4] mb-1 tracking-wider mt-10">
          Upcoming Events
        </h2>
        <p className="text-lg text-black">
          Discover where the magic happens — join Tinkerchamps
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-4 lg:flex-row lg:items-stretch lg:gap-16">
        {/* LEFT SECTION */}
        <div className="relative w-full max-w-lg rounded-3xl bg-[#562190] shadow-lg">
          {/* Main Image */}
          <div className="overflow-hidden rounded-t-3xl">
            <Image
              src="/Assets/images/wscampus.webp"
              alt="The White School International"
              width={480}
              height={360}
              className="h-110 w-full object-fill pr-2 pl-2 pt-2 rounded-t-3xl"
            />
          </div>

          {/* Floating Images */}
          <div className="absolute top-6 right-4 hidden flex-col gap-4 md:flex md:right-[-55px] md:top-10">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/Assets/images/whiteschool2.webp"
                alt="Campus path"
                width={150}
                height={100}
                className="h-[170px] w-[140px] object-cover rounded-2xl"
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
          <div className="flex items-center gap-6 rounded-b-[20px] bg-[#562190] px-5 py-4 text-white">
            <FaMapLocationDot className="text-4xl text-white shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold">The White School</span>
              <span className="text-lg font-semibold">
                International, Kozhikode
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="mx- flex w-full max-w-lg flex-col items-center justify-around rounded-3xl bg-[#E5D8FC] py-8 shadow-md  sm:py-10">
          {/* Logo */}
          <div className="mb- flex justify-center">
            <Image
              src="/Assets/images/TCS19.webp"
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
              <span>December 24 – 26</span>
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
      </div>
    </section>
  );
}
