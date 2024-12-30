"use server";

import { userMock } from "@/data/mocks/auth.mock";
import { createSession, signOut } from "@/lib/session";
import { User } from "@/features/users/domain/entities/user.entity";
import { RandomNumberGenerator } from "@/utils/random";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = async (email: string, password: string): Promise<User> => {
  await new Promise((resolve) =>
    setTimeout(resolve, RandomNumberGenerator.randomNumber(1000, 5000))
  );

  const userWithToken = userMock(email);

  await createSession(userWithToken.token);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { token: _, ...user } = userWithToken;

  return { ...user };
};

export const logout = async (): Promise<void> => {
  await new Promise((resolve) =>
    setTimeout(resolve, RandomNumberGenerator.randomNumber(1000, 5000))
  );

  await signOut();
};
