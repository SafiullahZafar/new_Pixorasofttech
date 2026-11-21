"use client";

export default function ShowcaseSection() {
  return (
      <section className="hidden md:block w-full bg-[#f5f5f5] py-8 sm:py-12 2xl:py-20 px-4 sm:px-8 lg:px-12 2xl:px-20 min-[3000px]:px-28 select-none">
        <div className="w-full max-w-[3000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 2xl:gap-8 items-stretch w-full">
            {/* Left Big Card (col-span-7) */}
            <div className="lg:col-span-7 2xl:col-span-7 h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px] overflow-hidden w-full">
              <img
                src="/case_studies/messenger_soft/messenger_showcase_soft_19.png"
                alt="Messenger software dashboard showcase"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Right Two Stacked Cards (col-span-5) */}
            <div className="lg:col-span-5 2xl:col-span-5 flex flex-col gap-4 sm:gap-6 2xl:gap-8 w-full h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px]">
              <div className="flex-1 h-1/2 overflow-hidden w-full">
                <img
                  src="/case_studies/messenger_soft/messenger_showcase_soft_12.png"
                  alt="Multi-location inventory overview"
                  className="w-[120%] h-[120%] mx-auto my-auto object-contain object-center block"
                />
              </div>
              <div className="flex-1 h-1/2 overflow-hidden w-full">
                <img
                  src="/case_studies/messenger_soft/messenger_showcase_soft_13.png"
                  alt="Purchase order and stock management interface"
                  className="w-full h-full object-contain object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
