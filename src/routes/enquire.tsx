import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/enquire")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
});
