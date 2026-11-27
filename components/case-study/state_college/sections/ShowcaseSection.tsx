"use client";

export default function ShowcaseSection() {
  return (
    <section className="hidden md:block w-full bg-[#f5f5f5] py-8 sm:py-12 2xl:py-20 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 2xl:gap-8 items-stretch w-full">
          <div className="lg:col-span-7 2xl:col-span-7 h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px] overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
            <img
              src="/case_studies/state_college_web/state_college_work_web_01_updated.png"
              alt="State College Digital Campus Showcase"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="lg:col-span-5 2xl:col-span-5 flex flex-col gap-4 sm:gap-6 2xl:gap-8 w-full h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px]">
            <div className="flex-1 h-1/2 overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
              <img
                src="/case_studies/state_college_web/state_college_work_web_01_updated.png"
                alt="State College Digital Campus Interface Detail"
                className="w-full h-full object-cover object-center block"
              />
            </div>
            <div className="flex-1 h-1/2 overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
              <img
                src="/case_studies/state_college_web/state_college_work_web_03.png"
                alt="State College Digital Campus Operational Workflow"
                className="w-full h-full object-cover object-center block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
