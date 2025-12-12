"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mrs. Shahana F",
    role: "Parent of Adiyan",
    quote: "“My son came back as a completely different version of himself.”",
    message:
      "“I sent Adiyan to TinkerChamps hoping he would learn something new, but what he returned with shocked us. He now takes initiative, solves problems calmly, and communicates with so much more confidence. Three days changed what three years of school couldn’t.”",
    avatar: "/images/parent1.jpg",
  },
  {
    id: 2,
    name: "Mr. Ramesh Nair",
    role: "Parent of Anaya",
    quote: "“TinkerChamps helped my daughter discover her inner leader.”",
    message:
      "“Anaya came back from TinkerChamps more confident, curious, and expressive. She started leading group projects in school and tackling challenges with enthusiasm.”",
    avatar: "/images/parent2.jpg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section className="relative w-full bg-[#ffffff] py-16 px-4 overflow-hidden">
      {/* Background shapes */}
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-80 rounded-t-full bg-[#ffffff]" />
      <div className=" hidden md:flex pointer-events-none absolute -bottom-6 right-10 h-80 w-80 z-5">
        <svg
          viewBox="0 0 120 120"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20,60 C10,35 30,15 50,25 C60,30 65,40 70,50 C75,40 82,30 95,30 C115,30 120,55 105,75 C90,95 70,105 70,105 C70,105 50,95 35,80 C27,72 22,66 20,60 Z"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      {/* Purple card */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 rounded-4xl bg-[#562190] px-6 py-10 text-white md:flex-row md:items-center md:px-12 md:py-12">
        {/* LEFT: fixed video + thumbs */}
        <div className="flex w-full justify-center md:w-[40%]">
          <div className="relative rounded-[28px] bg-[#3D1076] p-3 shadow-xl">
            <div className="overflow-hidden rounded-3xl bg-black">
              <video
                src="/videos/testimonial1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-[340px] w-[220px] object-cover md:h-[450px] md:w-80"
              />
            </div>
          </div>
        </div>
        {/* RIGHT: text  */}

        <div className="w-full md:w-[60%] text-center">
          {/* Small label */}
          <p className="text-xs font-semibold uppercase tracking-wider text-[#FBC333]">
            Testimonials
          </p>
          {/* Heading */}
          <h2 className="mt-1 text-2xl md:text-4xl font-black leading-tight tracking-wider">
            VOICE OF ADVENTURE FROM
            <br />
            <span className="block md:inline">
              KID&apos;S <span className="text-[#FFC52B]">PARENTS</span>
            </span>
          </h2>
          {/* Quote row with yellow arrows */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="text-[#FFC52B] text-2xl font-extrabold hover:opacity-80 transition"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <p className="max-w-xl text-lg md:text-xl font-semibold">
              {t.quote}
            </p>

            <button
              onClick={next}
              className="text-[#FFC52B] text-2xl font-extrabold hover:opacity-80 transition"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
          {/* Body text */}
          <p className="mt-4 mx-auto max-w-xl text-xs md:text-sm leading-relaxed text-[#EAD7FF]">
            {t.message}
          </p>
          {/* Avatar + name */}
          <div className="flex items-center gap-3 mt-6 justify-center">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#FFC52B] bg-white">
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-[#F3D9FF]">{t.role}</p>
            </div>
          </div>
          {/* Button */}
          <div className="flex md:justify-end justify-center">
            <button className="rounded-full bg-white px-6 py-3 text-xs z-10 mt-10 font-semibold uppercase tracking-wide text-[#6C30A4] shadow-md hover:bg-[#F7F2FF] transition">
              Book Your Seat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
