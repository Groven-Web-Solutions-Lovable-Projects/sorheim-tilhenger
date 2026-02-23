import { Phone, ChevronLeft, Ruler, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Kontakt from "@/components/Kontakt";
import bunnplaterStackImg from "@/assets/bunnplater-stack.png";
import bunnplateTransparentImg from "@/assets/bunnplate-transparent.png";
import karlImg from "@/assets/karl-sorheim.jpg";
import delerDekkImg from "@/assets/deler-dekk.png";
import delerLysImg from "@/assets/deler-lys.png";
import delerBeslagImg from "@/assets/deler-beslag.png";
import bockmannImg from "@/assets/bockmann-rear.jpg";

const thicknesses = [
  { mm: "9 mm", desc: "Lett og fleksibel" },
  { mm: "12 mm", desc: "Standard varehengere", popular: true },
  { mm: "18 mm", desc: "Ekstra solid" },
  { mm: "21 mm", desc: "Maks styrke" },
];

const otherParts = [
  { image: bockmannImg, label: "Bremser", desc: "Bremsebakker, wire, justeringsverktøy og komplette bremsegarnityr til alle vanlige merker." },
  { image: delerLysImg, label: "Lys & elektro", desc: "Baklys, blinklys, nummerskiltlys, kabelstammer og kontakter – alltid godkjent utstyr." },
  { image: delerBeslagImg, label: "Beslag & feste", desc: "Hengsler, skruer, låsemekanismer, sidebord-beslag og annet monteringsutstyr." },
  { image: delerDekkImg, label: "Dekk & hjul", desc: "Nye dekk, felger og komplette hjul i vanlige dimensjoner for tilhengere." },
];

const Bunnplater = () => {
  return (
    <main>
      <Navbar />

      {/* Hero – cinematisk */}
      <section className="relative pt-16 overflow-hidden">
        {/* Lys gradient med blå toner */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[hsl(210_30%_95%)] to-[hsl(196_40%_92%)]" />
        
        {/* Dekorativ sirkel */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-32">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
            style={{ animation: "hero-fade-up 0.6s ease-out both" }}
          >
            <ChevronLeft size={16} />
            Tilbake til forsiden
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Tekst */}
            <div className="flex flex-col gap-6">
              <span
                className="inline-block self-start text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-primary text-primary-foreground"
                style={{ animation: "hero-fade-up 0.6s ease-out 0.1s both" }}
              >
                Tilhengerdeler
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight"
                style={{ animation: "hero-fade-up 0.7s ease-out 0.2s both" }}
              >
                Bunnplater for{" "}
                <span className="text-primary">tilhengere</span>
              </h1>
              <p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg"
                style={{ animation: "hero-fade-up 0.7s ease-out 0.35s both" }}
              >
                Moelven bunnplater med brun, tykk beskyttelse mot fukt og skader. Format 150&nbsp;×&nbsp;300&nbsp;cm – tilgjengelig i fire tykkelser.
              </p>

              {/* Inline specs */}
              <div
                className="flex flex-wrap gap-4 mt-1"
                style={{ animation: "hero-fade-up 0.7s ease-out 0.45s both" }}
              >
                {["9 mm", "12 mm", "18 mm", "21 mm"].map((t) => (
                  <span key={t} className="px-4 py-2 rounded-lg text-sm font-bold text-primary bg-white border border-border shadow-sm">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary-hero self-start mt-2"
                style={{ animation: "hero-fade-up 0.7s ease-out 0.55s both" }}
              >
                <Phone size={18} />
                Ring for anbefaling
              </a>
            </div>

            {/* Hovedbilde med glow-effekt */}
            <div
              className="relative"
              style={{ animation: "hero-fade-up 0.8s ease-out 0.3s both" }}
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl opacity-40" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                <img
                  src={bunnplaterStackImg}
                  alt="Stabel med Moelven bunnplater for tilhengere"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay på bunnkant */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produktdetaljer */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl border border-border bg-secondary/40 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Bilde */}
              <div className="relative flex items-center justify-center p-10 sm:p-14 bg-gradient-to-br from-secondary to-[hsl(210_25%_92%)]">
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/[0.04] blur-3xl" />
                <img
                  src={bunnplateTransparentImg}
                  alt="Moelven bunnplate 150 × 300 cm"
                  className="relative w-full max-w-[440px] h-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Innhold */}
              <div className="p-8 sm:p-12 flex flex-col justify-center gap-6 bg-white">
                <div>
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full bg-secondary text-primary">
                    Produktdetaljer
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                    Moelven bunnplater
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Opprinnelig fra Montér / Optimera. Brun, tykk overflatebehandling gir solid beskyttelse mot fukt og mekaniske skader. Format <strong className="text-foreground">150&nbsp;×&nbsp;300&nbsp;cm</strong>.
                  </p>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border">
                    <Ruler size={16} className="text-accent" />
                    <span className="text-sm font-semibold text-foreground">150 × 300 cm</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border">
                    <Shield size={16} className="text-accent" />
                    <span className="text-sm font-semibold text-foreground">Fukt- & slagbeskyttelse</span>
                  </div>
                </div>

                {/* Tykkelser */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Tilgjengelige tykkelser</h3>
                  <p className="text-sm text-foreground">
                    9 mm · 12 mm <span className="text-muted-foreground">(standard varehengere)</span> · 18 mm · 21 mm
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3 pt-2">
                  <a href="#kontakt" onClick={(e) => { e.preventDefault(); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary-hero self-start">
                    <Phone size={18} />
                    Ring for pris
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Pris varierer etter tykkelse og antall.
                  </p>
                </div>

                {/* Karl – tillitselement */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <img
                    src={karlImg}
                    alt="Karl Sørheim"
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-bold text-foreground">Karl Sørheim</p>
                    <p className="text-xs text-muted-foreground">Hjelper deg finne riktig plate · 973 31 920</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Andre deler */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full bg-primary text-primary-foreground"
            >
              Deler & tilbehør
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              Alt du trenger til tilhengeren
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              I tillegg til bunnplater fører vi et bredt sortiment av reservedeler og tilbehør. Vi hjelper deg med å finne riktig del – uansett merke og modell.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherParts.map((part) => (
              <div
                key={part.label}
                className="group rounded-2xl border border-border bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={part.image}
                    alt={part.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-lg font-bold text-white">{part.label}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{part.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary-hero"
            >
              <Phone size={18} />
              Ring for deler
            </a>
            <p className="text-sm text-muted-foreground">
              Usikker på hva du trenger? Karl hjelper deg finne riktig del.
            </p>
          </div>
        </div>
      </section>

      {/* CTA – kontakt Karl */}
      <section className="py-16 px-6 sm:px-10 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-border bg-secondary/30 p-8 sm:p-12 flex flex-col items-center gap-5">
            <img
              src={karlImg}
              alt="Karl Sørheim"
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
            />
            <h2 className="text-2xl font-extrabold text-foreground">
              Ring for anbefaling og tilgjengelighet
            </h2>
            <p className="text-muted-foreground max-w-md">
              Karl hjelper deg med å finne riktig bunnplate og tykkelse for din tilhenger – og svarer på spørsmål om andre deler.
            </p>
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary-hero"
            >
              <Phone size={18} />
              Ring 973 31 920
            </a>
          </div>
        </div>
      </section>

      <Kontakt />
    </main>
  );
};

export default Bunnplater;
