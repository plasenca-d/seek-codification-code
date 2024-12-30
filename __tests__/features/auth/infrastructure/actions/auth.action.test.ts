import {
  login,
  logout,
} from "@/features/auth/infrastructure/actions/auth.action";
import { userMock } from "@/data/mocks/auth.mock";
import { createSession, signOut } from "@/lib/session";
import { UserWithToken } from "@/features/users/domain/entities/user.entity";

jest.mock("@/data/mocks/auth.mock", () => ({
  userMock: jest.fn(),
}));

jest.mock("@/lib/session", () => ({
  createSession: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock("@/utils/random", () => ({
  RandomNumberGenerator: {
    randomNumber: jest.fn().mockReturnValue(1000),
  },
}));

describe("Auth Actions", () => {
  it("should return user data and create a session", async () => {
    const staticDate = new Date(2023, 0, 1);

    const mockUser: UserWithToken = {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      token: "mock-token",
      createdAt: staticDate,
      updatedAt: staticDate,
    };

    (userMock as jest.Mock).mockReturnValue(mockUser);

    const email = "john@example.com";
    const password = "password123";

    const user = await login(email, password);

    expect(userMock).toHaveBeenCalledWith(email);

    expect(createSession).toHaveBeenCalledWith(mockUser.token);

    expect(user).toEqual({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      createdAt: staticDate,
      updatedAt: staticDate,
    });
  });

  it("should logout", async () => {
    await logout();

    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
