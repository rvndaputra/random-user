import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home", () => {
  it("should render <Home /> element correctly", () => {
    render(<Home />);
    const element = screen.getByRole("heading", { name: /Welcome/ });

    expect(element).toBeInTheDocument();
  });
});
