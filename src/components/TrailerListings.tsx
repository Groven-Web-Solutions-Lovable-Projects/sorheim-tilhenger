import { Weight, Package, Calendar, Camera, Shield, Zap, ChevronRight } from "lucide-react";
import bockmannImg from "@/assets/bockmann-big-master.jpg";

interface KeySpec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface Trailer {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  year: number;
  price: string;
  tagline: string;
  specs: KeySpec[];
  badge?: string;
}

const trailers: Trailer[] = [
  {
    id: 1,
    image: bockmannImg,
    imageAlt: "BÖCKMANN Big Master L hestetilhenger 2021",
    title: "BÖCKMANN Big Master L",
    year: 2021,
    price: "Ta kontakt for pris",
    tagline: "Dyregodkjent – romslig L-modell med WCF Plus fjæring og topp komfort.",
    badge: "Hestetilhenger",
    specs: [
      { icon: <Weight size={15} />, label: "Totalvekt", value: "2 400 kg" },
      { icon: <Package size={15} />, label: "Nyttelast", value: "1 233 kg" },
      { icon: <Calendar size={15} />, label: "Årsmodell", value: "2021" },
      { icon: <Shield size={15} />, label: "Dyregodkjent", value: "3 år" },
      { icon: <Camera size={15} />, label: "Kamera", value: "Inkludert" },
      { icon: <Zap size={15} />, label: "Fjæring", value: "WCF Plus" },
    ],
  },
  {
    id: 2,
    image: bockmannImg,
    imageAlt: "Eksempel varetilhenger",
    title: "Eksempel Varetilhenger 3500",
    year: 2022,
    price: "Ta kontakt for pris",
    tagline: "Kraftig og pålitelig varetilhenger med høy nyttelast og god bunn.",
    badge: "Varetilhenger",
    specs: [
      { icon: <Weight size={15} />, label: "Totalvekt", value: "3 500 kg" },
      { icon: <Package size={15} />, label: "Nyttelast", value: "2 800 kg" },
      { icon: <Calendar size={15} />, label: "Årsmodell", value: "2022" },
      { icon: <Shield size={15} />, label: "Tilstand", value: "Meget god" },
    ],
  },
];

const TrailerCard = ({ trailer }: { trailer: Trailer }) => (
  <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-border">
    {/* Bilde */}
    <div className="relative overflow-hidden aspect-[4/3] bg-muted">
      <img
        src={trailer.image}
        alt={trailer.imageAlt}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        loading="lazy"
      />
      {/* Badge */}
      {trailer.badge && (
        <span
          className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
          }}
        >
          {trailer.badge}
        </span>
      )}
      {/* Årsmodell-chip */}
      <span
        className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full"
        style={{
          backgroundColor: "hsl(0 0% 100% / 0.92)",
          color: "hsl(var(--foreground))",
          backdropFilter: "blur(4px)",
        }}
      >
        {trailer.year}
      </span>
    </div>

    {/* Innhold */}
    <div className="flex flex-col flex-1 p-6 gap-4">
      {/* Tittel + Pris */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug text-foreground">{trailer.title}</h3>
        <div
          className="shrink-0 text-right text-base font-bold whitespace-nowrap"
          style={{ color: "hsl(var(--primary))" }}
        >
          {trailer.price}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-muted-foreground leading-relaxed -mt-1">{trailer.tagline}</p>

      {/* Skillelinje */}
      <div className="border-t border-border" />

      {/* Nøkkelpunkter */}
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
        {trailer.specs.map((spec, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span style={{ color: "hsl(var(--accent))" }} className="shrink-0">
              {spec.icon}
            </span>
            <span className="text-muted-foreground">{spec.label}:</span>
            <span className="font-semibold text-foreground ml-auto">{spec.value}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group/btn"
        style={{
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(212 72% 30%)")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "hsl(var(--primary))")}
      >
        Les mer om denne tilhengeren
        <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
      </button>
    </div>
  </article>
);

const TrailerListings = () => (
  <section id="tilhengere" className="py-20 px-6 sm:px-10 bg-white">
    <div className="max-w-6xl mx-auto">
      {/* Overskrift */}
      <div className="mb-12 text-center">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
          style={{
            backgroundColor: "hsl(var(--secondary))",
            color: "hsl(var(--primary))",
          }}
        >
          Tilgjengelige tilhengere
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
          Finn din neste tilhenger
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Håndplukket utvalg – ta kontakt for pris og mer informasjon.
        </p>
      </div>

      {/* Kortgrid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trailers.map(t => (
          <TrailerCard key={t.id} trailer={t} />
        ))}
      </div>

      {/* Bunntekst */}
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Ser du ikke det du leter etter?{" "}
        <a
          href="tel:+4700000000"
          className="font-semibold underline underline-offset-2"
          style={{ color: "hsl(var(--primary))" }}
        >
          Ring Karl direkte
        </a>{" "}
        – han hjelper deg å finne riktig tilhenger.
      </p>
    </div>
  </section>
);

export default TrailerListings;
