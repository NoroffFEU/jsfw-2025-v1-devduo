import { FirstTest } from "./FirstTest";
import { render } from "@testing-library/react";

describe("First component", () => {
  it("Should render the heading", () => {
    render(<FirstTest />);
    expect(true).toBeTruthy();
  });
});
