import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type Section = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  kicker: string;
  title: string;
  lede: string;
  sections: Section[];
};

export function LegalPage({ kicker, title, lede, sections }: LegalPageProps) {
  return (
    <div className="min-h-svh bg-paper text-ink">
      <SiteHeader />
      <main className="px-5 py-16 md:px-8 md:py-24">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: title }]} />
        <p className="text-xs tracking-caption text-stone uppercase">{kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-none text-balance md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-pretty leading-relaxed">{lede}</p>
        <div className="mt-14 max-w-2xl border-t border-mortar">
          {sections.map((section) => (
            <section key={section.heading} className="border-b border-mortar py-8">
              <h2 className="font-display text-2xl leading-none">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-pretty leading-relaxed text-stone">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
