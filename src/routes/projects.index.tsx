import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PROJECTS, type Project } from "@/lib/projects";

const FILTERS = [
  { label: "All", kind: undefined },
  { label: "Houses", kind: "House" },
  { label: "Heritage", kind: "Heritage" },
  { label: "Hospitality", kind: "Hospitality" },
] as const;

type Kind = Project["kind"];

export const Route = createFileRoute("/projects/")({
  validateSearch: (search: Record<string, unknown>): { kind?: Kind } => {
    const kind = search.kind;
    if (kind === "House" || kind === "Heritage" || kind === "Hospitality") return { kind };
    return {};
  },
  head: () => ({ meta: [{ title: "Projects — Alderstone" }] }),
  component: Projects,
});

function summary(kind: Kind | undefined, count: number) {
  const plural = count === 1 ? "" : "s";
  if (kind === "House") return `Showing ${count} house${plural}.`;
  if (kind === "Heritage") return `Showing ${count} heritage project${plural}.`;
  if (kind === "Hospitality") return `Showing ${count} hospitality project${plural}.`;
  return `Showing ${count} project${plural}.`;
}

function Projects() {
  const { kind } = Route.useSearch();
  const shown = [...PROJECTS]
    .filter((project) => (kind ? project.kind === kind : true))
    .sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div className="min-h-svh bg-paper text-ink">
      <SiteHeader />
      <main className="px-5 py-16 md:px-8 md:py-24">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects" }]} />
        <p className="text-xs tracking-caption text-stone uppercase">Work</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none text-balance md:text-7xl">Projects</h1>
        <p className="mt-6 max-w-lg text-lg text-pretty leading-relaxed">
          Houses, heritage and hospitality, across the North East and the Dales.
        </p>
        <div className="mt-10 border-y border-mortar py-5">
          <p id="project-filter-label" className="text-xs tracking-caption text-stone uppercase">
            Filter
          </p>
          <ul aria-labelledby="project-filter-label" className="mt-4 flex flex-wrap gap-3">
            {FILTERS.map((filter) => {
              const current = filter.kind === kind || (!filter.kind && !kind);
              const count = filter.kind
                ? PROJECTS.filter((project) => project.kind === filter.kind).length
                : PROJECTS.length;
              return (
                <li key={filter.label}>
                  <Link
                    to="/projects"
                    search={filter.kind ? { kind: filter.kind } : {}}
                    aria-current={current ? "true" : undefined}
                    className={
                      current
                        ? "inline-flex h-12 items-center gap-3 rounded-md bg-ink px-5 text-base text-paper"
                        : "group inline-flex h-12 items-center gap-3 rounded-md border border-ink px-5 text-base transition-colors hover:border-iron hover:bg-iron hover:text-paper"
                    }
                  >
                    {filter.label}
                    <span className={current ? "text-paper/70 tabular-nums" : "text-stone tabular-nums group-hover:text-paper/80"}>
                      {count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-stone">{summary(kind, shown.length)}</p>
        </div>
        <ul className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-24">
          {shown.map((project) => (
            <li key={project.slug}>
              <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="aspect-3/2 w-full rounded-[2rem] object-cover md:aspect-2/1"
                />
                <div className="mt-5 grid gap-2 md:grid-cols-12 md:items-baseline md:gap-8">
                  <p className="font-display text-3xl leading-none md:col-span-6 md:text-4xl">
                    {project.name}
                    <span className="text-stone">, {project.place}</span>
                  </p>
                  <p className="text-xs tracking-caption text-stone uppercase group-hover:text-iron md:col-span-3">
                    {project.kind}
                  </p>
                  <p className="text-xs tracking-caption text-stone tabular-nums md:col-span-3 md:text-right">
                    {project.year}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
