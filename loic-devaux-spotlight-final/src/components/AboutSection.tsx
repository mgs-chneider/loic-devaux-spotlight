import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tags = [
  "Basquiat",
  "Haring",
  "Warhol",
  "Mid-century design",
  "Checkered pattern",
  "Oil stick",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <>
      <div className="checker-strip h-4 w-full text-secondary" aria-hidden="true" />

      <section id="about" className="py-28 md:py-40 px-6 bg-card">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
            About the artist
          </p>
          <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
            Loïc Devaux paints from Antwerp, building his scenes out of the
            objects and images that already surround us — mid-century
            furniture, sports gear, packaging, patterned textiles — and
            reassembling them into worlds that feel both familiar and faintly
            mythic. Working mostly in oil stick, he returns again and again to
            checkered and plaid patterns, using repetition as a way of
            thinking about routine and domestic life. His paintings have been
            shown in Belgium, the United States, and South Korea.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-secondary/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
