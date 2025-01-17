import { NavLink, navLinks } from "../constants/navLinks";
import { LinkComponent as Link } from "./Link";

export const Header = () => {
  return (
    <header>
      {navLinks.map(({ to, label }: NavLink) => (
        <Link key={label} to={to}>
          {label}
        </Link>
      ))}
    </header>
  );
};
