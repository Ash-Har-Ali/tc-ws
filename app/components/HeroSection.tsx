"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="p-2 rounded-xl">
      <div className="relative bg-linear-to-r from-[#4C2380] to-[#7F3EDF] min-h-[400px] text-white py-16 2xl:py-30 rounded-xl overflow-hidden mt-5 md:mt-15">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/Assets/images/GridSquare.png')] md:bg-[url('/Assets/images/grid.png')] bg-cover bg-repeat opacity-100 pointer-events-none z-0" />

        <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 lg:pl-22 2xl:px-65 z-10">
          {/* Text Content */}
          <div className="md:w-full mb-4 md:mb-0 md:py-10">
            <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4 mt-10 leading-tight">
              Empowering Every Kind <br className="hidden xl:flex" />
              of{" "}
              <span
                className="relative inline-block text-[#FBC333] animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                Genius
                <svg
                  className="absolute left-0 w-full h-2 pointer-events-none"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,10 Q50,-5 100,10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg 2xl:text-2xl mb-12 mt-10 max-w-[80%]">
              Transforming student potential through neuroscience and our neural
              learning
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/#"
                className="bg-[#E5D8FC] text-[#4C2380] px-8 py-2 rounded-full font-bold text-center hover:bg-linear-to-r from-[#7F3EDF] to-[#4C2380] hover:text-[#E5D8FC] transition-colors duration-300"
              >
                Book a Free DAN Demo
              </Link>
              <Link
                href="/#"
                className="border border-[#E5D8FC] text-[#E5D8FC] px-8 py-2 rounded-full font-bold text-center hover:bg-[#E5D8FC] hover:text-[#4C2380] transition-colors duration-300"
              >
                Register for November 2025
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:w-1/2 lg:flex">
            <div className="relative md:h-130 md:w-120">
              <Image
                src="/Assets/images/students.webp"
                alt="Students learning"
                fill
                className="object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
