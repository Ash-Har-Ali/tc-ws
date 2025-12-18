"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is TinkerChamps?",
    answer:
      "TinkerChamps is a life-design learning experience that helps students build confidence, creativity, leadership, and real-world problem-solving skills.",
  },
  {
    question: "Who can attend TinkerChamps?",
    answer:
      "The program is designed for school students who want to learn beyond textbooks and develop future-ready skills.",
  },
  {
    question: "How long is the program?",
    answer:
      "TinkerChamps typically runs for 3 days and 2 nights with structured activities, mentoring, and reflection sessions.",
  },
  {
    question: "Are food and accommodation included?",
    answer:
      "Yes. Accommodation, meals, and all learning materials are included for a safe and comfortable experience.",
  },
  {
    question: "How can I book a seat?",
    answer:
      "You can book a seat directly through the website using the “Book Your Seat Now” button.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center">
          {/* <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FBC333]">
            FAQs
          </p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#6C30A4] mb-1 tracking-wider mt-10">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-black">
            Everything you need to know about TinkerChamps
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#562190] transition-colors duration-300 ${
                    isOpen ? "bg-[#F1EAFD]" : "hover:bg-[#F1EAFD]"
                  }`}
                >
                  {faq.question}

                  {/* Icon */}
                  <span
                    className={`text-2xl font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer (PURE CSS animation) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div
                    className={`overflow-hidden text-sm font-light leading-relaxed text-black bg-[#F1EAFD] transition-all duration-300 ${
                      isOpen ? "px-6 pb-6 pt-" : "p-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
