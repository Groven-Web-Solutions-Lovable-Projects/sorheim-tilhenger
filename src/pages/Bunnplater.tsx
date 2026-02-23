import { Phone, ChevronLeft, Ruler, Shield, Layers, Package, Wrench, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Kontakt from "@/components/Kontakt";
import bunnplaterStackImg from "@/assets/bunnplater-stack.png";
import bunnplateTransparentImg from "@/assets/bunnplate-transparent.png";
import karlImg from "@/assets/karl-sorheim.jpg";

const thicknesses = [
  { mm: "9 mm", desc: "Lett og fleksibel" },
  { mm: "12 mm", desc: "Standard varehengere", popular: true },
  { mm: "18 mm", desc: "Ekstra solid" },
  { mm: "21 mm", desc: "Maks styrke" },
];

const otherParts = [
  { icon: <Wrench size={22} />, label: "Bremser", desc: "Bremsebakker, wire, justeringsverktøy og komplette bremsegarnityr til alle vanlige merker." },
  { icon: <Lightbulb size={22} />, label: "Lys & elektro", desc: "Baklys, blinklys, nummerskiltlys, kabelstammer og kontakter – alltid godkjent utstyr." },
  { icon: <Package size={22} />, label: "Beslag & feste", desc: "Hengsler, skruer, låsemekanismer, sidebord-beslag og annet monteringsutstyr." },
  { icon: <Layers size={22} />, label: "Dekk & hjul", desc: "Nye dekk, felger og komplette hjul i vanlige dimensjoner for tilhengere." },
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
                href="tel:+4797331920"
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
          {/* Seksjonstittel */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full bg-secondary text-primary">
              Produktdetaljer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Moelven bunnplater
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Opprinnelig fra Montér / Optimera. Brun, tykk overflatebehandling gir solid beskyttelse mot fukt og mekaniske skader.
            </p>
          </div>

          {/* Produkt-showcase */}
          <div className="relative">
            {/* Navy bakgrunnskort */}
            <div className="rounded-3xl bg-primary py-16 sm:py-20 px-8 sm:px-14 lg:pr-[45%] relative overflow-hidden">
              {/* Dekorative elementer */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.05] to-transparent" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/10 -translate-x-1/2 translate-y-1/2 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                {/* Spesifikasjoner */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10">
                    <Ruler size={16} className="text-accent" />
                    <span className="text-sm font-semibold text-white">150 × 300 cm</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10">
                    <Shield size={16} className="text-accent" />
                    <span className="text-sm font-semibold text-white">Fukt- & slagbeskyttelse</span>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed text-base max-w-lg">
                  Standardformat <strong className="text-white">150&nbsp;×&nbsp;300&nbsp;cm</strong> passer de fleste tilhengere. Velg mellom fire tykkelser avhengig av bruksområde.
                </p>

                {/* Tykkelser */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Velg tykkelse</h3>
                  <div className="flex flex-wrap gap-3">
                    {thicknesses.map((t) => (
                      <div
                        key={t.mm}
                        className={`relative flex flex-col items-center gap-1 rounded-2xl px-5 py-4 min-w-[100px] transition-all duration-200 ${
                          t.popular
                            ? "bg-white text-foreground shadow-xl shadow-black/20 scale-105"
                            : "bg-white/10 border border-white/10 text-white hover:bg-white/15"
                        }`}
                      >
                        {t.popular && (
                          <span className="absolute -top-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                            Populær
                          </span>
                        )}
                        <span className={`text-2xl font-extrabold ${t.popular ? "text-primary" : ""}`}>{t.mm}</span>
                        <span className={`text-[11px] ${t.popular ? "text-muted-foreground" : "text-white/60"}`}>{t.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <a
                    href="tel:+4797331920"
                    className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-white text-primary hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-black/15"
                  >
                    <Phone size={18} />
                    Ring for pris
                  </a>
                  <p className="text-sm text-white/50">
                    Pris varierer etter tykkelse og antall.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating produktbilde */}
            <div className="lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[42%] mt-8 lg:mt-0 flex justify-center">
              <img
                src={bunnplateTransparentImg}
                alt="Moelven bunnplate 150 × 300 cm"
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl lg:rotate-[-4deg] hover:lg:rotate-0 transition-transform duration-500"
              />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {otherParts.map((part) => (
              <div
                key={part.label}
                className="flex items-start gap-5 rounded-2xl border border-border bg-white p-6 sm:p-7 hover:shadow-md transition-shadow duration-200"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  {part.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold text-foreground">{part.label}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{part.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="tel:+4797331920"
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
              href="tel:+4797331920"
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
