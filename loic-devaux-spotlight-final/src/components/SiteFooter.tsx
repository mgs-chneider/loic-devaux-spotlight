const SiteFooter = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/60 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Loïc Devaux
        </p>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <a href="/impressum" className="hover:text-foreground transition-colors">
            Imprint
          </a>
          <span className="w-px h-3 bg-border" />
          <a href="/datenschutz" className="hover:text-foreground transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
