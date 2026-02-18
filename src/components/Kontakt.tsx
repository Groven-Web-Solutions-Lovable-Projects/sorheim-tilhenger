import karlImg from "@/assets/karl-sorheim.jpg";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left – Karl + contact info */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Kontakt</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              Snakk direkte med Karl
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Har du spørsmål om en tilhenger, ønsker innbytte, eller trenger hjelp til å velge riktig? Ring Karl – han tar seg alltid god tid.
            </p>

            {/* Karl card */}
            <div className="flex items-center gap-5 mb-10">
              <img
                src={karlImg}
                alt="Karl Sørheim – Daglig leder, K. Sørheim AS"
                className="w-20 h-20 rounded-full object-cover object-top border border-border"
              />
              <div>
                <p className="text-base font-bold text-foreground">Karl Sørheim</p>
                <p className="text-sm text-muted-foreground">Daglig leder · K. Sørheim AS</p>
              </div>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-4">
              <a
                href="tel:+4797331920"
                className="group flex items-center gap-4 py-4 px-5 rounded-xl border border-border hover:border-primary transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "hsl(var(--secondary))" }}
                >
                  <Phone size={17} style={{ color: "hsl(var(--primary))" }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">Telefon</p>
                  <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">973 31 920</p>
                </div>
              </a>

              <a
                href="mailto:karlswarop@hotmail.com"
                className="group flex items-center gap-4 py-4 px-5 rounded-xl border border-border hover:border-primary transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "hsl(var(--secondary))" }}
                >
                  <Mail size={17} style={{ color: "hsl(var(--primary))" }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">E-post</p>
                  <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">karlswarop@hotmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right – form */}
          <div>
            {submitted ? (
              <div className="flex flex-col gap-4 py-16 text-center">
                <p className="text-2xl font-extrabold text-foreground">Takk, {form.name.split(" ")[0]}!</p>
                <p className="text-muted-foreground">Karl tar kontakt med deg på {form.phone} så snart som mulig.</p>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Eller send en melding</p>
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Navn</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ditt fulle navn"
                      maxLength={100}
                      className="w-full rounded-lg border px-4 py-3 text-sm text-foreground bg-background outline-none transition-colors"
                      style={{ borderColor: errors.name ? "hsl(0 84% 60%)" : "hsl(var(--border))" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.name ? "hsl(0 84% 60%)" : "hsl(var(--border))")}
                    />
                    {errors.name && <p className="text-xs" style={{ color: "hsl(0 84% 60%)" }}>{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Telefon</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Ditt telefonnummer"
                      maxLength={20}
                      type="tel"
                      className="w-full rounded-lg border px-4 py-3 text-sm text-foreground bg-background outline-none transition-colors"
                      style={{ borderColor: errors.phone ? "hsl(0 84% 60%)" : "hsl(var(--border))" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.phone ? "hsl(0 84% 60%)" : "hsl(var(--border))")}
                    />
                    {errors.phone && <p className="text-xs" style={{ color: "hsl(0 84% 60%)" }}>{errors.phone}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Melding</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hva leter du etter, eller hva vil du bytte inn?"
                      maxLength={1000}
                      rows={4}
                      className="w-full rounded-lg border px-4 py-3 text-sm text-foreground bg-background outline-none transition-colors resize-none"
                      style={{ borderColor: errors.message ? "hsl(0 84% 60%)" : "hsl(var(--border))" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "hsl(var(--primary))")}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.message ? "hsl(0 84% 60%)" : "hsl(var(--border))")}
                    />
                    {errors.message && <p className="text-xs" style={{ color: "hsl(0 84% 60%)" }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(212 72% 30%)")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "hsl(var(--primary))")}
                  >
                    Send melding
                    <Send size={14} />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>

        {/* Footer line */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} K. Sørheim AS</p>
          <p>Org.nr. registreres ved forespørsel</p>
        </div>

      </div>
    </section>
  );
};

export default Kontakt;
