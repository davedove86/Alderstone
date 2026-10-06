import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Alderstone" }] }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      kicker="Information"
      title="Terms"
      lede="These terms cover the use of this website. They are not an appointment to act as your architect."
      sections={[
        {
          heading: "The pages",
          paragraphs: [
            "The projects, fees and stages on this site describe how the practice works. A job starts only when we have agreed it in writing. The feasibility figure, from £2,800 plus VAT, is a starting point for that study, not a quote for the whole building.",
          ],
        },
        {
          heading: "The work shown",
          paragraphs: [
            "Drawings, photographs and text stay with Alderstone, the clients and the photographers. You may look at them here. You may not copy them for another project, or present them as your own.",
          ],
        },
        {
          heading: "Law",
          paragraphs: [
            "These terms are governed by the law of England and Wales. If a dispute about the website itself cannot be settled by writing to studio@alderstone.co.uk, the courts of England and Wales will hear it.",
          ],
        },
      ]}
    />
  );
}
