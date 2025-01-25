import { LinkComponent } from "@/app/components/Link";
import { LinkType } from "@/types/LinkType";
import { render, screen } from "@testing-library/react";

jest.mock("@/app/components/Link", () => ({
  LinkComponent: ({ to, children, ...rest }: LinkType) => (
    <a href={to} {...rest}>
      {children}
    </a>
  ),
}));

describe("LinkComponent", () => {
  it("renders the link with the correct href", () => {
    render(<LinkComponent to="/test">test link</LinkComponent>);

    const linkElement = screen.getByRole("link", { name: /test link/i });
    expect(linkElement).toHaveAttribute("href", "/test");
  });
});
