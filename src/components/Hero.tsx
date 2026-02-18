import heroImg from "@/assets/hero-bg.jpg";
import karlImg from "@/assets/karl-sorheim.jpg";
import { Phone, ChevronRight } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="K. Sørheim AS – Tilhengere"
    >
      {/* Bakgrunnsbilde */}
      <img
        src={heroImg}
        alt="Tilhengere på norsk vei med fjell i bakgrunnen"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        style={{ animation: "hero-zoom 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both" }}
      />

      {/* Mørk overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Innhold */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl"
          style={{
            color: "hsl(0 0% 100%)",
            textShadow: "0 2px 16px hsl(215 50% 6% / 0.6)",
            animation: "hero-fade-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both",
          }}
        >
          Tilhengere for hest, vare og fritid –{" "}
          <span style={{ color: "hsl(196 80% 60%)" }}>kjøp enkelt</span>{" "}
          hos K. Sørheim AS
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-normal"
          style={{
            color: "hsl(0 0% 90%)",
            animation: "hero-fade-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.45s both",
          }}
        >
          Finn din neste tilhenger blant et håndplukket utvalg. Vi hjelper deg å velge riktig – og ordner innbytte hvis du har en gammel eller skadet tilhenger.
        </p>

        {/* CTA-knapper */}
        <div
          className="flex flex-col sm:flex-row gap-3"
          style={{ animation: "hero-fade-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.65s both" }}
        >
          <button
            onClick={() => scrollTo("tilhengere")}
            className="btn-primary-hero justify-center sm:justify-start"
          >
            Utforsk tilhengere
            <ChevronRight size={18} />
          </button>
          <button
            onClick={() => scrollTo("kontakt")}
            className="btn-secondary-hero justify-center sm:justify-start"
          >
            <Phone size={18} />
            Snakk med Karl
          </button>
        </div>

        {/* Karl – bilde og tittel */}
        <div
          className="mt-10 flex items-center gap-4"
          style={{ animation: "hero-fade-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.85s both" }}
        >
          <img
            src={karlImg}
            alt="Karl – Daglig Leder, K. Sørheim AS"
            className="w-16 h-16 rounded-full object-cover object-top border-2"
            style={{ borderColor: "hsl(0 0% 100% / 0.3)" }}
          />
          <div>
            <p className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>Karl Sørheim</p>
            <p className="text-xs" style={{ color: "hsl(0 0% 75%)" }}>Daglig Leder – K. Sørheim AS</p>
          </div>
        </div>

        {/* Tillitssignaler */}
        <div
          className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium"
          style={{
            color: "hsl(0 0% 75%)",
            animation: "hero-fade-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both",
          }}
        >
          <span>✓ Personlig rådgivning</span>
          <span>✓ Innbytte etter avtale</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
