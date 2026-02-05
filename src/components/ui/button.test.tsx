import { render, screen } from "@testing-library/react";
import { Button } from "./button";

test("renders as a button by default", () => {
  render(<Button>Click Me</Button>);

  expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
});

test("renders as child element when asChild", () => {
  render(
    <Button asChild>
      <a href="/">Home</a>
    </Button>,
  );

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
});
