import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a href="#hero" className="block">
          <h2 className="text-xl md:text-2xl font-sans tracking-[0.1em] text-foreground leading-tight">
            LD
          </h2>
          <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono font-medium">
            Loïc Devaux
          </p>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-mono"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-1"
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
