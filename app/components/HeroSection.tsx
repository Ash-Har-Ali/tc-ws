"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="p-2 rounded-xl ">
      <div className="relative bg-linear-to-r from-[#4C2380] to-[#7F3EDF]  text-white py-20 lg:py-30 2xl:py-40 rounded-xl overflow-hidden md:h-[97vh] ">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/Assets/images/hero-banner.webp')] md:bg-[url('/Assets/images/hero-banner.webp')] bg-cover bg-center bg-rounded-3xl  opacity-100 pointer-events-none z-0" />

        <div className="flex max-w-7xl mx-auto flex-col md:flex-row px-6 justify-between">
          {/* Text Content */}
          <div className="space-y-6 text-white z-10 pt-25 py-20">
            <h1 className="text-4xl font-black font-primary leading-tight tracking-wider lg:text-5xl 2xl:text-6xl">
              REWIRING
              <br />
              YOUNG MINDS FOR
              <br />A LIMITLESS <span className="text-[#FBC333]">FUTURE</span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-white">
              A life-design experience that transforms how children think, learn
              and create – through adventure, play, and future-ready skills.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://wa.me/918075917297?text=I%20want%20to%20know%20more%20about%20Tinkerchamps"
                className="bg-[#E5D8FC] text-[#3D1076] px-6 py-2 rounded-full font-bold text-center hover:bg-[#FBC333] transition-colors duration-300"
              >
                Book Your Seats
              </Link>

              <Link
                href="https://wa.me/918075917297?text=I%20want%20to%20know%20more%20about%20Tinkerchamps"
                className="border-2 border-[#E5D8FC] text-[#E5D8FC] px-6 py-2 rounded-full font-bold text-center hover:bg-[#E5D8FC] hover:text-[#4C2380] transition-colors duration-300"
              >
                Chat With Academic Counsellor
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:w-1/2 lg:flex justify-end mt-3">
            <div className="relative md:h-130 md:w-130">
              <Image
                src="/Assets/images/hero-image.webp"
                alt="Students learning"
                fill
                className="object-contain scale-110 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
