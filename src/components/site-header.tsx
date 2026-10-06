import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/nav";

function isCurrent(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 bg-paper text-ink">
      <div className="relative flex h-20 items-center justify-between px-5 md:h-24 md:px-8">
        <Link to="/" className="relative z-10 block" aria-label="Alderstone, home">
          <span className="block font-display text-[1.7rem] leading-none md:text-[2rem]">Alderstone</span>
          <span className="mt-1 block text-sm leading-none">Barnard Castle</span>
        </Link>

        <nav
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const current = isCurrent(pathname, item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={current ? "page" : undefined}
                className="flex flex-col items-center gap-1.5 font-display text-base hover:text-iron"
              >
                {item.label}
                <span className={current ? "size-1.5 rounded-full bg-ink" : "size-1.5"} aria-hidden />
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden h-14 items-center rounded-md bg-ink px-7 text-base text-paper transition-colors hover:bg-iron lg:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="site-menu" className="fixed inset-0 z-40 flex flex-col bg-paper text-ink lg:hidden">
          <div className="flex h-20 items-center justify-between px-5">
            <Link to="/" className="font-display text-[1.7rem] leading-none">
              Alderstone
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" aria-hidden />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="flex flex-1 flex-col px-5 py-8" aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV.map((item) => {
                const current = isCurrent(pathname, item.to);
                return (
                  <li key={item.to} className="border-b border-mortar">
                    <Link
                      to={item.to}
                      aria-current={current ? "page" : undefined}
                      className="flex h-14 items-center gap-3 font-display text-2xl"
                    >
                      {current ? <span className="size-1.5 rounded-full bg-ink" aria-hidden /> : null}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="border-b border-mortar">
                <Link to="/contact" className="flex h-14 items-center font-display text-2xl">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
