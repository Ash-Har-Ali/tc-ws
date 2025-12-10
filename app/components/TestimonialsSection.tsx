"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  quote: string;
  video: string;
  avatar: string;
  thumbs: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Mrs. Shahana F",
    role: "Parent of Adiyan",
    message:
      "“I sent Adiyan to TinkerChamps hoping he would learn something new, but what he returned with shocked us. He now takes initiative, solves problems calmly, and communicates with so much more confidence. Three days changed what three years of school couldn’t.”",
    quote: "“My son came back as a completely different version of himself.”",
    video: "/videos/testimonial1.mp4",
    avatar: "/images/parent1.jpg",
    thumbs: ["/images/thumb1a.jpg", "/images/thumb1b.jpg"],
  },
  {
    name: "Mr. Ramesh Nair",
    role: "Parent of Anaya",
    message:
      "“Anaya loved every part of TinkerChamps. The hands-on sessions and fun challenges helped her become more curious and creative. She came home more confident than ever!”",
    quote: "“TinkerChamps brought out her confidence!”",
    video: "/videos/testimonial2.mp4",
    avatar: "/images/parent2.jpg",
    thumbs: ["/images/thumb2a.jpg", "/images/thumb2b.jpg"],
  },
  // Add more testimonials here...
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const t = testimonials[current];

  return (
    <section className="relative w-full bg-[#F3E8FF] py-16 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-72 rounded-t-full bg-[#E4CFFF]" />
      <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-[60px] border-2 border-dashed border-white/70" />

      {/* Purple Card */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 rounded-[32px] bg-[#6C30A4] px-6 py-10 text-white md:flex-row md:items-center md:px-12 md:py-12">
        {/* LEFT: Video */}
        <div className="flex w-full justify-center md:w-[40%]">
          <div className="relative rounded-[26px] bg-[#5A2590] p-3 shadow-xl">
            <div className="overflow-hidden rounded-[22px] bg-black">
              <video
                src={t.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-[340px] w-[220px] object-cover md:h-[380px] md:w-[250px]"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 flex gap-2">
              {t.thumbs.map((thumb, i) => (
                <div
                  key={i}
                  className="h-16 flex-1 overflow-hidden rounded-[14px]"
                >
                  <Image
                    src={thumb}
                    alt="Parent thumbnail"
                    width={120}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F8D8FF]">
            Testimonials
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-black leading-tight tracking-wide text-white">
            VOICE OF ADVENTURE FROM{" "}
            <span className="block md:inline">
              KID&apos;S <span className="text-[#FFC52B]">PARENTS</span>
            </span>
          </h2>

          <p className="mt-6 text-lg font-semibold">{t.quote}</p>

          <div className="mt-3 flex items-center justify-center gap-6 text-sm text-[#EAD7FF] md:justify-start">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-lg hover:bg-white/10 transition"
            >
              ←
            </button>

            <p className="max-w-xl text-xs md:text-sm leading-relaxed">
              {t.message}
            </p>

            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-lg hover:bg-white/10 transition"
            >
              →
            </button>
          </div>

          {/* Author + CTA */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
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
