const values = [
  {
    number: "01",
    title: "Clarity",
    description:
      "We start by understanding your goals and keeping decisions, scope, and progress clear throughout the work.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "We care about the details—from thoughtful interfaces to dependable architecture and maintainable code.",
  },
  {
    number: "03",
    title: "Partnership",
    description:
      "We work alongside your team, communicate openly, and build solutions that can grow with you over time.",
  },
];

export default function AboutValues() {
  return (
    <section className="w-full bg-transparent px-5 py-20 font-sans sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[2200px] rounded-[2rem] border border-black/10 bg-white/80 px-6 py-10 shadow-[0_24px_80px_-48px_rgba(10,37,64,0.28)] backdrop-blur-sm sm:px-10 sm:py-14 md:px-16 md:py-20 lg:rounded-[2.5rem] lg:px-24 lg:py-24">
        <div className="mb-12 max-w-3xl sm:mb-16 lg:mb-20">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black/45 sm:text-sm">
            What guides us
          </p>
          <h2 className="text-4xl font-medium leading-[1.05] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-7xl">
            Our values and
            <br className="hidden sm:block" /> commitments
          </h2>
        </div>
        <div>
          {values.map((value) => (
            <div
              key={value.number}
              className="grid grid-cols-1 items-start gap-5 py-8 sm:py-10 md:grid-cols-12 md:gap-10 lg:py-12"
            >
              <div className="flex items-baseline gap-5 sm:gap-8 md:col-span-5">
                <span className="select-none font-mono text-xs font-medium tracking-wider text-black/45 sm:text-sm">
                  {value.number}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-[#111] sm:text-3xl lg:text-4xl">
                  {value.title}
                </h3>
              </div>
              <p className="max-w-3xl text-base font-normal leading-relaxed text-[#4a4a4a] sm:text-lg sm:leading-[1.75] md:col-span-7 lg:text-xl">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
