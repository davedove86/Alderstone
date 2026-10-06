import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV } from "@/lib/nav";

const INFORMATION = [
  { to: "/privacy", label: "Privacy" },
  { to: "/cookies", label: "Cookies" },
  { to: "/terms", label: "Terms" },
  { to: "/accessibility", label: "Accessibility" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-mortar px-5 py-14 md:px-8 md:py-16">
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        <div>
          <p className="font-display text-4xl leading-none">Alderstane</p>
          <p className="mt-3 text-sm">Barnard Castle</p>
          <p className="mt-6 max-w-xs text-sm text-pretty text-stone">
            Houses, inns and old buildings. Few projects a year, taken carefully, across the North East and the Dales.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>8 Horsemarket, Barnard Castle, DL12 8JQ</span>
            </li>
            <li>
              <a href="tel:+441833640218" className="inline-flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden />
                <span className="underline decoration-iron underline-offset-4">01833 640 218</span>
              </a>
            </li>
            <li>
              <a href="mailto:studio@alderstane.co.uk" className="inline-flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden />
                <span className="underline decoration-iron underline-offset-4">studio@alderstane.co.uk</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs tracking-caption text-stone uppercase">The site</p>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm hover:text-iron">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-sm hover:text-iron">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Information">
          <p className="text-xs tracking-caption text-stone uppercase">Information</p>
          <ul className="mt-4 flex flex-col gap-2">
            {INFORMATION.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm hover:text-iron">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-mortar pt-5 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
        <a
          href="https://www.dovedesign.io"
          className="underline decoration-iron underline-offset-4 hover:text-ink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Design by Dove Design Ltd
        </a>
        <p>Copyright © {new Date().getFullYear()} Alderstane</p>
      </div>
    </footer>
  );
}
