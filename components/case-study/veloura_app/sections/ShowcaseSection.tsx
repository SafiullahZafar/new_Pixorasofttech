"use client";

export default function ShowcaseSection() {
  return (
      <section className="hidden md:block w-full bg-[#f5f5f5] py-8 sm:py-12 2xl:py-20 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 2xl:gap-8 items-stretch w-full">
            {/* Left Big Card (col-span-7) */}
            <div className="lg:col-span-7 2xl:col-span-7 h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px] overflow-hidden w-full">
              <img
                src="/case_studies/salon_app/salon_showcase_app_19.png"
                alt="Veloura salon booking application showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Right Two Stacked Cards (col-span-5) */}
            <div className="lg:col-span-5 2xl:col-span-5 flex flex-col gap-4 sm:gap-6 2xl:gap-8 w-full h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px]">
              <div className="flex-1 h-1/2 overflow-hidden w-full">
                <img
                  src="/case_studies/salon_app/salon_showcase_app_06_updated.png"
                  alt="Veloura salon service and stylist selection screens"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
              <div className="flex-1 h-1/2 overflow-hidden w-full">
                <img
                  src="/case_studies/salon_app/salon_showcase_app_05_updtaed.webp"
                  alt="Veloura salon appointment screens"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

