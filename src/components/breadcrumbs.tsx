import { Link } from "@tanstack/react-router";

export type Crumb = {
  label: string;
  to?:
    | "/"
    | "/projects"
    | "/practice"
    | "/approach"
    | "/contact"
    | "/privacy"
    | "/cookies"
    | "/terms"
    | "/accessibility";
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="text-stone" aria-hidden="true">
                  /
                </span>
              ) : null}
              {last || !item.to ? (
                <span className="text-ink" aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="text-stone hover:text-iron">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
