import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Alderstane" }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      kicker="Information"
      title="Privacy"
      lede="What we keep when you write to the practice, and what we do not collect from a visit to this site."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "Alderstane is an architecture practice in Barnard Castle. For anything on this page, write to studio@alderstane.co.uk.",
          ],
        },
        {
          heading: "A visit to the site",
          paragraphs: [
            "Reading these pages does not ask you to make an account, and we do not run analytics or advertising. We do not build a profile of visitors.",
          ],
        },
        {
          heading: "An enquiry",
          paragraphs: [
            "If you email us, we keep that email and anything you attach: the building, the postcode, whether it is listed, and what you want to change.",
            "We use it to decide whether we can take the job, and then to do the work if we are appointed. We do not add you to a mailing list, and we do not sell or pass the correspondence on for marketing.",
            "If we do not take the job, we delete the enquiry once it is clear there will be no appointment. If we are appointed, we keep the project record for as long as the appointment, and the legal record after it, requires.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can ask for a copy of what we hold, ask us to correct it, or ask us to delete it where we are not required to keep it. Write to the studio address above.",
            "You can also complain to the Information Commissioner’s Office if you think we have handled your information badly.",
          ],
        },
      ]}
    />
  );
}
