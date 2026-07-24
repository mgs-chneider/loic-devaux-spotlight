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

const WorkImage = ({ src, alt, caption }: { src: string; alt: string; caption: Caption }) => (
  <div className="group relative overflow-hidden shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)]">
    <img src={src} alt={alt} className="block w-full h-auto" />
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/90 via-foreground/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6">
      <p className="font-serif italic text-lg leading-snug text-background sm:text-xl">
        {caption.title}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background/80">
        {caption.year} · {caption.medium} · {caption.dimensions}
      </p>
    </div>
  </div>
);

const WorksSection = () => {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal(0.15);
  const { ref: gridRef, isVisible: gridVis } = useScrollReveal(0.1);

  return (
    <>
      <div className="checker-strip h-4 w-full text-mustard" aria-hidden="true" />

      <section id="works" className="py-28 md:py-40 px-6 bg-background">
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

          {/* 1 – 2 – 1 */}
          <div
            ref={gridRef}
            className={`mx-auto flex max-w-[1100px] flex-col gap-8 md:gap-12 transition-all duration-1000 ease-out delay-200 ${
              gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <WorkImage src={work1} alt="Home Run, 2025, by Loïc Devaux" caption={captions.home} />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
              <WorkImage
                src={work2}
                alt="Another Day In Paradise, 2025, by Loïc Devaux"
                caption={captions.paradise}
              />
              <WorkImage
                src={work3}
                alt="Captain Fil & Sailor George Rescue a Castaway, 2025, by Loïc Devaux"
                caption={captions.captain}
              />
            </div>

            <WorkImage
              src={work4}
              alt="Plumlee Posse Study, 2026, by Loïc Devaux"
              caption={captions.plumlee}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
