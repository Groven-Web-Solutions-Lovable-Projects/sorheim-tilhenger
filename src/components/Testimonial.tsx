import kundeImg from "@/assets/kunde-testimonial.jpg";
import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section id="kundeomtaler" className="py-24 px-6 sm:px-10 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <div className="mb-14 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              backgroundColor: "hsl(var(--secondary))",
              color: "hsl(var(--primary))",
            }}
          >
            Kundeanmeldelse
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Hva kundene sier
          </h2>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-border shadow-md">

          {/* Full photo */}
          <div className="aspect-[4/3] lg:aspect-auto">
            <img
              src={kundeImg}
              alt="Fornøyd kunde overtar tilhenger fra K. Sørheim AS"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Quote side */}
          <div className="flex flex-col justify-center px-10 py-12 lg:px-14 bg-white">

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="hsl(43 96% 50%)" color="hsl(43 96% 50%)" />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="text-xl sm:text-2xl font-semibold leading-snug text-foreground mb-8"
              style={{ letterSpacing: "-0.01em" }}
            >
              «Helt smertefritt fra start til slutt. Karl tok seg god tid, var ærlig og ryddig å handle med. Jeg følte meg trygg hele veien.»
            </blockquote>

            {/* Divider */}
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "hsl(var(--primary))" }} />

            {/* Author */}
            <div>
              <p className="font-bold text-foreground">Martin H.</p>
              <p className="text-sm text-muted-foreground mt-0.5">Kjøpte Tysse bilhenger · Vestland</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
