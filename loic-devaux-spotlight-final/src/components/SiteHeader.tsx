import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const SiteHeader = ({ overHero = true }: { overHero?: boolean }) => {
  const [scrolled, setScrolled] = useState(!overHero);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  // Close menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand – left */}
        <a href="/" className="block">
          <h2
            className={`text-xl md:text-2xl font-sans tracking-[0.1em] leading-tight transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-background drop-shadow"
            }`}
          >
            LD
          </h2>
          <p
            className={`text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-mono font-medium transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-background/80"
            }`}
          >
            Loïc Devaux
          </p>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-mono ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-background/85 hover:text-background"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-1 transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-background"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col items-center py-6 gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-mono"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
