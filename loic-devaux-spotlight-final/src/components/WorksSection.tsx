import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const captions = {
  home: { title: "Home Run", year: "2025", medium: "Oil stick on canvas", dimensions: "180 × 230 cm" },
  paradise: { title: "Another Day In Paradise", year: "2025", medium: "Oil stick on canvas", dimensions: "160 × 180 cm" },
  captain: { title: "Captain Fil & Sailor George Rescue a Castaway", year: "2025", medium: "Oil stick on canvas", dimensions: "230 × 350 cm" },
  plumlee: { title: "Plumlee Posse Study", year: "2026", medium: "Oil stick on canvas", dimensions: "200 × 230 cm" },
};

const Caption = ({ c }: { c: typeof captions.home }) => (
  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/90 via-foreground/15 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6">
    <p className="font-serif italic text-lg leading-snug text-background sm:text-xl">
      {c.title}
    </p>
    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background/80">
      {c.year} · {c.medium} · {c.dimensions}
    </p>
  </div>
);

const WorksSection = () => {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal(0.15);
  const { ref: gridRef, isVisible: gridVis } = useScrollReveal(0.1);

  return (
    <>
      <div className="checker-strip h-4 w-full text-mustard" aria-hidden="true" />

      <section id="works" className="py-28 md:py-40 px-6 bg-background overflow-hidden">
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

          <div
            ref={gridRef}
            className={`transition-all duration-1000 ease-out delay-200 ${
              gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Row 1 — anchor piece + two staggered pieces */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
              {/* Anchor — the only framed piece */}
              <div className="md:w-[54%]">
                <div className="frame-checker p-[6px] text-accent">
                  <div className="group relative overflow-hidden bg-background p-2">
                    <img
                      src={work1}
                      alt="Home Run, 2025, by Loïc Devaux"
                      className="aspect-[3/4] w-full object-cover"
                    />
                    <Caption c={captions.home} />
                  </div>
                </div>
              </div>

              {/* Two staggered, unframed pieces */}
              <div className="flex flex-col gap-8 md:w-[46%] md:gap-10 md:pt-14">
                <div className="group relative overflow-hidden shadow-lg shadow-foreground/10 md:-rotate-1">
                  <img
                    src={work2}
                    alt="Another Day In Paradise, 2025, by Loïc Devaux"
                    className="aspect-[16/11] w-full object-cover"
                  />
                  <Caption c={captions.paradise} />
                </div>
                <div className="group relative overflow-hidden shadow-lg shadow-foreground/10 md:ml-8 md:rotate-1">
                  <img
                    src={work3}
                    alt="Captain Fil & Sailor George Rescue a Castaway, 2025, by Loïc Devaux"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <Caption c={captions.captain} />
                </div>
              </div>
            </div>

            {/* Row 2 — wide closing piece, deliberately not full-width */}
            <div className="mt-8 md:mt-14 md:pr-[12%]">
              <div className="group relative overflow-hidden shadow-lg shadow-foreground/10">
                <img
                  src={work4}
                  alt="Plumlee Posse Study, 2026, by Loïc Devaux"
                  className="aspect-[21/9] w-full object-cover"
                />
                <Caption c={captions.plumlee} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
