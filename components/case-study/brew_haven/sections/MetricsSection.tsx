"use client";

export default function MetricsSection() {
  return (
      <section className="w-full bg-[#f5f5f5] text-black py-12 sm:py-16 2xl:py-24 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
          <div className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 2xl:p-16 border border-zinc-800 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 border-b border-zinc-800 pb-8">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
                  Key Takeaways
                </p>
                <h3 className="text-2xl sm:text-4xl 2xl:text-5xl font-semibold tracking-tight text-white">
                  Measurable impact for Brew Haven
                </h3>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed">
                The redesigned platform unites authentic roastery storytelling with an intuitive subscription engine, turning casual visitors into repeating retail customers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <span className="text-3xl sm:text-5xl font-black text-amber-400 tracking-tight">
                  +40%
                </span>
                <span className="text-sm font-semibold text-white">Online Order Growth</span>
                <span className="text-xs text-zinc-400">Within 60 days of official launch</span>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <span className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                  3.2 min
                </span>
                <span className="text-sm font-semibold text-white">Average Session Duration</span>
                <span className="text-xs text-zinc-400">Deep engagement on bean selectors</span>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <span className="text-3xl sm:text-5xl font-black text-blue-400 tracking-tight">
                  98/100
                </span>
                <span className="text-sm font-semibold text-white">Google PageSpeed Score</span>
                <span className="text-xs text-zinc-400">Next.js 16 high-performance stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
