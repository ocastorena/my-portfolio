import { render, screen } from "@testing-library/react";
import { SITE_CONFIG } from "@/config/site";
import { Contact } from "./Contact";

test("renders contact section with actions", () => {
  render(<Contact />);

  expect(
    screen.getByRole("heading", { name: /let's work together/i }),
  ).toBeInTheDocument();

  const emailLink = screen.getByRole("link", { name: /email me/i });
  expect(emailLink).toHaveAttribute("href", `mailto:${SITE_CONFIG.email}`);

  expect(
    screen.getByRole("button", { name: /download resume/i }),
  ).toBeInTheDocument();
});
