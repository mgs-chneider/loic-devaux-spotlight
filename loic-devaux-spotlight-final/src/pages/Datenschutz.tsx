import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader overHero={false} />
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Legal
          </p>
          <h1 className="font-sans text-4xl md:text-5xl text-foreground mb-10">
            Privacy Policy
          </h1>

          <div className="font-serif text-foreground leading-relaxed space-y-6">
            <p className="text-sm text-muted-foreground italic">
              Placeholder — this is a structural skeleton only, not legal
              advice. Have it reviewed and completed by someone qualified in
              data protection law (e.g. GDPR) before publishing, and adjust
              the sections below to match what this site actually collects
              (analytics, forms, cookies, hosting provider, etc.).
            </p>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                1. Controller
              </h2>
              <p>
                [Name / company name]
                <br />
                [Street and house number]
                <br />
                [Postcode and city]
                <br />
                Email: [email address]
              </p>
            </div>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                2. Hosting
              </h2>
              <p>
                This site is hosted by [hosting provider, e.g. Vercel Inc.].
                [Describe what server log data is collected and for how
                long.]
              </p>
            </div>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                3. Cookies &amp; analytics
              </h2>
              <p>
                [State whether cookies, analytics, or third-party embeds
                (e.g. font providers, tracking pixels) are used, and name
                each service.]
              </p>
            </div>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                4. Contact forms &amp; email
              </h2>
              <p>
                [Describe what happens to data submitted via email or any
                contact form, how long it is kept, and the legal basis.]
              </p>
            </div>

            <div>
              <h2 className="font-sans text-lg text-foreground mb-2">
                5. Your rights
              </h2>
              <p>
                Under the GDPR you have the right to access, correct, or
                delete your personal data, and to object to or restrict its
                processing. Contact [email address] to exercise these
                rights.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Datenschutz;
