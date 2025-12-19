"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "What is TinkerChamps and what is its main objective?",
    answer: (
      <>
        <p>
          TinkerChamps is a hands-on learning program designed to help students
          explore technology, creativity, and problem-solving through real -
          world projects.
        </p>
        <p className="mt-1">
          The objective is to develop thinking skills, curiosity, and
          confidence, not just technical knowledge.
        </p>
      </>
    ),
  },
  {
    question: "Who can participate in TinkerChamps?",
    answer: (
      <>
        <p>TinkerChamps is suitable for students from Grades 6 to 12.</p>
        <p className="mt-1">
          The program is designed in age appropriate levels, ensuring beginners
          feel comfortable while advanced learners stay challenged.
        </p>
      </>
    ),
  },
  {
    question: "What skills will students gain from TinkerChamps?",
    answer: (
      <>
        <p>Students develop:</p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>Logical and critical thinking</li>
          <li>Problem-solving and design thinking</li>
          <li>Creativity and innovation mindset</li>
          <li>Collaboration and communication skills</li>
          <li>Basic understanding of technology, robotics, and AI concepts</li>
        </ul>
        <p className="mt-1">
          These skills are useful across academics and future careers, not
          limited to engineering.
        </p>
      </>
    ),
  },
  {
    question: "How is TinkerChamps different from regular learning sessions?",
    answer: (
      <>
        <p>
          Unlike conventional programs that rely heavily on PPTs, lectures, and
          one-way sessions, TinkerChamps is built around real-world, real-time
          change-making.
        </p>
        <p className="mt-1">
          Students engage with practical challenges, observe problems around
          them, and work on solutions that have meaning and relevance, helping
          them see how learning connects directly to life.
        </p>
      </>
    ),
  },
  {
    question: "What is the teaching methodology followed in TinkerChamps?",
    answer: (
      <>
        <p>TinkerChamps follows a learning-by-doing approach.</p>
        <p className="mt-1">
          Sessions are interactive and project-driven, where students explore
          concepts, build prototypes, test ideas, and learn from both success
          and failure under mentor guidance.
        </p>
      </>
    ),
  },
  {
    question:
      "Will students receive any certification after completing TinkerChamps?",
    answer: (
      <p>
        Yes. Students receive a Certificate of Participation / Completion,
        recognizing their learning journey, projects worked on, and skills
        developed during the program.
      </p>
    ),
  },
  {
    question: "Is TinkerChamps aligned with school academics?",
    answer: (
      <>
        <p>
          Yes. The program complements school learning by strengthening logic,
          application-based thinking, and conceptual clarity.
        </p>
        <p className="mt-1">
          This indirectly improves performance in subjects like science,
          mathematics, and computer studies.
        </p>
      </>
    ),
  },
  {
    question: "How does TinkerChamps benefit students in the long term?",
    answer: (
      <>
        <p>TinkerChamps helps students build a future-ready mindset.</p>
        <p className="mt-1">
          Early exposure to problem-solving, technology, and self-reflection
          prepares them to make informed academic and career choices while
          boosting confidence and adaptability.
        </p>
      </>
    ),
  },
  {
    question:
      "Are prior technical or coding skills required to join TinkerChamps?",
    answer: (
      <p>
        No. TinkerChamps is designed for beginners as well as advanced learners.
        Students are guided step-by-step, and no prior technical knowledge is
        required to participate.
      </p>
    ),
  },
  {
    question: "How are students guided and supported during the program?",
    answer: (
      <p>
        Students are guided by trained mentors who facilitate activities,
        encourage exploration, and support learning through continuous feedback
        and reflection throughout the program.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6C30A4] mb-1 tracking-wider mt-10">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-black">
            Everything you need to know about TinkerChamps
          </p>
        </div>

        {/* FAQ List (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="h-fit rounded-xl border border-gray-200 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#562190] transition-colors duration-300 ${
                    isOpen ? "bg-[#F1EAFD]" : "hover:bg-[#F1EAFD]"
                  }`}
                >
                  {faq.question}
                  <span
                    className={`text-2xl font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div
                    className={`overflow-hidden text-sm leading-relaxed text-black bg-[#F1EAFD] transition-all duration-300 ${
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
