import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hospitality")({
  beforeLoad: () => {
    throw redirect({ to: "/projects", search: { kind: "Hospitality" } });
  },
});
