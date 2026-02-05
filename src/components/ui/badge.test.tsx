import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

test("renders badge content", () => {
  render(<Badge>New</Badge>);

  expect(screen.getByText("New")).toBeInTheDocument();
});
