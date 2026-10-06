export const NAV = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/practice", label: "Practice" },
  { to: "/approach", label: "Approach" },
] as const;

export type NavPath = (typeof NAV)[number]["to"];
