import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Package,
  Camera,
  Shield,
  Zap,
  MapPin,
  RefreshCw,
  Eye,
  Truck,
  Video,
  FileText,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";
import bockmannImg from "@/assets/bockmann-big-master.jpg";
import bockmannFront from "@/assets/bockmann-front.jpg";
import bockmannRear from "@/assets/bockmann-rear.jpg";
import bockmannInterior from "@/assets/bockmann-interior.jpg";
import karlImg from "@/assets/karl-sorheim.jpg";
import trailerHeroImg from "@/assets/trailer-hero.jpg";
import trailerHeroMobileImg from "@/assets/trailer-hero-mobile.jpg";

// ── Data ──────────────────────────────────────────────────────────────────────

interface SpecRow {
  label: string;
  value: string;
}

interface TrailerData {
  id: number;
  images: string[];
  title: string;
  subtitle: string;
  price: string;
  badge: string;
  intro: string;
  keySpecs: SpecRow[];
  contactPhone: string;
  contactEmail: string;
  sellerName: string;
}

const trailerData: Record<string, TrailerData> = {
  "1": {
    id: 1,
    images: [bockmannImg, bockmannFront, bockmannRear, bockmannInterior],
    title: "BÖCKMANN Big Master L",
    subtitle: "2021 · L-utgave",
    price: "kr 150 000",
    badge: "Hestetilhenger",
    intro:
      "Som ny L-utgave med WCF Plus understell, kamera og svært romslig innvendig plass. En henger som bør sees og prøves – svært få L-utgaver finnes på markedet.",
    keySpecs: [
      { label: "Totalvekt", value: "2 400 kg" },
      { label: "Egenvekt", value: "1 167 kg" },
      { label: "Nyttelast", value: "1 233 kg" },
      { label: "Årsmodell", value: "2021" },
      { label: "Innv. lengde", value: "390 cm" },
      { label: "Gulv", value: "Aluminium" },
      { label: "Vegger", value: "Glassfiber" },
      { label: "Dyregodkj.", value: "3 nye år" },
    ],
    contactPhone: "+4700000000",
    contactEmail: "karl@sorheim.no",
    sellerName: "Karl",
  },
  "2": {
    id: 2,
    images: [bockmannImg, bockmannImg],
    title: "Eksempel Varetilhenger 3500",
    subtitle: "2022",
    price: "kr 95 000",
    badge: "Varetilhenger",
    intro:
      "Kraftig og allsidig varetilhenger med høy nyttelast. Klar til bruk og godt vedlikeholdt av én privat eier.",
    keySpecs: [
      { label: "Totalvekt", value: "3 500 kg" },
      { label: "Nyttelast", value: "2 800 kg" },
      { label: "Årsmodell", value: "2022" },
      { label: "Tilstand", value: "Meget god" },
    ],
    contactPhone: "+4700000000",
    contactEmail: "karl@sorheim.no",
    sellerName: "Karl",
  },
};

// ── Image Gallery ─────────────────────────────────────────────────────────────

const Gallery = ({ images, title }: { images: string[]; title: string }) => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);

  const go = (idx: number) => {
    setFade(true);
    setTimeout(() => {
      setActive(idx);
      setFade(false);
    }, 180);
  };

  const prev = () => go(active === 0 ? images.length - 1 : active - 1);
  const next = () => go(active === images.length - 1 ? 0 : active + 1);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden bg-muted" style={{ aspectRatio: "4/3" }}>
        <img
          src={images[active]}
          alt={`${title} – bilde ${active + 1}`}
          className="w-full h-full object-cover"
          style={{ opacity: fade ? 0 : 1, transition: "opacity 0.18s ease" }}
        />

        <span
          className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: "hsl(0 0% 0% / 0.45)",
            color: "hsl(0 0% 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          {active + 1} / {images.length}
        </span>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Forrige bilde"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                background: "hsl(0 0% 100% / 0.88)",
                color: "hsl(var(--foreground))",
                boxShadow: "0 2px 12px hsl(0 0% 0% / 0.18)",
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Neste bilde"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                background: "hsl(0 0% 100% / 0.88)",
                color: "hsl(var(--foreground))",
                boxShadow: "0 2px 12px hsl(0 0% 0% / 0.18)",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Vis bilde ${i + 1}`}
              className="relative rounded-xl overflow-hidden transition-all duration-200"
              style={{
                aspectRatio: "4/3",
                outline: i === active ? "2.5px solid hsl(var(--primary))" : "2.5px solid transparent",
                outlineOffset: "2px",
                opacity: i === active ? 1 : 0.55,
              }}
            >
              <img src={src} alt={`Miniatyrbilde ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Key Specs Table ───────────────────────────────────────────────────────────

