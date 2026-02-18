import { Phone, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Ta kontakt",
    description: "Ring Karl og beskriv tilhengeren du ønsker å bytte inn – uansett stand.",
  },
  {
    number: "02",
    title: "Få en vurdering",
    description: "Karl gir deg et ærlig tilbud. Ingen skjulte kostnader, ingen overraskelser.",
  },
  {
    number: "03",
    title: "Byt og spar",
    description: "Innbytteverdien trekkes fra kjøpesummen. Du henter ny tilhenger – vi tar resten.",
  },
];

const Innbytte = () => {
  return (
    <section className="py-24 px-6 sm:px-10" style={{ backgroundColor: "hsl(var(--background))" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              backgroundColor: "hsl(var(--secondary))",
              color: "hsl(var(--primary))",
            }}
          >
            Innbytte
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Har du en gammel eller skadet tilhenger?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vi tar den gjerne i innbytte – uansett stand. Slik slipper du å selge selv, og kan gå rett over i en tilhenger som passer deg bedre.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-6 left-[calc(100%-16px)] w-8 z-10">
                  <ArrowRight size={18} style={{ color: "hsl(var(--border))" }} />
                </div>
              )}
              <div
                className="rounded-2xl px-7 py-8 border border-border bg-white h-full"
              >
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
            Klar for å bytte tilhenger?
          </p>
          <p className="text-sm" style={{ color: "hsl(0 0% 80%)" }}>
            Ring Karl i dag for en uforpliktende vurdering av din tilhenger.
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
