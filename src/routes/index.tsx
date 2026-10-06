import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FEATURED, FURTHER } from "@/lib/projects";

const OFFERS = [
  {
    kind: "House",
    label: "Houses",
    line: "Extensions, new houses and barns.",
  },
  {
    kind: "Heritage",
    label: "Heritage",
    line: "Listed consent, repair, and a building still in use.",
  },
  {
    kind: "Hospitality",
    label: "Hospitality",
    line: "Inns and dining rooms. One project at a time.",
  },
] as const;

const STAGES = [
  { n: "01", title: "Feasibility", line: "A fixed study, before anyone draws a planning application." },
  { n: "02", title: "Survey", line: "We instruct the measured survey. We are not the surveyor." },
  { n: "03", title: "Planning", line: "Planning, listed building consent, and pre-application advice." },
  { n: "04", title: "Technical", line: "Building regulations, and the interior where we did the architecture." },
  { n: "05", title: "Site", line: "A short contractor list, then the job through to completion." },
] as const;

const INN = FURTHER.find((project) => project.slug === "black-bull");

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-svh bg-paper text-ink">
      <a
        href="#practice"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <div className="px-5 pt-6 md:px-8">
          <Breadcrumbs items={[{ label: "Home" }]} />
        </div>
        <section className="px-4 md:px-6" aria-label="Featured project">
          <div className="relative h-[calc(100svh-5rem)] min-h-[28rem] overflow-hidden rounded-[2rem] md:h-[calc(100svh-6rem)]">
            <img
              src={FEATURED.image}
              alt={FEATURED.alt}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-10 md:pb-12">
              <p className="text-xs tracking-caption text-paper uppercase">
                {FEATURED.name}, {FEATURED.place}
                <span className="mx-3 text-paper/60">/</span>
                <span className="tabular-nums">{FEATURED.year}</span>
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl leading-none font-medium text-balance text-paper md:text-7xl">
                Houses, inns and old buildings.
              </h1>
            </div>
          </div>
        </section>

        <section id="practice" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="text-xs tracking-caption text-stone uppercase md:col-span-3">The practice</p>
            <div className="md:col-span-8">
              <h2 className="max-w-xl font-display text-4xl leading-none text-balance md:text-6xl">
                Five people, above a shop in Barnard Castle.
              </h2>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed">
                Ruth Alderstone and Tom Greaves. About eight projects a year, across the North East and the
                Dales. No schools, offices or volume housing.
              </p>
              <Link
                to="/practice"
                className="mt-8 inline-flex text-sm underline decoration-iron underline-offset-4"
              >
                The practice
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 px-5 pb-16 md:px-8 md:pb-24">
          <div className="mb-8 flex items-baseline justify-between gap-6">
            <p className="text-xs tracking-caption text-stone uppercase">Selected work</p>
            <Link to="/projects" className="text-sm underline decoration-iron underline-offset-4">
              All projects
            </Link>
          </div>
          <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
            {FURTHER.map((project) => (
              <li key={project.slug}>
                <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="aspect-3/2 w-full rounded-2xl object-cover"
                  />
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <p className="font-display text-xl">
                      {project.name}
                      <span className="text-stone">, {project.place}</span>
                    </p>
                    <p className="text-xs tracking-caption text-stone tabular-nums">{project.year}</p>
                  </div>
                  <p className="mt-1 text-xs tracking-caption text-stone uppercase group-hover:text-iron">
                    {project.kind}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="What we do">
          <ul className="border-t border-mortar">
            {OFFERS.map((offer) => (
              <li key={offer.kind} className="border-b border-mortar">
                <Link
                  to="/projects"
                  search={{ kind: offer.kind }}
                  className="grid gap-2 px-5 py-8 hover:bg-mortar/40 md:grid-cols-12 md:items-baseline md:gap-8 md:px-8"
                >
                  <span className="text-xs tracking-caption text-stone uppercase md:col-span-3">
                    {offer.label}
                  </span>
                  <span className="font-display text-3xl leading-none md:col-span-8 md:text-4xl">
                    {offer.line}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {INN ? (
          <section className="px-4 py-16 md:px-6 md:py-24" aria-label="Hospitality">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] md:min-h-[36rem]">
              <img src={INN.image} alt={INN.alt} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="relative flex min-h-[28rem] flex-col justify-end px-6 py-8 md:min-h-[36rem] md:px-10 md:py-12">
                <p className="text-xs tracking-caption text-paper uppercase">
                  {INN.name}, {INN.place}
                  <span className="mx-3 text-paper/60">/</span>
                  <span className="tabular-nums">{INN.year}</span>
                </p>
                <h2 className="mt-4 max-w-xl font-display text-4xl leading-none text-balance text-paper md:text-6xl">
                  One inn at a time.
                </h2>
                <p className="mt-4 max-w-md text-pretty text-paper/90">
                  Dining rooms and a few bedrooms. The next hospitality job waits until this one is on site.
                </p>
                <Link
                  to="/projects"
                  search={{ kind: "Hospitality" }}
                  className="mt-8 inline-flex h-14 w-fit items-center rounded-md bg-paper px-7 text-base text-ink transition-colors hover:bg-iron hover:text-paper"
                >
                  Hospitality
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="grid gap-8 border-t border-mortar pt-16 md:grid-cols-12 md:pt-20">
            <div className="md:col-span-4">
              <p className="text-xs tracking-caption text-stone uppercase">Where a job starts</p>
              <h2 className="mt-4 max-w-sm font-display text-4xl leading-none text-balance">
                A feasibility before a planning application.
              </h2>
              <p className="mt-6 max-w-sm text-pretty leading-relaxed text-stone">
                From £2,800 plus VAT. Most of the work after that is a percentage fee.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
              </div>
            </div>
            <ol className="md:col-span-7 md:col-start-6">
              {STAGES.map((stage) => (
                <li key={stage.n} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-mortar py-5">
                  <p className="text-xs tracking-caption text-stone tabular-nums">{stage.n}</p>
                  <div>
                    <h3 className="font-display text-2xl leading-none">{stage.title}</h3>
                    <p className="mt-2 text-pretty text-stone">{stage.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
