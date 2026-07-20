import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Aspire Removals home">
          <Logo className="h-9 md:h-10 w-auto" invert={!solid} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                solid ? "text-navy hover:text-primary" : "text-white/90 hover:text-white",
              )}
              activeProps={{
                className: cn(
                  "px-3 py-2 text-sm font-semibold rounded-md",
                  solid ? "text-primary" : "text-white",
                ),
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className={cn(
              "hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors",
              solid ? "text-navy hover:text-primary" : "text-white/90 hover:text-white",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{SITE.phone}</span>
          </a>
          <Link
            to="/quote"
            className="hidden sm:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground btn-glow-accent"
          >
            Get Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md",
              solid ? "text-navy" : "text-white",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-page py-4 flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-base font-medium text-navy hover:text-primary"
                activeProps={{ className: "py-3 text-base font-semibold text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="mt-3 inline-flex justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-accent-foreground"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
