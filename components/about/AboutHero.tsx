import BubbleText from "@/components/about/BubbleText";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 pb-20 pt-28 text-black sm:px-10 sm:pb-32 sm:pt-36 lg:px-16 lg:pb-40 lg:pt-44">
      <div className="mx-auto grid max-w-[2200px] grid-cols-1 items-start gap-10 md:grid-cols-12 lg:gap-16">
        <div className="min-w-0 flex flex-col justify-start pt-2 md:col-span-7 md:pt-20 lg:translate-y-[35px] lg:pt-28">
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Our Mission
          </span>
          <p className="max-w-4xl break-words text-2xl font-medium leading-[1.3] tracking-tight sm:text-3xl md:text-4xl lg:text-[2.55rem]">
            <BubbleText
              className="font-semibold text-black"
              text="PixoraSoftTech builds digital solutions that help businesses grow."
            />{" "}
            <BubbleText
              className="text-black/45"
              text="We create modern, responsive, result-driven websites and software that help brands stand out and succeed."
            />
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col justify-between">
          <h1 className="text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            About us
          </h1>
          <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45 sm:mt-8 sm:text-xs">
            PixoraSoftTech · Digital product engineering
          </p>
        </div>

      </div>
    </section>
  );
}
