"use client";

export default function ShowcaseSection() {
  return (
      <section className="hidden md:block w-full bg-[#f5f5f5] py-8 sm:py-12 2xl:py-20 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 2xl:gap-8 items-stretch w-full">
            {/* Left Big Card (col-span-7) */}
            <div className="lg:col-span-7 2xl:col-span-7 h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px] overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
              <img
                src="/about_page/web_dev/Engineering Textile Solutions Laptop Mockup-1.png"
                alt="K.B. Exports digital trade platform showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Right Two Stacked Cards (col-span-5) */}
            <div className="lg:col-span-5 2xl:col-span-5 flex flex-col gap-4 sm:gap-6 2xl:gap-8 w-full h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px]">
              <div className="flex-1 h-1/2 overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
                <img
                  src="/case_studies/kb_exports_web/kb_exports_about_web_02_updated.webp"
                  alt="K.B. Exports product catalog"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
              <div className="flex-1 h-1/2 overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
                <img
                  src="/case_studies/kb_exports_web/kb_exports_about_web_03_updated.webp"
                  alt="K.B. Exports international trade platform"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
