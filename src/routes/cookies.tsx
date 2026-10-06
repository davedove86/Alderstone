import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookies — Alderstane" }] }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage
      kicker="Information"
      title="Cookies"
      lede="This site does not use analytics, advertising, or preference cookies."
      sections={[
        {
          heading: "What a visit sets",
          paragraphs: [
            "Looking through the work does not require a cookie. We do not use a measurement tool, a chat widget, or an advertising tag, so there is nothing optional to accept or refuse.",
          ],
        },
        {
          heading: "If that changes",
          paragraphs: [
            "If we later add a cookie that is not required to show the page, we will say so here before it is set, and we will ask first.",
          ],
        },
      ]}
    />
  );
}
