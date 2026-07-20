import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroImage from "@/assets/hero-loic-devaux.jpg";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="hero" className="relative min-h-screen flex items-end">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Loïc Devaux photographed among his paintings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 w-full px-6 pb-16 pt-40 sm:px-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-5 inline-flex items-center gap-3 bg-foreground/80 backdrop-blur-sm px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-background">
            <span className="frame-checker h-3 w-3 text-mustard" aria-hidden="true" />
            Artist Spotlight
          </div>

          <h1 className="font-sans text-[16vw] font-black uppercase leading-[0.82] tracking-tight text-background drop-shadow-lg sm:text-8xl lg:text-9xl">
            Loïc
            <br />
            Devaux
          </h1>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-background/90 sm:text-xl">
            Loïc Devaux's paintings transform pop culture, memory, and everyday
            design into graphic, emotionally charged universes — discover the
            Belgian artist reimagining modern life as stylized domestic myth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-accent px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Enquire about works
            </a>
            <a
              href="#works"
              className="border border-background/50 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-background transition-colors hover:border-background hover:bg-background/10"
            >
              See selected works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
