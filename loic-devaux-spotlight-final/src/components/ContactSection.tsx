import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <>
      <div className="checker-strip h-4 w-full text-accent" aria-hidden="true" />

      <section id="contact" className="py-20 md:py-28 px-6 bg-secondary text-secondary-foreground">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-mustard mb-3">
              Represented inquiries
            </p>
            <a
              href="mailto:hello@loic-devaux.art"
              className="block font-sans text-3xl uppercase tracking-tight text-secondary-foreground hover:text-mustard transition-colors sm:text-4xl"
            >
              hello@loic-devaux.art
            </a>
            <a
              href="https://www.instagram.com/loic_devaux/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-mono text-xs uppercase tracking-[0.2em] text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
            >
              @loic_devaux ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
