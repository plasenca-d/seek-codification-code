import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import LoginPage from "@/app/auth/login/page";
import { QueryClient } from "@tanstack/react-query";
import { renderWithClient } from "@/utils-testing/react-query/render-with-client";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
    };
  },
}));

describe("LoginPage", () => {
  it("should render the page correctly", () => {
    renderWithClient(new QueryClient(), <LoginPage />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByTestId("animated-side")).toBeInTheDocument();
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByTestId("change-theme-fba")).toBeInTheDocument();
  });
});