const KeySpecsTable = ({ specs }: { specs: SpecRow[] }) => (
  <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "hsl(var(--border))" }}>
    <div
      className="px-5 py-3.5 text-xs font-bold uppercase tracking-widest border-b"
      style={{ background: "hsl(var(--secondary))", color: "hsl(var(--primary))", borderColor: "hsl(var(--border))" }}
    >
      Nøkkelspesifikasjoner
    </div>
    <div className="grid grid-cols-2 bg-white">
      {specs.map((spec, i) => (
        <div
          key={i}
          className="flex flex-col px-5 py-4 gap-0.5"
          style={{
            borderBottom: i < specs.length - 2 ? "1px solid hsl(var(--border))" : undefined,
            borderRight: i % 2 === 0 ? "1px solid hsl(var(--border))" : undefined,
          }}
        >
          <span className="text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
            {spec.label}
          </span>
          <span className="text-sm font-bold" style={{ color: "hsl(var(--foreground))" }}>
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ── Info (badge + title + price + intro) ──────────────────────────────────────

const InfoBlock = ({ trailer }: { trailer: TrailerData }) => (
  <>
    <span
      className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
      style={{ background: "hsl(var(--secondary))", color: "hsl(var(--primary))" }}
    >
      {trailer.badge}
    </span>

    <div>
      <h1
        className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight"
        style={{ color: "hsl(var(--foreground))" }}
      >
        {trailer.title}
      </h1>
      <p className="mt-1 text-lg font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
        {trailer.subtitle}
      </p>
    </div>

    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>
        Prisantydning
      </p>
      <p className="text-5xl font-extrabold leading-none" style={{ color: "hsl(var(--primary))" }}>
        {trailer.price}
      </p>
    </div>

    <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
      {trailer.intro}
    </p>
  </>
);

// ── CTA buttons ───────────────────────────────────────────────────────────────

const CTAButtons = ({ trailer }: { trailer: TrailerData }) => {
  const mailtoLink = `mailto:${trailer.contactEmail}?subject=Forespørsel: ${encodeURIComponent(trailer.title)}&body=Hei ${trailer.sellerName},%0A%0AJeg er interessert i ${encodeURIComponent(trailer.title)} (${trailer.subtitle}).%0A%0AMvh`;
  return (
    <div className="flex flex-col gap-3">
      <a
        href={`tel:${trailer.contactPhone}`}
        className="flex items-center justify-center gap-2.5 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          boxShadow: "0 4px 16px hsl(var(--primary) / 0.32)",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "hsl(212 72% 30%)")}
        onMouseLeave={e => (e.currentTarget.style.background = "hsl(var(--primary))")}
      >
        <Phone size={18} />
        Ring {trailer.sellerName}
      </a>
      <a
        href={mailtoLink}
        className="flex items-center justify-center gap-2.5 py-4 rounded-xl text-base font-semibold border transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "hsl(0 0% 100%)",
          color: "hsl(var(--primary))",
          borderColor: "hsl(var(--primary) / 0.3)",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "hsl(var(--secondary))")}
        onMouseLeave={e => (e.currentTarget.style.background = "hsl(0 0% 100%)")}
      >
        <Mail size={18} />
        Send e-post
      </a>

      {/* Karl – portrett og tittel */}
      <div className="flex items-center gap-4 pt-2">
        <img
          src={karlImg}
          alt="Karl – Daglig Leder, K. Sørheim AS"
          className="w-28 h-28 rounded-xl object-cover object-top shrink-0"
          style={{ border: "2px solid hsl(var(--border))" }}
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-base font-bold" style={{ color: "hsl(var(--foreground))" }}>Karl</p>
          <p className="text-sm font-medium" style={{ color: "hsl(var(--primary))" }}>Daglig Leder</p>
          <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>K. Sørheim AS</p>
        </div>
      </div>
    </div>
  );
};

// ── Trust signals ─────────────────────────────────────────────────────────────

const TrustSignals = () => (
  <div
    className="rounded-2xl border p-5 flex flex-col gap-3"
    style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--secondary))" }}
  >
    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
      Trygg handel
    </p>
    {[
      { icon: <MapPin size={15} />, text: "Lokal selger – Vestlandet" },
      { icon: <Eye size={15} />, text: "Besiktigelse mulig etter avtale" },
      { icon: <RefreshCw size={15} />, text: "Innbytte vurderes" },
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 text-sm">
        <span className="shrink-0" style={{ color: "hsl(var(--accent))" }}>{item.icon}</span>
        <span style={{ color: "hsl(var(--foreground))" }}>{item.text}</span>
      </div>
    ))}
  </div>
);

