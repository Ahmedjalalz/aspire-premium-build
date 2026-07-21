import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import boxesImg from "@/assets/products/boxes.jpg";
import wardrobeImg from "@/assets/products/wardrobe.jpg";
import booksImg from "@/assets/products/books.jpg";
import bubbleImg from "@/assets/products/bubble.jpg";
import tissueImg from "@/assets/products/tissue.jpg";
import tapeImg from "@/assets/products/tape.jpg";
import coversImg from "@/assets/products/covers.jpg";
import floorImg from "@/assets/products/floor.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Moving Products & Materials | Aspire Removals & Transport" },
      {
        name: "description",
        content:
          "Premium packing products and moving materials — boxes, wrapping, tape, protective covers and more. Request a quote.",
      },
      { property: "og:title", content: "Moving Products | Aspire Removals" },
      { property: "og:description", content: "Premium packing products and moving materials — request a quote." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const PRODUCTS = [
  { img: boxesImg, title: "Standard Moving Boxes", desc: "Double-wall cartons in small, medium and large — the everyday workhorse." },
  { img: wardrobeImg, title: "Wardrobe Boxes", desc: "Tall boxes with a built-in hanging rail to move clothes on their hangers." },
  { img: booksImg, title: "Book & Wine Cartons", desc: "Heavy-duty small boxes for dense items like books, vinyl and bottles." },
  { img: bubbleImg, title: "Bubble Wrap Rolls", desc: "Premium bubble wrap for glassware, ceramics, screens and artwork." },
  { img: tissueImg, title: "Acid-Free Tissue", desc: "For fine china, silverware and delicate fabrics." },
  { img: tapeImg, title: "Packing Tape & Dispensers", desc: "Low-noise tape and ergonomic dispensers for fast, secure boxing." },
  { img: coversImg, title: "Sofa & Mattress Covers", desc: "Fitted covers to keep upholstery clean in transit and in storage." },
  { img: floorImg, title: "Floor & Corner Protection", desc: "Floor runners and corner guards to protect your home during the move." },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Professional packing products & materials</>}
        subtitle="Everything you need for a clean, safe move — supplied and delivered by our team. We only stock materials we'd use on our own moves."
      />

      <section className="container-page mt-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 40}>
              <article className="h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden card-lift shadow-soft">
                <div className="aspect-[4/3] bg-white overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground flex-1">{p.desc}</p>
                  <Link
                    to="/quote"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground btn-glow"
                  >
                    Request Quote
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page my-24">
        <Reveal className="rounded-3xl gradient-brand-soft border border-border p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl text-navy font-bold">Need a custom bundle?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Tell us what you're moving and we'll put together a materials pack sized to your home.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground btn-glow-accent"
          >
            Request a materials quote
          </Link>
        </Reveal>
      </section>
    </>
  );
}
