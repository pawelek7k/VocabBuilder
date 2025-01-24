import { render, screen } from "@testing-library/react";
import DictionaryPage from "@/app/(dashboard)/dictionary/page";

it("renders DictionaryPage without crashing", () => {
  render(<DictionaryPage />);

  const myElem = screen.getByText("Add word");

  expect(myElem).toBeInTheDocument();
});
