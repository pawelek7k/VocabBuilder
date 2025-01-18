"use client";
import { usePathname } from "next/navigation";
import { NavLink, navLinks } from "../constants/arrays/navLinks";
import { LinkComponent as Link } from "./Link";
import { Logo } from "./Logo";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full flex justify-evenly border-b border-zinc-100 items-center">
      <Logo />
      <div className="p-4 px-12 border-l-4 rounded-s-full">
        <ul className="flex gap-12">
          {navLinks.map(({ to, label }: NavLink) => (
            <li key={label}>
              <Link
                to={to}
                className={`${pathname === to ? "active" : ""} px-4 py-2`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
