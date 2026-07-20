import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Aspire Removals & Transport" },
      {
        name: "description",
        content:
          "Full-service UK removals: house moves, office relocation, packing, furniture transport and additional logistics.",
      },
      { property: "og:title", content: "Our Services | Aspire Removals & Transport" },
      { property: "og:description", content: "House moves, office relocation, packing and transport across the UK." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Every part of your move, handled by specialists</>}
        subtitle="From single-item transport to nationwide house moves, we bring the same care and craftsmanship to every job."
      />
      <section className="container-page mt-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand-soft text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
