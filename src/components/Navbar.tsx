import { Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Tilhengere", href: "tilhengere" },
  { label: "Innbytte", href: "innbytte" },
  { label: "Kundeomtaler", href: "kundeomtaler" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src={logoImg}
            alt="K. Sørheim AS"
            className="h-11 w-auto"
          />
        </a>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("kontakt");
          }}
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{ backgroundColor: "hsl(var(--primary))", color: "hsl(0 0% 100%)" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(212 72% 30%)")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "hsl(var(--primary))")}
        >
          <Phone size={15} />
          Ta kontakt
        </a>

      </div>
    </header>
  );
};

export default Navbar;
