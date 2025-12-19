"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

function CountUp({ value, start }: { value: number; start: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (!start) return;

    const controls = animate(count, value, {
      duration: 1.8,
      ease: "easeOut",
    });

    return controls.stop;
  }, [start, value, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function CampsStats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-[#904BCF] py-16 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-16 px-6 md:flex-row">
        {/* Item 1 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          <h2 className="pointer-events-none select-none text-8xl font-black text-[#00000080] leading-none tracking-wider">
            <CountUp value={17} start={isInView} />
          </h2>
          <span className="absolute font-semibold text-white">
            Camps in India
          </span>
        </div>

        {/* Item 2 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          <h2 className="pointer-events-none select-none text-8xl font-black text-[#00000080] leading-none tracking-wider">
            <CountUp value={18} start={isInView} />
          </h2>
          <span className="absolute font-semibold text-white">
            Camps in UAE
          </span>
        </div>

        {/* Item 3 */}
        <div className="relative flex h-20 w-full items-center justify-center md:w-1/3">
          <h2 className="pointer-events-none select-none text-8xl font-black text-[#00000080] leading-none tracking-wider">
            <CountUp value={500} start={isInView} />+
          </h2>
          <span className="absolute font-semibold text-white">Students</span>
        </div>
      </div>
    </section>
  );
}
