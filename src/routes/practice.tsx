import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const PEOPLE = [
  {
    name: "Ruth Alderstane",
    role: "Architect",
    line: "Sets the jobs up, and stays with them through to the end.",
  },
  {
    name: "Tom Greaves",
    role: "Architect",
    line: "Listed buildings, and the inns.",
  },
  {
    name: "Ellen Shaw",
    role: "Architectural assistant",
    line: "The drawings, and the model when a model is needed.",
  },
  {
    name: "Paul Metcalfe",
    role: "Technician",
    line: "Building regulations, and the details that have to be right.",
  },
  {
    name: "Jane Bell",
    role: "Practice manager",
    line: "The diary, the fees, and the post.",
  },
] as const;

const TAKES = [
  { label: "Houses", line: "Extensions, new houses and barns, in the North East and the Dales." },
  { label: "Heritage", line: "Listed consent and repair, for a building that is still used." },
  { label: "Hospitality", line: "Inns and dining rooms. One of these at a time." },
  { label: "Not taken", line: "Schools, offices, and volume housing. Interiors only where we did the architecture." },
] as const;

export const Route = createFileRoute("/practice")({
  head: () => ({ meta: [{ title: "Practice — Alderstane" }] }),
  component: Practice,
});

function Practice() {
  return (
    <div className="min-h-svh bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Practice" }]} />
          <p className="text-xs tracking-caption text-stone uppercase">Practice</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none text-balance md:text-7xl">
            Five people, above a shop in Barnard Castle.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty leading-relaxed">
            Ruth Alderstane and Tom Greaves. About eight projects a year. That is the point.
          </p>
          <img
            src="/images/practice.jpg"
            alt="The drawing office above the shop in Horsemarket: two boards, a sash window, and rolls of paper."
            className="mt-12 aspect-3/2 w-full rounded-[2rem] object-cover md:aspect-2/1"
          />
        </section>

        <section className="border-t border-mortar px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="text-xs tracking-caption text-stone uppercase md:col-span-3">The room</p>
            <div className="max-w-xl md:col-span-8">
              <p className="text-pretty text-lg leading-relaxed">
                The office is one room at 8 Horsemarket, above the shop. Drawings are still pinned up. The
                window faces the street, and the work stays in the North East and the Dales, close enough to
                visit.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-stone">
                Eight projects is the limit. A ninth would mean someone was not in the building often enough.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-mortar">
          <div className="px-5 pt-16 md:px-8 md:pt-20">
            <p className="text-xs tracking-caption text-stone uppercase">People</p>
          </div>
          <ol>
            {PEOPLE.map((person, index) => (
              <li key={person.name} className="border-b border-mortar">
                <div className="grid gap-2 px-5 py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:px-8 md:py-8">
                  <p className="text-xs tracking-caption text-stone tabular-nums md:col-span-3">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="md:col-span-4">
                    <h2 className="font-display text-2xl leading-none md:text-3xl">{person.name}</h2>
                    <p className="mt-2 text-xs tracking-caption text-stone uppercase">{person.role}</p>
                  </div>
                  <p className="text-pretty leading-relaxed md:col-span-5">{person.line}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-b border-mortar">
          <div className="px-5 pt-16 md:px-8 md:pt-20">
            <p className="text-xs tracking-caption text-stone uppercase">What we take</p>
          </div>
          <ul>
            {TAKES.map((item) => (
              <li key={item.label} className="border-b border-mortar last:border-b-0">
                <div className="grid gap-2 px-5 py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:px-8">
                  <p className="text-xs tracking-caption text-stone uppercase md:col-span-3">{item.label}</p>
                  <p className="text-pretty text-lg leading-relaxed md:col-span-8">{item.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-wrap gap-3 px-5 py-14 md:px-8 md:py-16">
          <Link
            to="/contact"
            className="inline-flex h-14 items-center rounded-md bg-ink px-7 text-base text-paper transition-colors hover:bg-iron"
          >
            Contact Us
          </Link>
          <Link
            to="/approach"
            className="inline-flex h-14 items-center rounded-md border border-ink px-7 text-base transition-colors hover:border-iron hover:bg-iron hover:text-paper"
          >
            The stages
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
