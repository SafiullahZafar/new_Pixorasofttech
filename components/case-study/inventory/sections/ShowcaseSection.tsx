"use client";

export default function ShowcaseSection() {
  return (
      <section className="hidden md:block w-full bg-[#f5f5f5] py-8 sm:py-12 2xl:py-20 px-4 sm:px-8 lg:px-12 2xl:px-20 min-[3000px]:px-28 select-none">
        <div className="w-full max-w-[3000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 2xl:gap-8 items-stretch w-full">
            {/* Left Big Card (col-span-7) */}
            <div className="lg:col-span-7 2xl:col-span-7 h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px] overflow-hidden border border-zinc-200/60 w-full">
              <img
                src="/case_studies/rms_soft/rms_hero_soft_01.png"
                alt="RMS software dashboard showcase"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Two Stacked Cards (col-span-5) */}
            <div className="lg:col-span-5 2xl:col-span-5 flex flex-col gap-4 sm:gap-6 2xl:gap-8 w-full h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px]">
              <div className="flex-1 h-1/2 overflow-hidden border border-zinc-200/60 w-full">
                <img
                  src="/case_studies/rms_soft/rms_work_soft_03_update.png"
                  alt="RMS multi-location inventory overview"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
              <div className="flex-1 h-1/2 overflow-hidden border border-zinc-200/60 w-full">
                <img
                  src="/case_studies/rms_soft/rms_work_soft_02_updated.png"
                  alt="RMS purchase order and stock management interface"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