// ── Section wrapper ───────────────────────────────────────────────────────────

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="flex flex-col gap-5">
    <div className="flex items-center gap-3">
      <h2 className="text-xl font-bold tracking-tight" style={{ color: "hsl(var(--foreground))" }}>
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: "hsl(var(--border))" }} />
    </div>
    {children}
  </section>
);

// ── Equipment list ────────────────────────────────────────────────────────────

const EquipList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "hsl(var(--foreground))" }}>
        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "hsl(var(--accent))" }} />
        {item}
      </li>
    ))}
  </ul>
);

// ── Main page ─────────────────────────────────────────────────────────────────

const TrailerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trailer = id ? trailerData[id] : undefined;

  if (!trailer) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold mb-2">Tilhenger ikke funnet</p>
          <Link to="/" className="text-primary underline">Tilbake til oversikt</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">

      {/* ══════════════════════════════════════════════
          HERO – full-width cinematic
      ══════════════════════════════════════════════ */}
      <section className="relative h-[92vh] min-h-[560px] max-h-[900px] overflow-hidden">
        {/* Bakgrunnsbilde – portrait på mobil, landscape på desktop */}
        <picture className="absolute inset-0 w-full h-full">
          <source media="(max-width: 639px)" srcSet={trailerHeroMobileImg} />
          <source media="(min-width: 640px)" srcSet={trailerHeroImg} />
          <img
            src={trailerHeroImg}
            alt={trailer.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>

        {/* Gradient overlay – mørkere mot bunnen */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(215 50% 6% / 0.18) 0%, hsl(215 50% 6% / 0.55) 55%, hsl(215 50% 6% / 0.88) 100%)",
          }}
        />

        {/* Breadcrumb – øverst */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-6 flex items-center gap-2 text-sm">
            <Link
              to="/#tilhengere"
              className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-75"
              style={{ color: "hsl(0 0% 100% / 0.85)" }}
            >
              <ChevronLeft size={15} />
              Alle tilhengere
            </Link>
            <span style={{ color: "hsl(0 0% 100% / 0.4)" }}>/</span>
            <span className="truncate" style={{ color: "hsl(0 0% 100% / 0.6)" }}>{trailer.title}</span>
          </div>
        </div>

        {/* Innhold – sentrert mot bunnen */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">

            {/* Tittel */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight mb-5"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              {trailer.title}
            </h1>

            {/* Pris + årsmodell – én linje, minimalt */}
            <p
              className="text-xl sm:text-2xl font-semibold mb-8"
              style={{ color: "hsl(0 0% 100% / 0.7)" }}
            >
              {trailer.price} &nbsp;·&nbsp; {trailer.subtitle}
            </p>

            {/* CTA */}
            <button
              onClick={() => document.getElementById("tilhenger-detaljer")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "hsl(0 0% 100%)",
                color: "hsl(var(--primary))",
                boxShadow: "0 4px 24px hsl(215 50% 6% / 0.4)",
              }}
            >
              Se mer informasjon
              <ArrowDown size={15} />
            </button>
          </div>
        </div>
      </section>

      <div id="tilhenger-detaljer" className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16 flex flex-col gap-20">

        {/* ══════════════════════════════════════════════
            TOPPSEKSJON
        ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-14 items-start">

          {/* ── VENSTRE: Galleri + Nøkkelspesifikasjoner ── */}
          <div className="flex flex-col gap-6">
            {/* 1. Galleri (alltid øverst) */}
            <Gallery images={trailer.images} title={trailer.title} />

            {/* 2. Mobil: Navn, pris og intro (skjult på desktop) */}
            <div className="flex flex-col gap-5 lg:hidden">
              <InfoBlock trailer={trailer} />
            </div>

            {/* 3. Nøkkelspesifikasjoner (under galleri på desktop, etter info på mobil) */}
            <KeySpecsTable specs={trailer.keySpecs} />

            {/* 4. Mobil: CTA (skjult på desktop) */}
            <div className="flex flex-col gap-4 lg:hidden">
              <CTAButtons trailer={trailer} />
            </div>
          </div>

          {/* ── HØYRE: Sticky boks (kun desktop) ── */}
          <aside className="hidden lg:flex flex-col gap-0 sticky top-8 self-start">
            <div
              className="rounded-2xl border bg-card flex flex-col gap-6 p-7"
              style={{
                borderColor: "hsl(var(--border))",
                boxShadow: "0 4px 32px hsl(215 50% 6% / 0.09)",
              }}
            >
              <InfoBlock trailer={trailer} />

              {/* Separator */}
              <div className="h-px" style={{ background: "hsl(var(--border))" }} />

              <CTAButtons trailer={trailer} />
            </div>
          </aside>
        </div>

        {/* ══════════════════════════════════════════════
            MER INFORMASJON (scrollbart innhold)
        ══════════════════════════════════════════════ */}
        <div className="flex flex-col gap-16 max-w-3xl">

          <Section title="Komfort & Kjøreegenskaper">
            <div
              className="rounded-2xl border p-7 flex flex-col gap-5"
              style={{ borderColor: "hsl(var(--border))", background: "hsl(0 0% 100%)" }}
            >
              <div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "hsl(var(--foreground))" }}>
                  WCF Plus fjæringssystem
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  WCF Plus er BÖCKMANN sitt toppmoderne understellssystem med bærebro til hvert
                  hjul, kombinert fjær og støtdemper. Systemet absorberer støt og vibrasjoner
                  svært effektivt og gir hesten en skånsom og stabil reise – selv på dårlig vei.
                </p>
              </div>
              <div className="border-t pt-5" style={{ borderColor: "hsl(var(--border))" }}>
                <EquipList
                  items={[
                    "Bærebro til hvert hjul for individuell fjæring",
                    "Kombinert fjær og støtdemper – ny standard",
                    "Nye dempere montert",
                    "Svært god stabilitet i svinger og på motorvei",
                    "Gode bremser med jevn stopping",
                  ]}
                />
              </div>
            </div>
          </Section>

          <Section title="Utstyr & Detaljer">
            <div className="grid sm:grid-cols-2 gap-5">
              <div
                className="rounded-2xl border p-6 flex flex-col gap-4"
                style={{ borderColor: "hsl(var(--border))", background: "hsl(0 0% 100%)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--secondary))" }}>
                    <Package size={16} style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>Salrom & Interiør</h3>
                </div>
                <EquipList items={["To separate innganger", "2 uttrekkbare salhengere", "Ekstra tykk gulvmatte", "Kamera inkludert og i orden", "Original BÖCKMANN fôr-bøtte"]} />
              </div>

              <div
                className="rounded-2xl border p-6 flex flex-col gap-4"
                style={{ borderColor: "hsl(var(--border))", background: "hsl(0 0% 100%)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--secondary))" }}>
                    <Zap size={16} style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>Lys & Elektrisk</h3>
                </div>
                <EquipList items={["Alt lys fungerer perfekt", "Blått nattlys innvendig", "Nye lyspærer montert", "13-pols kontakt"]} />
              </div>

              <div
                className="rounded-2xl border p-6 flex flex-col gap-4 sm:col-span-2"
                style={{ borderColor: "hsl(var(--border))", background: "hsl(0 0% 100%)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--secondary))" }}>
                    <Shield size={16} style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>Dekk & Sikkerhet</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <EquipList items={["Nye dekk bak", "M+S helårsdekk", "Høy lastindeks", "Aluminiumsfelger"]} />
                  <EquipList items={["Ny sikkerhetswire", "Låsbar kulekobling", "Hjulstoppere inkludert", "Smurt og vedlikeholdt"]} />
                </div>
              </div>
            </div>
          </Section>

          <Section title="Tilstand">
            <div
              className="rounded-2xl border-l-4 p-7"
              style={{
                borderColor: "hsl(var(--accent))",
                background: "hsl(0 0% 100%)",
                boxShadow: "0 2px 16px hsl(var(--primary) / 0.06)",
              }}
            >
              <div className="flex items-start gap-4">
                <Camera size={22} className="shrink-0 mt-0.5" style={{ color: "hsl(var(--accent))" }} />
                <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
                  Hengeren fremstår som svært lite brukt og godt vedlikeholdt. Den bør sees og
                  prøves for riktig inntrykk. Dette er en L-utgave som få finnes, og kan ikke
                  sammenlignes med standardmodellen.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Frakt & Overlevering">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Truck size={20} />, title: "Frakt i hele landet", text: "Kan ordnes etter avtale for kjøpere utenfor regionen." },
                { icon: <Video size={20} />, title: "Videosamtale", text: "For langveis kjøpere kan vi vise hengeren digitalt." },
                { icon: <FileText size={20} />, title: "Digital omregistrering", text: "Gjøres enkelt via vegvesen.no – vi hjelper deg." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border p-5 flex flex-col gap-3"
                  style={{ borderColor: "hsl(var(--border))", background: "hsl(0 0% 100%)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "hsl(var(--secondary))", color: "hsl(var(--primary))" }}
                  >
                    {item.icon}
                  </div>
                  <p className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Bunn-CTA */}
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "hsl(var(--primary))" }}
          >
            <div>
              <p className="text-xl font-extrabold mb-1" style={{ color: "hsl(var(--primary-foreground))" }}>
                Interessert? Ta kontakt i dag.
              </p>
              <p className="text-sm" style={{ color: "hsl(var(--primary-foreground) / 0.75)" }}>
                Besiktigelse etter avtale · Innbytte vurderes · Lokal selger
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${trailer.contactPhone}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "hsl(0 0% 100%)", color: "hsl(var(--primary))" }}
              >
                <Phone size={16} />Ring {trailer.sellerName}
              </a>
              <a
                href={`mailto:${trailer.contactEmail}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "transparent",
                  color: "hsl(var(--primary-foreground))",
                  borderColor: "hsl(var(--primary-foreground) / 0.45)",
                }}
              >
                <Mail size={16} />Send e-post
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default TrailerDetail;
