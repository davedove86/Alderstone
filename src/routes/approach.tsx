import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteHeader } from "@/components/site-header";

const STAGES = [
  {
    n: "01",
    title: "Feasibility",
    line: "A fixed study. It says whether the building is worth taking further. From £2,800 plus VAT.",
  },
  {
    n: "02",
    title: "Survey",
    line: "We instruct the measured survey. We do not pretend to be the surveyor.",
  },
  {
    n: "03",
    title: "Planning",
    line: "Planning applications, listed building consent, and pre-application advice.",
  },
  {
    n: "04",
    title: "Technical design",
    line: "Drawings for building regulations, and the interior where we also did the architecture.",
  },
  {
    n: "05",
    title: "Tender and site",
    line: "A short contractor list. Contract administration through to completion.",
  },
] as const;

export const Route = createFileRoute("/approach")({
  head: () => ({ meta: [{ title: "Approach — Alderstane" }] }),
  component: Approach,
});

function Approach() {
  return (
    <div className="min-h-svh bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="border-b border-mortar px-5 py-16 md:px-8 md:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Approach" }]} />
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-xs tracking-caption text-stone uppercase md:col-span-3">Approach</p>
            <div className="md:col-span-8">
              <h1 className="max-w-3xl text-4xl font-medium tracking-wordmark text-balance md:text-6xl">
                Feasibility, then a decision, then stages.
              </h1>
              <p className="mt-6 max-w-xl text-pretty leading-relaxed">
                No schools, offices or volume housing. A percentage fee on most jobs. A fixed feasibility on the
                small ones.
              </p>
            </div>
          </div>
        </section>

        <ol>
          {STAGES.map((stage) => (
            <li key={stage.n} className="border-b border-mortar">
              <div className="grid gap-3 px-5 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:px-8 md:py-10">
                <p className="text-xs tracking-caption text-stone tabular-nums md:col-span-3">{stage.n}</p>
                <h2 className="text-2xl font-medium tracking-wordmark md:col-span-3">{stage.title}</h2>
                <p className="text-pretty leading-relaxed text-stone md:col-span-6">{stage.line}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="px-5 py-14 md:px-8 md:py-16">
          <Link to="/contact" className="inline-flex h-14 items-center rounded-md bg-ink px-7 text-base text-paper transition-colors hover:bg-iron">
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
}
