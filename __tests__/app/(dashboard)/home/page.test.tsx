import Home from "@/app/(dashboard)/home/page";
import { renderWithClient } from "@/utils-testing/react-query/render-with-client";
import { QueryClient } from "@tanstack/react-query";
import { screen } from "@testing-library/react";

jest.mock("@/lib/react-query", () => ({
  getQueryClient: jest.fn(() => ({
    prefetchQuery: jest.fn(),
  })),
}));

jest.mock(
  "@/features/todos/application/use-cases/get-todos.use-case.impl",
  () => ({
    GetTodosUseCaseImpl: jest.fn(() => ({
      execute: jest.fn().mockResolvedValue([
        { id: 1, title: "Todo 1", state: "todo" },
        { id: 2, title: "Todo 2", state: "doing" },
      ]),
    })),
  })
);

describe("HomePage", () => {
  it("should render the page correctly", async () => {
    renderWithClient(new QueryClient(), await Home());

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    expect(screen.getByTestId("todos-general-information")).toBeInTheDocument();
    expect(screen.getByTestId("change-theme-fba")).toBeInTheDocument();
  });
});
