// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F4F0FF] text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#4B1FA5] to-[#7C3AED]">
        {/* subtle background image */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <Image
            src="/assets/image/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* HERO CONTENT */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT TEXT */}
          <div className="space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Rewiring Young Minds
            </span>

            <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
              REWIRING
              <br />
              YOUNG MINDS FOR
              <br />A LIMITLESS <span className="text-yellow-400">FUTURE</span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-white/80">
              A life-design experience that transforms how children think, learn
              and create – through adventure, play, and future-ready skills.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-yellow-400 px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-purple-900 shadow-lg shadow-yellow-500/40">
                Book Your Seat
              </button>
              <button className="rounded-full border border-white/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-white/10">
                Check Your Seat
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE CLUSTER */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[280px] w-[320px]">
              {/* big arc / circle */}
              <div className="absolute left-3 top-2 h-[250px] w-[270px] -rotate-[8deg] rounded-[140px] border-10 border-yellow-400/90 bg-white shadow-2xl shadow-black/40 overflow-hidden">
                <Image
                  src="/assets/image/hero-main.jpg"
                  alt="Hero kids"
                  fill
                  className="object-cover"
                />
              </div>

              {/* small floating cards */}
              <div className="absolute right-1 top-5 h-20 w-20 rounded-3xl bg-white shadow-lg shadow-black/30 overflow-hidden">
                <Image
                  src="/assets/image/hero-small-1.jpg"
                  alt="Activity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 bottom-0 h-24 w-24 rounded-3xl bg-white shadow-lg shadow-black/30 overflow-hidden">
                <Image
                  src="/assets/image/hero-small-2.jpg"
                  alt="Activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CENTER WHAT-IS CARD */}
      <section id="about" className="-mt-10 pb-16 pt-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 lg:flex-row lg:px-0">
          {/* left text */}
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              MORE THAN A CAMP
            </p>
            <h2 className="text-[22px] font-extrabold leading-snug text-slate-900">
              TINKERCHAMPS IS MORE THAN A CAMP —{" "}
              <span className="text-purple-700">
                IT&apos;S A LIFE-DESIGN EXPERIENCE
              </span>{" "}
              THAT TRANSFORMS HOW STUDENTS THINK, LEARN, AND CREATE.
            </h2>
            <p className="text-xs leading-relaxed text-slate-600">
              Curated by educators, psychologists and adventure experts, every
              day is designed with intention – combining outdoor challenges,
              reflection circles and hands-on projects.
            </p>
          </div>

          {/* right card */}
          <div className="relative flex-1 flex justify-center">
            <div className="relative w-[260px] rounded-[26px] bg-[#111827] p-[3px] shadow-xl">
              <div className="relative overflow-hidden rounded-[22px] bg-black">
                <Image
                  src="/assets/image/about-main.jpg"
                  alt="What is TinkerChamps"
                  width={320}
                  height={380}
                  className="h-80w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-[10px] font-semibold text-yellow-300">
                    LIFE-DESIGN CAMP
                  </p>
                  <p className="text-lg font-bold text-white">
                    What is Tinkerchamps
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-5 -top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[11px] font-bold text-purple-700 shadow-lg">
              17+
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section id="camps" className="bg-[#6D28D9] py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6 px-4 text-center text-white lg:px-0">
          <div className="flex-1">
            <p className="text-3xl font-extrabold">17+</p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
              Camps in India
            </p>
          </div>
          <div className="hidden h-10 w-px bg-white/25 sm:block" />
          <div className="flex-1">
            <p className="text-3xl font-extrabold">13+</p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
              Camps in UAE
            </p>
          </div>
          <div className="hidden h-10 w-px bg-white/25 sm:block" />
          <div className="flex-1">
            <p className="text-3xl font-extrabold">500+</p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
              Kids Impacted
            </p>
          </div>
        </div>
      </section>

      {/* COLLAGE + EXPERIENCE CARDS */}
      <section id="programs" className="bg-[#F4F0FF] pb-20 pt-14">
        <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-0">
          {/* collage card */}
          <div className="flex justify-center">
            <div className="relative h-64 w-full max-w-xl rounded-[30px] bg-purple-600 p-[3px] shadow-md">
              <div className="grid h-full w-full grid-cols-2 gap-2 rounded-[26px] bg-white p-2">
                <Image
                  src="/assets/image/camp-1.jpg"
                  alt="Camp 1"
                  width={600}
                  height={600}
                  className="h-full w-full rounded-2xl object-cover"
                />
                <div className="grid grid-rows-2 gap-2">
                  <Image
                    src="/assets/image/camp-2.jpg"
                    alt="Camp 2"
                    width={600}
                    height={300}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                  <Image
                    src="/assets/image/camp-3.jpg"
                    alt="Camp 3"
                    width={600}
                    height={300}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 5 experience cards (as in screenshot) */}
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              "Experiential & Adventure Learning",
              "Know-Yourself & Mindset Training",
              "Outdoor Challenges & Team Tasks",
              "Leadership & Confidence Building",
              "Mentorship & Habit Creation",
            ].map((title) => (
              <div
                key={title}
                className="flex h-32 flex-col justify-end rounded-2xl bg-linear-to-b from-[#F97316] to-[#EA580C] p-3 text-[11px] font-semibold text-white shadow-md"
              >
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / PARENTS SECTION */}
      <section
        id="testimonials"
        className="bg-[#4B1FA5] pb-20 pt-16 text-white"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:px-0">
          {/* phone mockup */}
          <div className="flex flex-1 justify-center">
            <div className="relative h-[380px] w-[190px] rounded-[42px] bg-black/60 p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-4xl bg-black">
                <Image
                  src="/assets/image/parents-phone.jpg"
                  alt="Parents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* text */}
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Voice of adventure from kid&apos;s parents
            </p>
            <h2 className="text-2xl font-extrabold leading-snug">
              “My son came back as a completely different version of himself.”
            </h2>
            <p className="text-sm text-white/85">
              “He&apos;s more confident, takes initiative at home and talks
              about how he now understands teamwork and problem-solving.
              TinkerChamps gave him the kind of experience school never could.”
            </p>
            <div className="space-y-1 text-xs text-white/75">
              <p className="font-semibold text-white">Ms. Shafra M</p>
              <p>Parent of Grade 7 camper</p>
            </div>

            <button className="mt-4 rounded-full bg-yellow-400 px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-purple-900 shadow-lg shadow-yellow-500/40">
              Book Your Seat Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
