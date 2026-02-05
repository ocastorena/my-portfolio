import { render, screen } from "@testing-library/react";
import { Projects } from "./Projects";
import { projects } from "@/data/projects";

test("renders projects list", () => {
  render(<Projects />);

  expect(
    screen.getByRole("heading", { name: /projects/i }),
  ).toBeInTheDocument();

  for (const project of projects) {
    expect(screen.getByText(project.title)).toBeInTheDocument();
  }

  expect(screen.getAllByText("Live Demo")).toHaveLength(projects.length);
  expect(screen.getAllByText("GitHub Repo")).toHaveLength(projects.length);
});
