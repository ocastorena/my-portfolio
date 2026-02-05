import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders primary page sections", () => {
  render(<App />);

  expect(
    screen.getByRole("navigation", { name: /main navigation/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /hi, i'm omar/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /about me/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /skills & tools/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /projects/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /let's work together/i }),
  ).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /github/i }).length).toBeGreaterThan(
    0,
  );
});

test("wraps About and Skills in the section-2 container", () => {
  const { container } = render(<App />);

  const wrapper = container.querySelector("#section-2");
  expect(wrapper).toBeInTheDocument();
});
