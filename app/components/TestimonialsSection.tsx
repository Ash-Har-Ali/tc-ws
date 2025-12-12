"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  message: string;
  video: string;
  avatar: string;
  thumbs: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mrs. Shahana F",
    role: "Parent of Adiyan",
    quote: "“My son came back as a completely different version of himself.”",
    message:
      "“I sent Adiyan to TinkerChamps hoping he would learn something new, but what he returned with shocked us. He now takes initiative, solves problems calmly, and communicates with so much more confidence. Three days changed what three years of school couldn’t.”",
    video: "/videos/testimonial1.mp4",
    avatar: "/images/parent1.jpg",
    thumbs: ["/images/thumb1a.jpg", "/images/thumb1b.jpg"],
  },
  {
    id: 2,
    name: "Mr. Ramesh Nair",
    role: "Parent of Anaya",
    quote: "“TinkerChamps helped my daughter discover her inner leader.”",
    message:
      "“Anaya came back from TinkerChamps more confident, curious, and expressive. She started leading group projects in school and tackling challenges with enthusiasm.”",
    video: "/videos/testimonial2.mp4",
    avatar: "/images/parent2.jpg",
    thumbs: ["/images/thumb2a.jpg", "/images/thumb2b.jpg"],
  },
  // ➕ Add more testimonials as needed
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="relative w-full bg-[#F3E8FF] py-16 px-4 overflow-hidden">
      {/* Background shapes */}
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-80 rounded-t-full bg-[#E4CFFF]" />
      <div className="pointer-events-none absolute -bottom-6 right-10 h-40 w-40">
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

      {/* Purple Card */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 rounded-[32px] bg-[#6C30A4] px-6 py-10 text-white md:flex-row md:items-center md:px-12 md:py-12">
        {/* LEFT: Video + thumbs */}
        <div className="flex w-full justify-center md:w-[38%]">
          <div className="relative rounded-[28px] bg-[#5A2590] p-3 shadow-xl">
            {/* Main Video */}
            <div className="overflow-hidden rounded-[24px] bg-black">
              <video
                src={t.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-[340px] w-[220px] object-cover md:h-[360px] md:w-[240px]"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 flex gap-2">
              {t.thumbs.map((thumb, i) => (
                <div
                  key={i}
                  className="h-16 flex-1 overflow-hidden rounded-[16px]"
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${i + 1}`}
                    width={120}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="w-full md:w-[62%] text-center md:text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F8D8FF]">
            Testimonials
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-black leading-tight tracking-wide text-white">
            VOICE OF ADVENTURE FROM{" "}
            <span className="block md:inline">
              KID&apos;S <span className="text-[#FFC52B]">PARENTS</span>
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl font-semibold">{t.quote}</p>

          {/* Text + Arrows */}
          <div className="mt-4 flex items-center justify-center gap-6 text-[#EAD7FF]">
            <button
              onClick={prev}
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-lg hover:bg-white/10 transition"
            >
              ←
            </button>

            <p className="max-w-xl text-xs md:text-sm leading-relaxed">
              {t.message}
            </p>

            <button
              onClick={next}
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-lg hover:bg-white/10 transition"
            >
              →
            </button>
          </div>

          {/* Avatar + CTA */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
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

            <button className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#6C30A4] shadow-md hover:bg-[#F7F2FF] transition">
              Book Your Seat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
