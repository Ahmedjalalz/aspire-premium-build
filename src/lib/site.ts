import {
  Home,
  Building2,
  Package,
  Sofa,
  Warehouse,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Aspire Removals & Transport",
  short: "Aspire Removals",
  tagline: "Trust Us Take You Home",
  phone: "+44 20 3900 0000",
  email: "hello@aspireremovals.co.uk",
  address: "12 Kingsway, London, WC2B 6UN, United Kingdom",
  hours: [
    { d: "Monday – Friday", h: "07:00 – 19:00" },
    { d: "Saturday", h: "08:00 – 17:00" },
    { d: "Sunday", h: "By appointment" },
  ],
};

export type ServiceSlug =
  | "house-removals"
  | "office-relocation"
  | "packing-services"
  | "furniture-transport"
  | "additional-transport";

export interface Service {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "house-removals",
    title: "House Removals",
    short: "Effortless home moves, handled end-to-end.",
    description:
      "From single rooms to five-bedroom houses, our uniformed crews plan, pack and move your home with care and precision anywhere in the UK.",
    icon: Home,
    benefits: [
      "Free in-home or video survey",
      "Uniformed, DBS-checked crews",
      "Blankets, straps & floor protection included",
      "Comprehensive goods-in-transit cover",
    ],
    process: [
      { title: "Survey & Quote", text: "We assess volume, access and timing to give you a clear fixed price." },
      { title: "Pack & Protect", text: "Optional full-pack service with quality materials and inventory labelling." },
      { title: "Load & Transport", text: "Modern fleet with GPS tracking and secure loading protocols." },
      { title: "Unload & Settle", text: "Furniture placed room-by-room and reassembled ready to enjoy." },
    ],
    faqs: [
      { q: "How far in advance should I book?", a: "We recommend 2–4 weeks for weekends and month-ends, but we often accommodate short-notice moves." },
      { q: "Do you dismantle furniture?", a: "Yes — beds, wardrobes and tables are dismantled and reassembled at no extra cost." },
      { q: "Is my move insured?", a: "Every move includes Goods-in-Transit and Public Liability cover as standard." },
    ],
  },
  {
    slug: "office-relocation",
    title: "Office Relocation",
    short: "Move your business with zero downtime.",
    description:
      "Weekend and out-of-hours commercial moves for offices, studios and retail, with IT decommission, crate hire and secure inventory tracking.",
    icon: Building2,
    benefits: [
      "Out-of-hours & weekend moves",
      "IT decommission & recommission",
      "Crate hire and colour-coded floor plans",
      "Dedicated project manager",
    ],
    process: [
      { title: "Site Survey", text: "We audit both premises, access routes and IT infrastructure." },
      { title: "Project Plan", text: "A detailed schedule, floor plan and crate distribution timeline." },
      { title: "Relocation", text: "Crews move overnight or over the weekend to protect trading hours." },
      { title: "Set-Up & Sign-Off", text: "Workstations rebuilt, tested and signed off before Monday morning." },
    ],
    faqs: [
      { q: "Can you move outside working hours?", a: "Yes — most commercial moves happen overnight or across a weekend." },
      { q: "Do you handle IT equipment?", a: "Our team decommissions, transports and reconnects workstations, servers and displays." },
      { q: "Do you offer storage between sites?", a: "Yes, secure short and long-term storage is available." },
    ],
  },
  {
    slug: "packing-services",
    title: "Packing Services",
    short: "Museum-grade packing for every item.",
    description:
      "Full, part or fragile-only packing services using premium double-wall boxes, acid-free tissue and custom crating for antiques and artwork.",
    icon: Package,
    benefits: [
      "Full, part or fragile-only options",
      "Premium double-wall cartons",
      "Custom crating for art & antiques",
      "Detailed inventory & labelling",
    ],
    process: [
      { title: "Materials Delivered", text: "Boxes and materials delivered ahead of your move day." },
      { title: "Systematic Packing", text: "Room-by-room packing with photographic inventory." },
      { title: "Safe Transit", text: "Everything strapped, blanketed and secured in-vehicle." },
      { title: "Unpack (Optional)", text: "We unpack and remove all cartons the same day." },
    ],
    faqs: [
      { q: "Can I just pack fragile items?", a: "Absolutely — many clients pack general items and leave the fragiles to us." },
      { q: "Do you take the boxes away?", a: "Yes, we return to collect all used cartons free of charge." },
      { q: "What about valuables?", a: "High-value items are inventoried separately and can be individually insured." },
    ],
  },
  {
    slug: "furniture-transport",
    title: "Furniture Transport",
    short: "Single items, deliveries & collections.",
    description:
      "One-item, one-price furniture transport across the UK — perfect for online marketplace purchases, showroom deliveries and studio collections.",
    icon: Sofa,
    benefits: [
      "Nationwide same-week slots",
      "Two-person delivery to any room",
      "Fully insured & tracked",
      "Assembly available on request",
    ],
    process: [
      { title: "Book Online", text: "Send us dimensions and postcodes for an instant estimate." },
      { title: "Collection", text: "We collect from seller, showroom or storage." },
      { title: "Delivery", text: "Placed in the room of your choice with packaging removal." },
      { title: "Assembly", text: "Optional flat-pack and reassembly service." },
    ],
    faqs: [
      { q: "Do you offer same-day delivery?", a: "Same-day is available in Greater London subject to crew availability." },
      { q: "Can you deliver upstairs?", a: "Yes — two-person crews are standard so stairs and lifts are no problem." },
      { q: "Is my item insured in transit?", a: "Every job carries Goods-in-Transit cover up to £25,000 as standard." },
    ],
  },
  {
    slug: "additional-transport",
    title: "Additional Transport Services",
    short: "Man & van, courier & pallet solutions.",
    description:
      "Ad-hoc transport for businesses and individuals: man-and-van, urgent courier runs, pallet distribution and inter-site logistics.",
    icon: Truck,
    benefits: [
      "Hourly & fixed-price options",
      "Urgent same-day dispatch",
      "Pallet & bulk distribution",
      "Regular contract routes",
    ],
    process: [
      { title: "Enquire", text: "Share job details and preferred timing." },
      { title: "Confirm", text: "We confirm a driver, vehicle and price." },
      { title: "Collect", text: "Punctual collection with proof of pickup." },
      { title: "Deliver", text: "Signed proof of delivery and photo confirmation." },
    ],
    faqs: [
      { q: "How quickly can you dispatch?", a: "Same-day slots are usually available with 2–3 hours notice in London." },
      { q: "Do you handle multi-drop routes?", a: "Yes — we run multi-drop and contract routes across the UK." },
      { q: "Can I book recurring collections?", a: "We support weekly and monthly contract logistics for businesses." },
    ],
  },
];

export const SERVICE_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export const STORAGE_SERVICE = {
  slug: "storage",
  title: "Storage Solutions",
  short: "Clean, secure, monitored self-storage.",
  icon: Warehouse,
};
