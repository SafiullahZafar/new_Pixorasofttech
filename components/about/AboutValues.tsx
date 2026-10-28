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
    <section className="w-full bg-[#f5f5f5] px-4 py-12 font-sans sm:px-6 sm:py-16 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-sm sm:rounded-3xl sm:p-10 md:p-16 lg:p-20">
        <h2 className="mb-10 text-3xl font-medium leading-tight tracking-tight text-[#111] sm:mb-14 sm:text-4xl md:mb-20 md:text-[2.75rem]">
          Our values and <br className="hidden sm:inline" /> commitments
        </h2>
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {values.map((value) => (
            <div
              key={value.number}
              className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-8"
            >
              <div className="flex items-start gap-4 sm:gap-6 md:col-span-5">
                <span className="select-none pt-1 text-xs font-medium text-[#111] sm:text-sm">
                  {value.number}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-[#111] sm:text-2xl">
                  {value.title}
                </h3>
              </div>
              <p className="text-sm font-normal leading-relaxed text-[#4a4a4a] sm:text-base md:col-span-7">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
