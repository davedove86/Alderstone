import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/accessibility")({
  head: () => ({ meta: [{ title: "Accessibility — Alderstane" }] }),
  component: Accessibility,
});

function Accessibility() {
  return (
    <LegalPage
      kicker="Information"
      title="Accessibility"
      lede="The site should be readable without the photographs, and usable with a keyboard."
      sections={[
        {
          heading: "What we aim for",
          paragraphs: [
            "Type can be resized. Links and buttons show a visible focus. Photographs have a written description. We test the pages against the intent of WCAG 2.2 AA.",
          ],
        },
        {
          heading: "If something blocks you",
          paragraphs: [
            "Write to studio@alderstane.co.uk and say which page, and what you were trying to do. We will answer with the information in another form if the page itself will not serve.",
          ],
        },
      ]}
    />
  );
}
