import heroImg from "@/assets/hero-bg.jpg";
import karlImg from "@/assets/karl-sorheim.jpg";
import { Phone, ChevronRight } from "lucide-react";

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
      />

      {/* Mørk overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Innhold */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        {/* Merkelapp / badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
          style={{
            backgroundColor: "hsl(212 72% 22% / 0.75)",
            color: "hsl(0 0% 100%)",
            border: "1px solid hsl(0 0% 100% / 0.2)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Tilhengere – hest, vare og fritid
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-3xl"
          style={{ color: "hsl(0 0% 100%)", textShadow: "0 2px 16px hsl(215 50% 6% / 0.6)" }}
        >
          Tilhengere for hest, vare og fritid –{" "}
          <span style={{ color: "hsl(196 80% 60%)" }}>kjøp enkelt</span>{" "}
          hos K. Sørheim AS
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl leading-relaxed mb-4 max-w-2xl font-normal"
          style={{ color: "hsl(0 0% 90%)" }}
        >
          Finn din neste tilhenger blant et håndplukket utvalg. Vi hjelper deg å velge riktig – og ordner innbytte hvis du har en gammel eller skadet tilhenger.
        </p>

        {/* Tilleggslinje */}
        <p
          className="text-base sm:text-lg mb-10 font-medium"
          style={{ color: "hsl(196 80% 72%)" }}
        >
          Du kan kjøpe uten innbytte – innbytte er valgfritt.
        </p>

        {/* CTA-knapper */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#tilhengere" className="btn-primary-hero">
            Utforsk tilhengere
            <ChevronRight size={18} />
          </a>
          <a href="tel:+4700000000" className="btn-secondary-hero">
            <Phone size={18} />
            Snakk med Karl
          </a>
        </div>

        {/* Karl – bilde og tittel */}
        <div className="mt-10 flex items-center gap-4">
          <img
            src={karlImg}
            alt="Karl – Daglig Leder, K. Sørheim AS"
            className="w-16 h-16 rounded-full object-cover object-top border-2"
            style={{ borderColor: "hsl(0 0% 100% / 0.3)" }}
          />
          <div>
            <p className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>Karl</p>
            <p className="text-xs" style={{ color: "hsl(0 0% 75%)" }}>Daglig Leder – K. Sørheim AS</p>
          </div>
        </div>

        {/* Tillitssignaler */}
        <div
          className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium"
          style={{ color: "hsl(0 0% 75%)" }}
        >
          <span>✓ Personlig rådgivning</span>
          <span>✓ Innbytte etter avtale</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
