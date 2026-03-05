import { FirstTest } from "./FirstTest";
import { render } from "@testing-library/react";

describe("First component", () => {
  it("Should render the heading", () => {
    const { getByRole } = render(<FirstTest />);
    const heading = getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
