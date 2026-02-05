import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

test("renders skills section", () => {
  render(<Skills />);

  expect(
    screen.getByRole("heading", { name: /skills & tools/i }),
  ).toBeInTheDocument();
  expect(screen.getByText("JavaScript")).toBeInTheDocument();
});
