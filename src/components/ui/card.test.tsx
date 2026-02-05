import { render, screen } from "@testing-library/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

test("renders card slots", () => {
  render(
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>Card content</CardContent>
      <CardFooter>Card footer</CardFooter>
    </Card>,
  );

  expect(screen.getByText("Card Title")).toBeInTheDocument();
  expect(screen.getByText("Card content")).toBeInTheDocument();
  expect(screen.getByText("Card footer")).toBeInTheDocument();
});
