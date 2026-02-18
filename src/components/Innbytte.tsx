import { Phone, ArrowRight, RefreshCw, Banknote } from "lucide-react";

const innbytteSteps = [
  {
    number: "01",
    title: "Ta kontakt",
    description: "Ring Karl og beskriv tilhengeren din – uansett stand.",
  },
  {
    number: "02",
    title: "Få en vurdering",
    description: "Karl gir deg et ærlig tilbud. Ingen skjulte kostnader.",
  },
  {
    number: "03",
    title: "Bytt og spar",
    description: "Innbytteverdien trekkes fra kjøpesummen. Du kjører hjem med ny henger.",
  },
];

const salgSteps = [
  {
    number: "01",
    title: "Ta kontakt",
    description: "Ring Karl og beskriv tilhengeren din – uansett stand.",
  },
  {
    number: "02",
    title: "Få en vurdering",
    description: "Karl gir deg et ærlig tilbud basert på stand og marked.",
  },
  {
    number: "03",
    title: "Lever og motta",
    description: "Lever tilhengeren og motta oppgjør direkte – raskt og enkelt.",
  },
];

const options = [
  {
    key: "innbytte",
    icon: <RefreshCw size={18} />,
    label: "Innbytte",
    tagline: "Bytt inn mot ny tilhenger",
  },
  {
    key: "salg",
    icon: <Banknote size={18} />,
    label: "Selg til oss",
    tagline: "Få penger direkte",
  },
];

import { useState } from "react";

const Innbytte = () => {
  const [active, setActive] = useState<"innbytte" | "salg">("innbytte");
  const steps = active === "innbytte" ? innbytteSteps : salgSteps;

  return (
    <section id="innbytte" className="py-24 px-6 sm:px-10" style={{ backgroundColor: "hsl(var(--background))" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--primary))" }}
          >
            Innbytte & salg
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Har du en tilhenger du vil bli kvitt?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vi kjøper eller tar inn tilhengeren din – uansett stand. Velg hva som passer deg best.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex gap-3 mb-12">
          {options.map((opt) => {
            const isActive = active === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setActive(opt.key as "innbytte" | "salg")}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl border text-left transition-all duration-200"
                style={{
                  borderColor: isActive ? "hsl(var(--primary))" : "hsl(var(--border))",
                  background: isActive ? "hsl(var(--primary))" : "hsl(0 0% 100%)",
                  color: isActive ? "hsl(0 0% 100%)" : "hsl(var(--foreground))",
                  boxShadow: isActive ? "0 4px 16px hsl(var(--primary) / 0.2)" : "none",
                }}
              >
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: isActive ? "hsl(0 0% 100% / 0.15)" : "hsl(var(--secondary))",
                    color: isActive ? "hsl(0 0% 100%)" : "hsl(var(--primary))",
                  }}
                >
                  {opt.icon}
                </span>
                <div>
                  <p className="text-sm font-bold leading-none mb-0.5">{opt.label}</p>
                  <p
                    className="text-xs leading-none"
                    style={{ color: isActive ? "hsl(0 0% 100% / 0.75)" : "hsl(var(--muted-foreground))" }}
                  >
                    {opt.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-6 left-[calc(100%-16px)] w-8 z-10">
                  <ArrowRight size={18} style={{ color: "hsl(var(--border))" }} />
                </div>
              )}
              <div className="rounded-2xl px-7 py-8 border border-border bg-white h-full">
                <span
                  className="block text-4xl font-black mb-4 leading-none"
                  style={{ color: "hsl(var(--secondary))", WebkitTextStroke: "2px hsl(var(--primary))", opacity: 0.25 }}
                >
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="rounded-2xl px-8 py-10 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        >
          <div>
            <p className="text-lg font-bold mb-1" style={{ color: "hsl(0 0% 100%)" }}>
              {active === "innbytte" ? "Klar for å bytte tilhenger?" : "Vil du selge tilhengeren din?"}
            </p>
            <p className="text-sm" style={{ color: "hsl(0 0% 80%)" }}>
              Ring Karl for en uforpliktende vurdering – raskt svar, ærlig pris.
            </p>
          </div>
          <a
            href="tel:+4797331920"
            className="shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-white hover:bg-secondary"
            style={{ color: "hsl(var(--primary))" }}
          >
            <Phone size={16} />
            Ring Karl nå
          </a>
        </div>

      </div>
    </section>
  );
};

export default Innbytte;
