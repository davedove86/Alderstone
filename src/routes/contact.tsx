import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const STUDIO = "studio@alderstane.co.uk";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us — Alderstane" }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const telephone = String(data.get("telephone") ?? "");
    const postcode = String(data.get("postcode") ?? "");
    const listed = String(data.get("listed") ?? "");
    const message = String(data.get("message") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      telephone ? `Telephone: ${telephone}` : null,
      `Postcode: ${postcode}`,
      `Listed: ${listed}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${STUDIO}?subject=${encodeURIComponent(`Building at ${postcode}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="min-h-svh bg-paper text-ink">
      <SiteHeader />
      <main className="px-5 py-16 md:px-8 md:py-24">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
        <p className="text-xs tracking-caption text-stone uppercase">Contact Us</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none text-balance md:text-7xl">
          Tell us about the building.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-pretty leading-relaxed">
          The type of building, whether it is listed, the postcode, and what you want to change.
        </p>

        <div className="mt-14 grid gap-16 border-t border-mortar pt-12 md:grid-cols-12">
          <form className="grid gap-8 md:col-span-7" onSubmit={onSubmit}>
            <Field label="Name" name="name" autoComplete="name" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
            <Field label="Telephone" name="telephone" type="tel" autoComplete="tel" />
            <Field label="Postcode" name="postcode" autoComplete="postal-code" required />
            <label className="block">
              <span className="text-xs tracking-caption text-stone uppercase">Listed</span>
              <select
                name="listed"
                defaultValue="Not sure"
                className="mt-2 w-full border-b border-mortar bg-transparent py-3 text-base outline-none focus:border-ink"
              >
                <option>Not sure</option>
                <option>Listed</option>
                <option>Not listed</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs tracking-caption text-stone uppercase">What you want to change</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-y border-b border-mortar bg-transparent py-3 text-base outline-none focus:border-ink"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-14 w-fit items-center rounded-md bg-ink px-7 text-base text-paper transition-colors hover:bg-iron"
            >
              Contact Us
            </button>
            {sent ? (
              <p className="max-w-md text-pretty text-sm text-stone">
                Your email programme should open with this note, addressed to {STUDIO}. If it does not, write to
                that address directly.
              </p>
            ) : null}
          </form>

          <aside className="md:col-span-4 md:col-start-9">
            <p className="text-xs tracking-caption text-stone uppercase">The studio</p>
            <ul className="mt-6 flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>8 Horsemarket, Barnard Castle, DL12 8JQ</span>
              </li>
              <li>
                <a href="tel:+441833640218" className="inline-flex items-center gap-2">
                  <Phone className="size-4 shrink-0" aria-hidden />
                  <span className="underline decoration-iron underline-offset-4">01833 640 218</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${STUDIO}`} className="inline-flex items-center gap-2">
                  <Mail className="size-4 shrink-0" aria-hidden />
                  <span className="underline decoration-iron underline-offset-4">{STUDIO}</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-caption text-stone uppercase">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full border-b border-mortar bg-transparent py-3 text-base outline-none focus:border-ink"
      />
    </label>
  );
}
