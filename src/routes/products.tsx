import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import largeBox from "@/assets/products/large-box.jpg";
import smallBox from "@/assets/products/small-box.jpg";
import fragileTape from "@/assets/products/fragile-tape.jpg";
import brownTape from "@/assets/products/brown-tape.jpg";
import bubbleWrap from "@/assets/products/bubble-wrap.jpg";
import shrinkWrap from "@/assets/products/shrink-wrap.jpg";
import kitchenPaper from "@/assets/products/kitchen-paper.jpg";
import wardrobeBox from "@/assets/products/wardrobe-box.jpg";
import shoesProtector from "@/assets/products/shoes-protector.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Moving Products & Materials | Aspire Removals & Transport" },
      {
        name: "description",
        content:
          "Premium packing products and moving materials — boxes, tape, bubble wrap, shrink wrap and more. Request a quote.",
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
  { img: largeBox, title: "Large Boxes", desc: "Spacious double-wall cartons for bedding, cushions and lightweight bulky items." },
  { img: smallBox, title: "Small Boxes", desc: "Heavy-duty small boxes ideal for books, kitchenware and dense items." },
  { img: fragileTape, title: "Fragile Tape", desc: "Bold red 'Fragile' printed tape to clearly mark delicate cartons." },
  { img: brownTape, title: "Brown Tape", desc: "Strong low-noise brown parcel tape for fast, secure box sealing." },
  { img: bubbleWrap, title: "Bubble Wraps", desc: "Premium cushioned bubble wrap rolls for glassware, screens and artwork." },
  { img: shrinkWrap, title: "Shrink Wrap", desc: "Clear stretch film to protect sofas, mattresses and drawers during transit." },
  { img: kitchenPaper, title: "Kitchen Paper", desc: "Soft, clean packing paper for wrapping china, glassware and fragile items." },
  { img: wardrobeBox, title: "Wardrobe Moving Box", desc: "Tall boxes with a built-in hanging rail so clothes move on their hangers." },
  { img: shoesProtector, title: "Shoes Protector", desc: "Clear protective bags to keep pairs of shoes clean, dry and together." },
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
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
