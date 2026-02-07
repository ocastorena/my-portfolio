import { render, screen } from "@testing-library/react";
import { About } from "./About";

test("renders about section", () => {
  render(<About />);

  expect(
    screen.getByRole("heading", { name: /about me/i }),
  ).toBeInTheDocument();
});
