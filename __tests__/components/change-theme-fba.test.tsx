import ChangeThemeFBA from "@/components/ui/change-theme-fba";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("ChangeThemeFBA", () => {
  it("should toggle theme when button is clicked", () => {
    const setThemeMock = jest.fn();
    const useThemeMock = jest.requireMock("next-themes").useTheme;

    useThemeMock.mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });

    render(<ChangeThemeFBA />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });
});
