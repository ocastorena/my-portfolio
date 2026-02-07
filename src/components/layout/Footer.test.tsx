import { render, screen } from "@testing-library/react";
import { SITE_CONFIG } from "@/config/site";
import { Footer } from "./Footer";

test("renders footer with current year and links", () => {
  render(<Footer />);

  const year = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(year))).toBeInTheDocument();

  expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
    "href",
    SITE_CONFIG.social.linkedin,
  );
  expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
    "href",
    SITE_CONFIG.social.github,
  );
});
