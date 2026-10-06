import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/houses")({
  beforeLoad: () => {
    throw redirect({ to: "/projects", search: { kind: "House" } });
  },
});
