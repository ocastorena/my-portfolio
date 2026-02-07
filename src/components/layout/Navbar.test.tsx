import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { vi } from "vitest";

test("scroll buttons call scrollIntoView", () => {
  const scrollIntoView = vi.fn();

  const projects = document.createElement("div");
  projects.id = "projects";
  projects.scrollIntoView = scrollIntoView;
  document.body.appendChild(projects);

  const about = document.createElement("div");
  about.id = "section-2";
  about.scrollIntoView = scrollIntoView;
  document.body.appendChild(about);

  const contact = document.createElement("div");
  contact.id = "contact";
  contact.scrollIntoView = scrollIntoView;
  document.body.appendChild(contact);

  render(<Navbar />);

  fireEvent.click(screen.getByRole("button", { name: /projects/i }));
  fireEvent.click(screen.getByRole("button", { name: /about/i }));
  fireEvent.click(screen.getByRole("button", { name: /contact/i }));

  expect(scrollIntoView).toHaveBeenCalledTimes(3);
});
