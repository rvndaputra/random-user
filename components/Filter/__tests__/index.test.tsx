import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import RandomUserApp from "..";

describe("components/Filter", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <RandomUserApp />
      </QueryClientProvider>
    );
  });

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

  it("should render <Filter /> element correctly", () => {
    const form = screen.getByTestId("formRandomUserFilter");
    const searchKeyword = screen.getByLabelText("Search");
    const selectGender = screen.getByLabelText("Gender");
    const btnResetFilter = screen.getByRole("button", { name: "Reset Filter" });

    expect(form).toBeInTheDocument();
    expect(searchKeyword).toBeInTheDocument();
    expect(selectGender).toBeInTheDocument();
    expect(btnResetFilter).toBeInTheDocument();
  });

  it("should fire event correctly", () => {
    const searchKeyword =
      screen.getByPlaceholderText<HTMLInputElement>(/search/i);

    fireEvent.change(searchKeyword, { target: { value: "black swan" } });

    expect(searchKeyword.value).toBe("black swan");
  });
});
