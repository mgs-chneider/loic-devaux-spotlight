const SiteFooter = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
          © {new Date().getFullYear()} Loïc Devaux
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
