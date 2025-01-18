export type NavLink = {
    to: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { to: "/dictionary", label: "Dictionary" },
    { to: "/recommend", label: "Recommend" },
    { to: "/training", label: "Training" },
];