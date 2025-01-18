import { NavLink, navLinks } from "../constants/arrays/navLinks";
import { LinkComponent as Link } from "./Link";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="p-4 w-full flex justify-between">
      <Logo />
      <ul className="flex gap-12">
        {navLinks.map(({ to, label }: NavLink) => (
          <li key={label}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
