import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Navn er påkrevd").max(100),
  phone: z.string().trim().min(8, "Skriv inn et gyldig telefonnummer").max(20),
  message: z.string().trim().min(1, "Melding er påkrevd").max(1000),
});

type FormState = { name: string; phone: string; message: string };
type Errors = Partial<FormState>;

const Kontakt = () => {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof Errors;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 px-6 sm:px-10 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--primary))" }}
          >
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Ta kontakt med Karl
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Den raskeste veien er en telefon. Foretrekker du å skrive, fyller du ut skjemaet så tar Karl kontakt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left – primary CTA */}
          <div className="flex flex-col gap-5">

            {/* Call card */}
            <a
              href="tel:+4700000000"
              className="group flex items-center gap-5 rounded-2xl px-8 py-8 border-2 transition-all duration-200"
              style={{
                backgroundColor: "hsl(var(--primary))",
                borderColor: "hsl(var(--primary))",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "hsl(0 0% 100% / 0.12)" }}
              >
                <Phone size={24} style={{ color: "hsl(0 0% 100%)" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "hsl(0 0% 70%)" }}>Ring direkte</p>
                <p className="text-2xl font-extrabold tracking-tight" style={{ color: "hsl(0 0% 100%)" }}>+47 000 00 000</p>
                <p className="text-sm mt-0.5" style={{ color: "hsl(0 0% 75%)" }}>Karl Sørheim · Man–lør</p>
              </div>
            </a>

            {/* Email card */}
            <a
              href="mailto:karl@sorheim.no"
              className="flex items-center gap-5 rounded-2xl px-8 py-6 border border-border bg-white hover:shadow-md transition-all duration-200"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "hsl(var(--secondary))" }}
              >
                <Mail size={22} style={{ color: "hsl(var(--primary))" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1 text-muted-foreground">E-post</p>
                <p className="text-base font-bold text-foreground">karl@sorheim.no</p>
              </div>
            </a>

            {/* Trust note */}
            <p className="text-sm text-muted-foreground px-1">
              ✓ Uforpliktende samtale &nbsp;·&nbsp; ✓ Svar samme dag &nbsp;·&nbsp; ✓ Ingen mellomledd
            </p>
          </div>

          {/* Right – form */}
          <div className="rounded-2xl border border-border bg-white px-8 py-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "hsl(var(--secondary))" }}
                >
                  ✓
                </div>
                <h3 className="text-lg font-bold text-foreground">Takk for din henvendelse!</h3>
                <p className="text-sm text-muted-foreground">Karl tar kontakt med deg så snart som mulig.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <h3 className="text-base font-bold text-foreground mb-1">Send en melding</h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Navn</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ditt fulle navn"
                    maxLength={100}
                    className="w-full rounded-xl border px-4 py-3 text-sm text-foreground outline-none transition-all"
                    style={{
                      borderColor: errors.name ? "hsl(0 84% 60%)" : "hsl(var(--border))",
                      backgroundColor: "hsl(var(--background))",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                    onBlur={e => (e.currentTarget.style.borderColor = errors.name ? "hsl(0 84% 60%)" : "hsl(var(--border))")}
                  />
                  {errors.name && <p className="text-xs" style={{ color: "hsl(0 84% 60%)" }}>{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Telefon</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Ditt telefonnummer"
                    maxLength={20}
                    type="tel"
                    className="w-full rounded-xl border px-4 py-3 text-sm text-foreground outline-none transition-all"
                    style={{
                      borderColor: errors.phone ? "hsl(0 84% 60%)" : "hsl(var(--border))",
                      backgroundColor: "hsl(var(--background))",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                    onBlur={e => (e.currentTarget.style.borderColor = errors.phone ? "hsl(0 84% 60%)" : "hsl(var(--border))")}
                  />
                  {errors.phone && <p className="text-xs" style={{ color: "hsl(0 84% 60%)" }}>{errors.phone}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Melding</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hva leter du etter, eller hva vil du bytte inn?"
                    maxLength={1000}
                    rows={4}
                    className="w-full rounded-xl border px-4 py-3 text-sm text-foreground outline-none transition-all resize-none"
                    style={{
                      borderColor: errors.message ? "hsl(0 84% 60%)" : "hsl(var(--border))",
                      backgroundColor: "hsl(var(--background))",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                    onBlur={e => (e.currentTarget.style.borderColor = errors.message ? "hsl(0 84% 60%)" : "hsl(var(--border))")}
                  />
                  {errors.message && <p className="text-xs" style={{ color: "hsl(0 84% 60%)" }}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(212 72% 30%)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "hsl(var(--primary))")}
                >
                  Send melding
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Kontakt;
