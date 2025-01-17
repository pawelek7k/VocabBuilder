import { NavLink, navLinks } from "../constants/arrays/navLinks";
import { LinkComponent as Link } from "./Link";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="p-4 w-full flex justify-between">
      <Logo />
      <div>
        {navLinks.map(({ to, label }: NavLink) => (
          <Link key={label} to={to}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};
