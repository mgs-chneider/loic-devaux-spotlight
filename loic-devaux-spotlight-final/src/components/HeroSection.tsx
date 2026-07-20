import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroImage from "@/assets/hero-loic-devaux.jpg";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-24 px-6">
      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="frame-checker h-3 w-3 text-accent" aria-hidden="true" />
            Artist Spotlight
          </div>

          <h1 className="font-sans text-[15vw] font-black uppercase leading-[0.85] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Loïc
            <br />
            Devaux
          </h1>

          <p className="mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-muted-foreground sm:text-xl">
            Loïc Devaux's paintings transform pop culture, memory, and everyday
            design into graphic, emotionally charged universes — discover the
            Belgian artist reimagining modern life as stylized domestic myth.
          </p>

          <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Antwerp, Belgium <span className="text-secondary">—</span> Painter
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-accent px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Enquire about works
            </a>
            <a
              href="#about"
              className="border border-border px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Read the story
            </a>
          </div>
        </div>

        {/* Framed photo */}
        <div className="mx-auto w-full max-w-[340px] lg:max-w-none">
          <div className="frame-checker p-[6px] text-accent">
            <div className="bg-background p-2">
              <img
                src={heroImage}
                alt="Loïc Devaux photographed among his paintings"
                className="w-full border border-secondary/60 object-cover"
              />
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            Loïc Devaux, among his paintings
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
