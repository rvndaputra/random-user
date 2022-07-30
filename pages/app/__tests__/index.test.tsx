import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import RandomUserApp from "..";

describe("RandomUserApp", () => {
  const queryClient = new QueryClient();

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  it("should render <RandomUserApp /> element correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RandomUserApp />
      </QueryClientProvider>
    );

    const heading = screen.getByRole("heading", {
      name: "Example With Search and Filter",
    });
    const filter = screen.getByTestId("formRandomUserFilter");
    const table = screen.getByTestId("tableRandomUser");

    expect(heading).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(table).toBeInTheDocument();
  });
});
