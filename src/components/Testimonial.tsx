import kundeImg from "@/assets/kunde-testimonial.jpg";
import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="relative py-24 px-6 sm:px-10 overflow-hidden" style={{ backgroundColor: "hsl(212 72% 22%)" }}>

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "hsl(196 80% 42%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Label */}
        <div className="flex justify-center mb-12">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "hsl(196 80% 42% / 0.15)",
              color: "hsl(196 80% 65%)",
              border: "1px solid hsl(196 80% 42% / 0.3)",
            }}
          >
            <Star size={11} fill="currentColor" />
            Fornøyd kunde
          </span>
        </div>

        {/* Main card */}
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{
            backgroundColor: "hsl(212 72% 26%)",
            boxShadow: "0 32px 80px hsl(215 50% 6% / 0.5), 0 0 0 1px hsl(0 0% 100% / 0.06)",
          }}
        >
          {/* Image side */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src={kundeImg}
              alt="Fornøyd kunde overtar tilhenger fra K. Sørheim AS"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Gradient overlay from right on desktop */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, transparent 50%, hsl(212 72% 26%) 100%)",
              }}
            />
            {/* Gradient overlay from bottom on mobile */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background: "linear-gradient(to top, hsl(212 72% 26%) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="hsl(43 96% 56%)" color="hsl(43 96% 56%)" />
              ))}
            </div>

            {/* Quote icon */}
            <Quote
              size={36}
              className="mb-4 opacity-30"
              style={{ color: "hsl(196 80% 65%)" }}
            />

            {/* Quote text */}
            <blockquote
              className="text-xl sm:text-2xl font-semibold leading-snug mb-8"
              style={{ color: "hsl(0 0% 97%)" }}
            >
              «Helt smertefritt fra start til slutt. Karl var ærlig, imøtekommende og tok seg god tid. Jeg følte meg trygg hele veien – og gikk derfra med akkurat den tilhengeren jeg trengte.»
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{
                  backgroundColor: "hsl(196 80% 42% / 0.2)",
                  color: "hsl(196 80% 65%)",
                  border: "2px solid hsl(196 80% 42% / 0.4)",
                }}
              >
                M
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "hsl(0 0% 100%)" }}>Martin H.</p>
                <p className="text-xs" style={{ color: "hsl(0 0% 65%)" }}>Kjøpte Tysse bilhenger · Vestland</p>
              </div>
            </div>

            {/* Trust pills */}
            <div className="mt-8 pt-8 border-t flex flex-wrap gap-3" style={{ borderColor: "hsl(0 0% 100% / 0.1)" }}>
              {["Trygt og enkelt", "Rask levering", "Ærlig rådgivning"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "hsl(0 0% 100% / 0.07)",
                    color: "hsl(0 0% 80%)",
                    border: "1px solid hsl(0 0% 100% / 0.1)",
                  }}
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            { value: "100%", label: "Fornøyde kunder" },
            { value: "5★", label: "Gjennomsnittlig rating" },
            { value: "Alltid", label: "Personlig oppfølging" },
          ].map((stat) => (
            <div key={stat.label} className="py-5 rounded-2xl" style={{ backgroundColor: "hsl(0 0% 100% / 0.05)", border: "1px solid hsl(0 0% 100% / 0.07)" }}>
              <p className="text-2xl font-extrabold mb-1" style={{ color: "hsl(196 80% 65%)" }}>{stat.value}</p>
              <p className="text-xs font-medium" style={{ color: "hsl(0 0% 60%)" }}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
