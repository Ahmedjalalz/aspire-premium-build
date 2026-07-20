import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aspire Removals & Transport | Speak to a Move Coordinator" },
      { name: "description", content: "Contact our UK removals team — call, email or send a message and we'll respond within one business hour." },
      { property: "og:title", content: "Contact Aspire Removals & Transport" },
      { property: "og:description", content: "Reach our UK removals team — call, email or message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to a real move coordinator</>}
        subtitle="Call, email, or drop us a note — we reply within one business hour, seven days a week."
      />

      <section className="container-page mt-20 grid lg:grid-cols-[1fr_1.1fr] gap-12">
        <Reveal>
          <div className="space-y-5">
            <InfoRow icon={Phone} title="Call us" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
            <InfoRow icon={Mail} title="Email us" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoRow icon={MapPin} title="Head office" value={SITE.address} />
            <div className="rounded-2xl bg-section border border-border p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-navy">Business hours</p>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.d} className="flex justify-between">
                    <span>{h.d}</span>
                    <span className="font-medium text-navy">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[16/10] bg-section">
              <iframe
                title="Aspire Removals office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.121%2C51.512%2C-0.114%2C51.517&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <ContactForm />
        </Reveal>
      </section>

      <div className="mt-24" />
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-2xl bg-card border border-border p-5 card-lift shadow-soft">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-navy">{title}</p>
        <p className="text-muted-foreground text-sm break-words">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        (e.currentTarget as HTMLFormElement).reset();
        alert("Thanks — we'll be in touch within one business hour.");
      }}
      className="rounded-3xl bg-card border border-border p-7 md:p-9 shadow-soft"
    >
      <h2 className="text-xl font-semibold text-navy">Send us a message</h2>
      <p className="mt-1 text-sm text-muted-foreground">We reply within one business hour.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" />
        <div className="sm:col-span-2">
          <Field label="Email" name="email" type="email" required />
        </div>
        <div className="sm:col-span-2">
          <Field label="Subject" name="subject" />
        </div>
        <div className="sm:col-span-2">
          <Field label="Message" name="message" as="textarea" required />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground btn-glow"
      >
        Send message <CheckCircle2 className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
}) {
  const cls =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors";
  return (
    <label className="block text-sm font-medium text-navy">
      {label} {required && <span className="text-accent">*</span>}
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
