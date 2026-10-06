import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteHeader } from "@/components/site-header";

type InteriorPageProps = {
  kicker: string;
  title: string;
  lede: string;
};

export function InteriorPage({ kicker, title, lede }: InteriorPageProps) {
  return (
    <div className="min-h-svh bg-paper text-ink">
      <SiteHeader />
      <main className="px-5 py-16 md:px-8 md:py-24">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: kicker }]} />
        <p className="text-xs tracking-caption text-stone uppercase">{kicker}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-wordmark text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-pretty leading-relaxed">{lede}</p>
      </main>
    </div>
  );
}
