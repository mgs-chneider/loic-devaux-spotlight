import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const works = [
  {
    src: work1,
    title: "Home Run",
    year: "2025",
    medium: "Oil stick on canvas",
    dimensions: "180 × 230 cm",
  },
  {
    src: work2,
    title: "Another Day In Paradise",
    year: "2025",
    medium: "Oil stick on canvas",
    dimensions: "160 × 180 cm",
  },
  {
    src: work3,
    title: "Captain Fil & Sailor George Rescue a Castaway",
    year: "2025",
    medium: "Oil stick on canvas",
    dimensions: "230 × 350 cm",
  },
  {
    src: work4,
    title: "Plumlee Posse Study",
    year: "2026",
    medium: "Oil stick on canvas",
    dimensions: "200 × 230 cm",
  },
];

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

          <div
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 transition-all duration-1000 ease-out delay-200 ${
              gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {works.map((work) => (
              <div key={work.title} className="frame-checker p-[5px] text-accent">
                <div className="group relative overflow-hidden bg-background p-1.5">
                  <img
                    src={work.src}
                    alt={`${work.title}, ${work.year}, by Loïc Devaux`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-1.5 flex flex-col justify-end bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-serif italic text-lg leading-snug text-background sm:text-xl">
                      {work.title}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background/80">
                      {work.year} · {work.medium} · {work.dimensions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
