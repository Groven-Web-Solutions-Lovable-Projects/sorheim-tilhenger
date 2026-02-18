import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "hsl(0 0% 100% / 0.97)" : "hsl(0 0% 100% / 0)",
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="K. Sørheim AS"
            className="h-10 w-auto"
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </a>

        {/* CTA */}
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{
            backgroundColor: scrolled ? "hsl(var(--primary))" : "hsl(0 0% 100% / 0.15)",
            color: "hsl(0 0% 100%)",
            border: scrolled ? "none" : "1px solid hsl(0 0% 100% / 0.4)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = scrolled
              ? "hsl(212 72% 30%)"
              : "hsl(0 0% 100% / 0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = scrolled
              ? "hsl(var(--primary))"
              : "hsl(0 0% 100% / 0.15)";
          }}
        >
          <Phone size={15} />
          Ta kontakt
        </a>

      </div>
    </header>
  );
};

export default Navbar;
