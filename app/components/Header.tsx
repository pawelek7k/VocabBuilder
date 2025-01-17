import { NavLink, navLinks } from "../constants/arrays/navLinks";
import { LinkComponent as Link } from "./Link";

export const Header = () => {
  return (
    <header className="p-4 w-full flex justify-between">
      {navLinks.map(({ to, label }: NavLink) => (
        <Link key={label} to={to}>
          {label}
        </Link>
      ))}
    </header>
  );
};
