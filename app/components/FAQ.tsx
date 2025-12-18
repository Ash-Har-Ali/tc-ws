"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is TinkerChamps and what is its main objective?",
    answer:
      "TinkerChamps is a hands-on learning program designed to help students explore technology, creativity, and problem-solving through real-world projects. The main objective is to develop thinking skills, curiosity, and confidence, rather than focusing only on technical knowledge.",
  },
  {
    question: "Who can participate in TinkerChamps?",
    answer:
      "TinkerChamps is suitable for students from Grades 6 to 12. The program is structured into age-appropriate levels, ensuring beginners feel comfortable while advanced learners remain challenged.",
  },
  {
    question: "What skills will students gain from TinkerChamps?",
    answer:
      "Students develop logical and critical thinking, problem-solving and design thinking, creativity and an innovation mindset, collaboration and communication skills, and a basic understanding of technology, robotics, and AI concepts. These skills are valuable across academics and future careers.",
  },
  {
    question: "How is TinkerChamps different from regular learning sessions?",
    answer:
      "Unlike conventional programs that rely heavily on lectures and PPT-based sessions, TinkerChamps focuses on real-world, real-time learning. Students work on practical challenges, observe real-life problems, and build meaningful solutions that connect learning directly to life.",
  },
  {
    question: "What teaching methodology is followed in TinkerChamps?",
    answer:
      "TinkerChamps follows a learning-by-doing approach. Sessions are interactive and project-driven, where students explore concepts, build prototypes, test ideas, and learn from both success and failure under mentor guidance.",
  },
  {
    question:
      "Will students receive certification after completing TinkerChamps?",
    answer:
      "Yes. Students receive a Certificate of Participation or Completion that recognizes their learning journey, projects worked on, and skills developed during the program.",
  },
  {
    question: "Is TinkerChamps aligned with school academics?",
    answer:
      "Yes. The program complements school education by strengthening logic, application-based thinking, and conceptual clarity, which indirectly improves performance in subjects like science, mathematics, and computer studies.",
  },
  {
    question: "How does TinkerChamps benefit students in the long term?",
    answer:
      "TinkerChamps helps students build a future-ready mindset. Early exposure to problem-solving, technology, and self-reflection prepares students to make informed academic and career choices while boosting confidence and adaptability.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="mx-auto max-w-5xl">
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
