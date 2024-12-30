import Login from "@/app/login/page";
import { render } from "@testing-library/react";
import { redirect } from "next/navigation";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("LoginRedirectPage", () => {
  it("should redirect to login page", () => {
    render(<Login />);

    expect(redirect).toHaveBeenCalledWith("/auth/login");
  });
});
