import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Hero } from "./Hero";

test("renders hero content", () => {
  render(<Hero />);

  expect(
    screen.getByRole("heading", { name: /hi, i'm omar/i }),
  ).toBeInTheDocument();
  expect(screen.getByAltText(/omar castorena/i)).toBeInTheDocument();
});

test("scroll button calls scrollIntoView", () => {
  const scrollIntoView = vi.fn();

  const about = document.createElement("div");
  about.id = "section-2";
  about.scrollIntoView = scrollIntoView;
  document.body.appendChild(about);

  render(<Hero />);

  fireEvent.click(
    screen.getByRole("button", { name: /scroll to about section/i }),
  );

  expect(scrollIntoView).toHaveBeenCalledTimes(1);
});
