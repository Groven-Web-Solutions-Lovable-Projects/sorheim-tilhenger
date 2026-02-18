import { Weight, Package, Calendar, Shield, Zap, Truck, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bockmannImg from "@/assets/bockmann-big-master.jpg";
import atecImg from "@/assets/atec-starline.jpg";

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
  priceNote?: string;
  tagline: string;
  specs: KeySpec[];
  badge?: string;
  clickable?: boolean;
}

const trailers: Trailer[] = [
  {
    id: 1,
    image: bockmannImg,
    imageAlt: "BÖCKMANN Big Master L hestetilhenger 2021",
    title: "BÖCKMANN Big Master L",
    year: 2021,
    price: "kr 150 000",
    tagline: "Dyregodkjent – romslig L-modell med WCF Plus fjæring og topp komfort.",
    badge: "Hestetilhenger",
    clickable: true,
    specs: [
      { icon: <Weight size={15} />, label: "Totalvekt", value: "2 400 kg" },
      { icon: <Package size={15} />, label: "Nyttelast", value: "1 233 kg" },
      { icon: <Calendar size={15} />, label: "Årsmodell", value: "2021" },
      { icon: <Shield size={15} />, label: "Dyregodkjent", value: "3 år" },
      { icon: <Star size={15} />, label: "Kamera", value: "Inkludert" },
      { icon: <Zap size={15} />, label: "Fjæring", value: "WCF Plus" },
    ],
  },
  {
    id: 2,
    image: atecImg,
    imageAlt: "ATEC Starline hestehenger med vognplass 2016",
    title: "ATEC Starline med vognplass",
    year: 2016,
    price: "kr 79 000",
    priceNote: "Inkl. omregistreringsavgift – pris kan diskuteres",
    tagline: "Sjelden og svært velholdt ATEC Starline med vognplass. Fremstår som ny, dyregodkjent for 3 nye år – høy komfort og stabil kjøring.",
    badge: "Hestetilhenger",
    clickable: false,
    specs: [
      { icon: <Shield size={15} />, label: "Dyregodkjent", value: "3 nye år" },
      { icon: <Package size={15} />, label: "Nyttelast", value: "1 400 kg" },
      { icon: <Calendar size={15} />, label: "Årsmodell", value: "2016" },
      { icon: <Truck size={15} />, label: "Vognplass", value: "Hurtigkobling" },
      { icon: <Weight size={15} />, label: "Hester", value: "2 plasser" },
      { icon: <Zap size={15} />, label: "Lagring", value: "Innendørs" },
    ],
  },
];

const TrailerCard = ({ trailer }: { trailer: Trailer }) => {
  const navigate = useNavigate();
  return (
  <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-border">
    {/* Bilde med gradient-overgang */}
    <div className="relative overflow-hidden aspect-[16/10] bg-muted">
      <img
        src={trailer.image}
        alt={trailer.imageAlt}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        loading="lazy"
      />
      {/* Gradient ned mot kortinnhold */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
      {/* Badge */}
      {trailer.badge && (
        <span
          className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
          }}
        >
          {trailer.badge}
        </span>
      )}
    </div>

    {/* Innhold */}
    <div className="flex flex-col flex-1 px-7 pt-6 pb-7 gap-4">

      {/* Tittel + årsmodell */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold leading-snug text-foreground">{trailer.title}</h3>
        <span
          className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-md mt-0.5"
          style={{
            backgroundColor: "hsl(var(--secondary))",
            color: "hsl(var(--primary))",
          }}
        >
          {trailer.year}
        </span>
      </div>

      {/* Pris med label */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">Pris</p>
        <p
          className="text-3xl font-extrabold tracking-tight"
          style={{ color: "hsl(var(--primary))" }}
        >
          {trailer.price}
        </p>
        {trailer.priceNote && (
          <p className="text-xs text-muted-foreground mt-1">{trailer.priceNote}</p>
        )}
      </div>

      {/* Tagline */}
      <p className="text-sm text-muted-foreground leading-relaxed">{trailer.tagline}</p>

      {/* Skillelinje */}
      <div className="border-t border-border" />

      {/* Spesifikasjoner – datablad-grid */}
      <div className="grid grid-cols-3 gap-3">
        {trailer.specs.map((spec, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-1.5 rounded-xl px-2 py-3 border border-border bg-white"
          >
            <span style={{ color: "hsl(var(--accent))" }}>{spec.icon}</span>
            <span className="text-sm font-bold text-foreground leading-tight">{spec.value}</span>
            <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium leading-tight">{spec.label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      {trailer.clickable ? (
        <button
          className="mt-auto w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 group/btn border-2"
          style={{
            borderColor: "hsl(var(--primary))",
            color: "hsl(var(--primary))",
            backgroundColor: "transparent",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "hsl(var(--primary))";
            e.currentTarget.style.color = "hsl(var(--primary-foreground))";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "hsl(var(--primary))";
          }}
          onClick={() => navigate(`/tilhenger/${trailer.id}`)}
        >
          Se mer informasjon
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      ) : (
        <div className="mt-auto space-y-2">
          <div
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold border-2 cursor-not-allowed opacity-40 select-none"
            style={{
              borderColor: "hsl(var(--border))",
              color: "hsl(var(--muted-foreground))",
              backgroundColor: "hsl(var(--muted))",
            }}
          >
            Se mer informasjon
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Detaljside ikke inkludert i denne demoen
          </p>
        </div>
      )}
    </div>
  </article>
  );
};

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
