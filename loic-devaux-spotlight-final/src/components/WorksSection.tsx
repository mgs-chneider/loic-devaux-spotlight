import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

type Caption = { title: string; year: string; medium: string; dimensions: string };

const captions: Record<"home" | "paradise" | "captain" | "plumlee", Caption> = {
  home: { title: "Home Run", year: "2025", medium: "Oil stick on canvas", dimensions: "180 × 230 cm" },
  paradise: { title: "Another Day In Paradise", year: "2025", medium: "Oil stick on canvas", dimensions: "160 × 180 cm" },
  captain: { title: "Captain Fil & Sailor George Rescue a Castaway", year: "2025", medium: "Oil stick on canvas", dimensions: "230 × 350 cm" },
  plumlee: { title: "Plumlee Posse Study", year: "2026", medium: "Oil stick on canvas", dimensions: "200 × 230 cm" },
};

const WorkImage = ({
  src,
  alt,
  caption,
  widthClass,
  alignClass,
}: {
  src: string;
  alt: string;
  caption: Caption;
  widthClass: string;
  alignClass: string;
}) => (
  <div className={`${widthClass} ${alignClass}`}>
    <div className="group relative overflow-hidden shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]">
      <img src={src} alt={alt} className="block w-full h-auto" />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/90 from-0% via-foreground/20 via-20% to-transparent to-45% p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6">
        <p className="font-serif italic text-lg leading-snug text-background sm:text-xl">
          {caption.title}
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background/80">
          {caption.year} · {caption.medium} · {caption.dimensions}
        </p>
      </div>
    </div>
  </div>
);

const WorksSection = () => {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal(0.15);
  const { ref: gridRef, isVisible: gridVis } = useScrollReveal(0.1);

  return (
    <>
      <div className="checker-strip h-4 w-full text-mustard" aria-hidden="true" />

      <section id="works" className="py-32 md:py-48 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
              A glimpse
            </p>
            <h2 className="font-sans text-4xl md:text-5xl text-foreground">Selected Works</h2>
          </div>

          {/* All widths are fixed (rem-based), not percentages of a parent —
              so proportions stay true and comparable across the whole set,
              no matter how wide each row's container is.
              Reference: Captain Fil's 350 cm real width = 48rem = 100%. */}
          <div
            ref={gridRef}
            className={`flex flex-col items-center gap-16 md:gap-24 transition-all duration-1000 ease-out delay-200 ${
              gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <WorkImage
              src={work3}
              alt="Captain Fil & Sailor George Rescue a Castaway, 2025, by Loïc Devaux"
              caption={captions.captain}
              widthClass="w-full max-w-[48rem]"
              alignClass=""
            />

            <WorkImage
              src={work1}
              alt="Home Run, 2025, by Loïc Devaux"
              caption={captions.home}
              widthClass="w-full max-w-[32rem]"
              alignClass=""
            />

            {/* Paradise + Plumlee: sizes true to their real canvas widths
                (180 cm / 230 cm), vertically centered against each other —
                the size difference reads as tension rather than a rail. */}
            <div className="flex w-full max-w-[59rem] flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center md:gap-10">
              <WorkImage
                src={work2}
                alt="Another Day In Paradise, 2025, by Loïc Devaux"
                caption={captions.paradise}
                widthClass="w-full max-w-[24.5rem] lg:w-[24.5rem] lg:shrink-0"
                alignClass=""
              />
              <WorkImage
                src={work4}
                alt="Plumlee Posse Study, 2026, by Loïc Devaux"
                caption={captions.plumlee}
                widthClass="w-full max-w-[32rem] lg:w-[32rem] lg:shrink-0"
                alignClass=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
