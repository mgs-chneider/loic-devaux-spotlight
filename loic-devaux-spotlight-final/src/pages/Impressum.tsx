import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader overHero={false} />
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Legal
          </p>
          <h1 className="font-sans text-4xl md:text-5xl text-foreground mb-10">
            Imprint
          </h1>

          <div className="font-serif text-foreground leading-relaxed space-y-6">
            <p className="text-sm text-muted-foreground italic">
              Placeholder — replace the bracketed fields below with the
              actual details before this page goes live. Requirements follow
              §5 TMG (Germany); adjust if the responsible entity is based
              elsewhere.
            </p>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                Information according to §5 TMG
              </h2>
              <p>
                [Name / company name]
                <br />
                [Street and house number]
                <br />
                [Postcode and city]
                <br />
                [Country]
              </p>
            </div>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">Contact</h2>
              <p>
                Email: [email address]
                <br />
                Phone: [phone number, optional]
              </p>
            </div>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                Responsible for content (§55 (2) RStV)
              </h2>
              <p>[Name and address, if different from above]</p>
            </div>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                VAT ID
              </h2>
              <p>[VAT identification number, if applicable]</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Impressum;
