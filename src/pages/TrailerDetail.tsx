import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Weight,
  Package,
  Calendar,
  Camera,
  Shield,
  Zap,
  MapPin,
  RefreshCw,
  Eye,
} from "lucide-react";
import bockmannImg from "@/assets/bockmann-big-master.jpg";

interface KeySpec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface TrailerData {
  id: number;
  images: string[];
  title: string;
  year: number;
  price: string;
  badge: string;
  tagline: string;
  description: string;
  specs: KeySpec[];
  trust: string[];
  contactPhone: string;
  contactEmail: string;
}

const trailerData: Record<string, TrailerData> = {
  "1": {
    id: 1,
    images: [bockmannImg, bockmannImg, bockmannImg],
    title: "BÖCKMANN Big Master L",
    year: 2021,
    price: "kr 150 000",
    badge: "Hestetilhenger",
    tagline: "Dyregodkjent – romslig L-modell med WCF Plus fjæring og topp komfort.",
    description:
      "BÖCKMANN Big Master L er en romslig og solid hestetilhenger i L-utførelse som gir hesten maksimal plass og komfort under transport. Tilhengeren er utstyrt med WCF Plus fjæringssystem som absorberer støt og vibrasjoner effektivt, noe som bidrar til en trygg og skånsom reise for dyret.\n\nTilhengeren er dyregodkjent og har vært brukt regelmessig av én privat eier. Den fremstår i meget god stand, uten synlige rust- eller skadeskader av betydning. Innvendig er den ren og velholdt. Kamera er inkludert og fungerer perfekt.\n\nBesiktigelse kan gjøres etter avtale. Innbytte av gammel eller skadet tilhenger vurderes.",
    specs: [
      { icon: <Weight size={16} />, label: "Totalvekt", value: "2 400 kg" },
      { icon: <Package size={16} />, label: "Nyttelast", value: "1 233 kg" },
      { icon: <Calendar size={16} />, label: "Årsmodell", value: "2021" },
      { icon: <Shield size={16} />, label: "Dyregodkjent", value: "3 år igjen" },
      { icon: <Camera size={16} />, label: "Kamera", value: "Inkludert" },
      { icon: <Zap size={16} />, label: "Fjæring", value: "WCF Plus" },
    ],
    trust: ["Lokal selger – Vestlandet", "Besiktigelse mulig etter avtale", "Innbytte vurderes"],
    contactPhone: "+4700000000",
    contactEmail: "karl@sorheim.no",
  },
  "2": {
    id: 2,
    images: [bockmannImg, bockmannImg],
    title: "Eksempel Varetilhenger 3500",
    year: 2022,
    price: "kr 95 000",
    badge: "Varetilhenger",
    tagline: "Kraftig og pålitelig varetilhenger med høy nyttelast og god bunn.",
    description:
      "En svært allsidig varetilhenger med høy nyttelast, egnet for tunge løft og daglig bruk. Bunnen er i god stand og tilhengeren er klar til bruk.",
    specs: [
      { icon: <Weight size={16} />, label: "Totalvekt", value: "3 500 kg" },
      { icon: <Package size={16} />, label: "Nyttelast", value: "2 800 kg" },
      { icon: <Calendar size={16} />, label: "Årsmodell", value: "2022" },
      { icon: <Shield size={16} />, label: "Tilstand", value: "Meget god" },
    ],
    trust: ["Lokal selger – Vestlandet", "Besiktigelse mulig etter avtale", "Innbytte vurderes"],
    contactPhone: "+4700000000",
    contactEmail: "karl@sorheim.no",
  },
};

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative rounded-2xl overflow-hidden bg-muted" style={{ aspectRatio: "16/9" }}>
      <img
        src={images[current]}
        alt={`${title} – bilde ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Navigasjonsknapper */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Forrige bilde"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: "hsl(0 0% 100% / 0.85)",
              color: "hsl(var(--foreground))",
              boxShadow: "0 2px 8px hsl(0 0% 0% / 0.18)",
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Neste bilde"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: "hsl(0 0% 100% / 0.85)",
              color: "hsl(var(--foreground))",
              boxShadow: "0 2px 8px hsl(0 0% 0% / 0.18)",
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Punkter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Gå til bilde ${i + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor:
                    i === current ? "hsl(0 0% 100%)" : "hsl(0 0% 100% / 0.45)",
                  transform: i === current ? "scale(1.2)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Teller */}
          <span
            className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "hsl(0 0% 0% / 0.45)",
              color: "hsl(0 0% 100%)",
              backdropFilter: "blur(4px)",
            }}
          >
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
};

const TrailerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trailer = id ? trailerData[id] : undefined;

  if (!trailer) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground mb-2">Tilhenger ikke funnet</p>
          <Link to="/" className="text-primary underline">
            Tilbake til oversikt
          </Link>
        </div>
      </main>
    );
  }

  const mailtoLink = `mailto:${trailer.contactEmail}?subject=Forespørsel: ${encodeURIComponent(trailer.title)}&body=Hei Karl,%0A%0AJeg er interessert i ${encodeURIComponent(trailer.title)} (${trailer.year}).%0A%0AMvh`;

  return (
    <main className="min-h-screen" style={{ backgroundColor: "hsl(var(--background))" }}>
      {/* Topplinje / breadcrumb */}
      <div
        className="border-b"
        style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(0 0% 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex items-center gap-2 text-sm">
          <Link
            to="/#tilhengere"
            className="flex items-center gap-1.5 font-medium transition-colors duration-150"
            style={{ color: "hsl(var(--primary))" }}
          >
            <ChevronLeft size={16} />
            Alle tilhengere
          </Link>
          <span style={{ color: "hsl(var(--muted-foreground))" }}>/</span>
          <span style={{ color: "hsl(var(--muted-foreground))" }}>{trailer.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">
          {/* Venstre: Galleri + beskrivelse */}
          <div className="flex flex-col gap-8">
            <ImageCarousel images={trailer.images} title={trailer.title} />

            {/* Beskrivelse */}
            <section aria-label="Beskrivelse">
              <h2 className="text-lg font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
                Om tilhengeren
              </h2>
              <div className="flex flex-col gap-4">
                {trailer.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Tekniske spesifikasjoner */}
            <section aria-label="Tekniske spesifikasjoner">
              <h2 className="text-lg font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
                Tekniske detaljer
              </h2>
              <div
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                {trailer.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4"
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "hsl(0 0% 100%)" : "hsl(var(--secondary))",
                      borderBottom:
                        i < trailer.specs.length - 1
                          ? `1px solid hsl(var(--border))`
                          : undefined,
                    }}
                  >
                    <span style={{ color: "hsl(var(--accent))" }} className="shrink-0">
                      {spec.icon}
                    </span>
                    <span
                      className="flex-1 text-sm"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {spec.label}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Høyre: Sticky kjøpspanel */}
          <aside className="lg:sticky lg:top-8 flex flex-col gap-6">
            {/* Pris + tittel */}
            <div
              className="rounded-2xl border p-7 flex flex-col gap-5 bg-white"
              style={{ borderColor: "hsl(var(--border))", boxShadow: "0 4px 24px hsl(215 50% 6% / 0.08)" }}
            >
              {/* Badge */}
              <span
                className="self-start text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "hsl(var(--secondary))",
                  color: "hsl(var(--primary))",
                }}
              >
                {trailer.badge}
              </span>

              {/* Tittel */}
              <h1 className="text-2xl font-extrabold leading-snug" style={{ color: "hsl(var(--foreground))" }}>
                {trailer.title}
                <span className="block text-base font-semibold mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Årsmodell {trailer.year}
                </span>
              </h1>

              {/* Pris */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Pris
                </p>
                <p className="text-4xl font-extrabold" style={{ color: "hsl(var(--primary))" }}>
                  {trailer.price}
                </p>
              </div>

              {/* Tagline */}
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                {trailer.tagline}
              </p>

              {/* Separator */}
              <div className="border-t" style={{ borderColor: "hsl(var(--border))" }} />

              {/* CTA-knapper */}
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${trailer.contactPhone}`}
                  className="flex items-center justify-center gap-2.5 py-4 rounded-xl text-base font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(212 72% 30%)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "hsl(var(--primary))")}
                >
                  <Phone size={18} />
                  Ring Karl
                </a>
                <a
                  href={mailtoLink}
                  className="flex items-center justify-center gap-2.5 py-4 rounded-xl text-base font-semibold border transition-all duration-200"
                  style={{
                    backgroundColor: "hsl(0 0% 100%)",
                    color: "hsl(var(--primary))",
                    borderColor: "hsl(var(--primary))",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "hsl(var(--secondary))";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "hsl(0 0% 100%)";
                  }}
                >
                  <Mail size={18} />
                  Send e-post
                </a>
              </div>
            </div>

            {/* Tillitssignaler */}
            <div
              className="rounded-2xl border p-5 flex flex-col gap-3 bg-white"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
                Trygg handel
              </p>
              {[
                { icon: <MapPin size={15} />, text: trailer.trust[0] },
                { icon: <Eye size={15} />, text: trailer.trust[1] },
                { icon: <RefreshCw size={15} />, text: trailer.trust[2] },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span style={{ color: "hsl(var(--accent))" }} className="shrink-0">
                    {item.icon}
                  </span>
                  <span style={{ color: "hsl(var(--foreground))" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default TrailerDetail;
