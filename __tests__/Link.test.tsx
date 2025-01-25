import { LinkComponent } from "@/app/components/Link";
import { render, screen } from "@testing-library/react";

describe("LinkComponent", () => {
  it("renders the link with the correct href", () => {
    render(<LinkComponent to="/test">test link</LinkComponent>);

    const linkElement = screen.getByText("test link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/test");
  });
});
