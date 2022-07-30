import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home", () => {
  it("should render <Home /> element correctly", () => {
    render(<Home />);
    const element = screen.getByRole("heading", { name: /Welcome/ });

    expect(element).toBeInTheDocument();
  });
});
