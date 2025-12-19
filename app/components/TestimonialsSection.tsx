"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    name: "Dr. Bindhu Ann Thomas",
    role: "Director, Kochi Business School",
    quote: "“My son came back as a completely different version of himself.”",
    message:
      "“From shy observers to engaged participants, TinkerChamps has had a profound impact. Students are now confident, well-rounded individuals with a thirst for knowledge..”",
    avatar: "/Assets/images/test1.png",
  },
  {
    id: 2,
    name: "Mr.Arjun Govind",
    role: "Asst. Professor, Amity Global Business School",
    quote: "“TinkerChamps helped my daughter discover her inner leader.”",
    message:
      "“Building a better tomorrow starts today! TinkerChamps cultivates critical thinking and social awareness, empowering students to tackle real-world challenges.”",
    avatar: "/Assets/images/test2.png",
  },
  {
    id: 3,
    name: "Roshan John",
    role: "Project Coordinator, PRISM Project",
    quote: "“My son came back as a completely different version of himself.”",
    message:
      "“Gone are the days of shy students hiding in the back. TinkerChamps@School fostered collaboration and communication, making my classroom a vibrant hub of social learning and growth.”",
    avatar: "/Assets/images/test3.png",
  },
  {
    id: 4,
    name: "Ramkamal Manoj",
    role: "Mentor, Catalyst for Student Start-ups",
    quote: "“TinkerChamps helped my daughter discover her inner leader.”",
    message:
      "“Fear undermines self-confidence. When parents and children doubt their abilities, they become hesitant to march towards their future skills development and, unsure if they can handle the situation or if they will succeed. What I have witnessed at TinkerChamps is that students have from hesitant learners to enthusiastic explorers, the program has truly transformed them and tinkered with their parents to rekindle their childhood dreams. They are now eager problem-solvers and innovative thinkers, ready to take on any challenge. This program is not to prepare students just for the classroom but for life.”",
    avatar: "/Assets/images/test4.png",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const t = testimonials[current];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
            setMuted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full bg-[#ffffff] py-16 px-4 overflow-hidden"
    >
      {/* Background shapes */}
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-80 rounded-t-full bg-[#ffffff]" />
      <div className="hidden md:flex pointer-events-none absolute -bottom-6 right-10 h-80 w-80 z-5">
        <svg viewBox="0 0 120 120" className="h-full w-full" fill="none">
          <path
            d="M20,60 C10,35 30,15 50,25 C60,30 65,40 70,50 C75,40 82,30 95,30 C115,30 120,55 105,75 C90,95 70,105 70,105 C70,105 50,95 35,80 C27,72 22,66 20,60 Z"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      {/* Purple card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto flex max-w-6xl flex-col gap-12 justify-between rounded-4xl bg-[#562190] px-6 py-10 text-white md:flex-row md:items-center md:px-12 md:py-12"
      >
        {/* LEFT */}
        <div className="flex w-full justify-center md:justify-start md:w-[40%]">
          <div className="relative rounded-[28px] bg-[#3D1076] p-3 shadow-xl">
            <div className="overflow-hidden rounded-3xl bg-black relative">
              <video
                ref={videoRef}
                src="/Assets/video/video2tc.mp4"
                loop
                playsInline
                muted={muted}
                className="h-[400px] w-[250px] object-cover md:h-[500px] md:w-80"
              />
              <button
                onClick={() => setMuted((p) => !p)}
                className="absolute bottom-4 right-4 bg-[#562190]/80 hover:bg-[#6C30A4] text-white rounded-full p-2 text-xs md:text-sm transition"
              >
                {muted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[60%] text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#FBC333]">
            Testimonials
          </p>

          <h2 className="mt-1 text-2xl md:text-4xl font-black leading-tight tracking-wider">
            VOICE OF ADVENTURE FROM
            <br />
            <span>
              KID&apos;S <span className="text-[#FFC52B]">PARENTS</span>
            </span>
          </h2>

          {/* Message */}
          <div className="mt-6 mb-12 flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="text-[#FFC52B] text-2xl font-extrabold"
            >
              ←
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.p
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mx-auto max-w-2xl text-sm leading-relaxed text-[#EAD7FF]"
              >
                {t.message}
              </motion.p>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="text-[#FFC52B] text-2xl font-extrabold"
            >
              →
            </motion.button>
          </div>

          {/* Avatar */}
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center gap-3 justify-center"
            >
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
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-[#F3D9FF] max-w-[180px]">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="flex justify-center md:justify-end">
            <Link
              href="https://wa.me/918075917297?text=I%20want%20to%20know%20more%20about%20Tinkerchamps"
              className="rounded-full bg-white px-6 py-3 text-xs mt-10 font-semibold uppercase tracking-wide text-[#6C30A4] shadow-md hover:bg-[#F7F2FF] transition z-10"
            >
              Book Your Seat Now
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
