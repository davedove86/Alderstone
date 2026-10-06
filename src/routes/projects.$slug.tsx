import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PROJECTS, GALLERY } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = PROJECTS.find((item) => item.slug === params.slug);
    return { meta: [{ title: project ? `${project.name} — Alderstone` : "Projects — Alderstone" }] };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const index = PROJECTS.findIndex((item) => item.slug === slug);
  const project = index >= 0 ? PROJECTS[index] : undefined;
  const next = index >= 0 ? PROJECTS[(index + 1) % PROJECTS.length] : undefined;

  return (
    <div className="min-h-svh bg-paper text-ink">
      <SiteHeader />
      <main className="px-5 py-16 md:px-8 md:py-24">
        {project ? (
          <>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Projects", to: "/projects" },
                { label: project.name },
              ]}
            />
            <p className="text-xs tracking-caption text-stone uppercase">{project.kind}</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none text-balance md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-4 text-sm text-stone">
              {project.place}
              <span className="mx-3">/</span>
              <span className="tabular-nums">{project.year}</span>
            </p>
            <img
              src={project.image}
              alt={project.alt}
              className="mt-10 aspect-3/2 w-full rounded-[2rem] object-cover md:aspect-2/1"
            />

            <div className="mt-14 grid gap-8 md:grid-cols-12">
              <p className="text-xs tracking-caption text-stone uppercase md:col-span-3">The building</p>
              <div className="max-w-xl md:col-span-8">
                {project.study.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-pretty text-lg leading-relaxed first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {GALLERY[project.slug]?.map((shot) => (
                <li key={shot.image}>
                  <img src={shot.image} alt={shot.alt} className="aspect-3/2 w-full rounded-[2rem] object-cover" />
                </li>
              ))}
            </ul>

            <div className="mt-16 grid gap-10 border-t border-mortar pt-12 md:grid-cols-12">
              <p className="text-xs tracking-caption text-stone uppercase md:col-span-3">What changed</p>
              <ul className="md:col-span-8">
                {project.changes.map((change) => (
                  <li key={change} className="border-b border-mortar py-4 text-pretty leading-relaxed">
                    {change}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-16 border-t border-mortar">
              {project.facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 border-b border-mortar py-4 md:grid-cols-12 md:gap-8">
                  <dt className="text-xs tracking-caption text-stone uppercase md:col-span-3">{fact.label}</dt>
                  <dd className="md:col-span-8">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {next ? (
              <div className="mt-16 flex flex-col gap-6 border-t border-mortar pt-10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs tracking-caption text-stone uppercase">Next</p>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: next.slug }}
                    className="mt-3 inline-flex font-display text-3xl leading-none hover:text-iron md:text-4xl"
                  >
                    {next.name}
                  </Link>
                </div>
                <Link to="/projects" className="text-sm underline decoration-iron underline-offset-4">
                  All projects
                </Link>
              </div>
            ) : null}
          </>
        ) : (
          <>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Not on the list" }]} />
            <h1 className="font-display text-5xl leading-none">Not on the list.</h1>
            <Link to="/projects" className="mt-8 inline-flex text-sm underline decoration-iron underline-offset-4">
              All projects
            </Link>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
