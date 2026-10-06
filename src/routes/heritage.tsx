import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/heritage")({
  beforeLoad: () => {
    throw redirect({ to: "/projects", search: { kind: "Heritage" } });
  },
});
