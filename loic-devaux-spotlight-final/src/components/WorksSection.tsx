import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ImageOff } from "lucide-react";

const placeholders = [
  { label: "Selected Work — title pending", tone: "bg-accent" },
  { label: "Selected Work — title pending", tone: "bg-mustard" },
  { label: "Selected Work — title pending", tone: "bg-secondary" },
];

const PlaceholderTile = ({ tone, label, className }: { tone: string; label: string; className?: string }) => (
  <div className={`relative overflow-hidden ${tone} ${className ?? ""}`}>
    <div className="frame-checker absolute inset-0 opacity-10 text-background" aria-hidden="true" />
    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <ImageOff className="text-background/70" size={28} strokeWidth={1.5} />
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-background/80">
        {label}
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
          <p className="mt-4 font-serif italic text-muted-foreground max-w-lg mx-auto">
            Placeholders for now — swap these tiles for real photographs of the
            paintings once available.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 transition-all duration-1000 ease-out delay-200 ${
            gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <PlaceholderTile
            tone={placeholders[0].tone}
            label={placeholders[0].label}
            className="md:col-span-7 aspect-[3/4] md:aspect-auto"
          />
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
            <PlaceholderTile
              tone={placeholders[1].tone}
              label={placeholders[1].label}
              className="flex-1 aspect-[4/3] md:aspect-auto"
            />
            <PlaceholderTile
              tone={placeholders[2].tone}
              label={placeholders[2].label}
              className="flex-1 aspect-[4/3] md:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WorksSection;
