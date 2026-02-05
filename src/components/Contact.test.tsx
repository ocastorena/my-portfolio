import { render, screen } from "@testing-library/react";
import { Contact } from "./Contact";

test("renders contact section with actions", () => {
  render(<Contact />);

  expect(
    screen.getByRole("heading", { name: /let's work together/i }),
  ).toBeInTheDocument();

  const emailLink = screen.getByRole("link", { name: /email me/i });
  expect(emailLink).toHaveAttribute("href", "mailto:omarcastorena11@gmail.com");

  const downloadLink = screen.getByRole("link", { name: /download resume/i });
  expect(downloadLink).toHaveAttribute("download");
});
