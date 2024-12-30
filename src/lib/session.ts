"use server";

import { SESSION_COOKIE_NAME } from "@/config/constants/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createSession = async (token: string): Promise<void> => {
  try {
    if (typeof token === "undefined") {
      throw new Error("Undefined token");
    }

    const session = (await cookies()).set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      sameSite: "lax",
      path: "/",
    });

    new Promise((resolve) => {
      if (session) {
        resolve(session);
      }
    });
  } catch (error) {
    console.error("Error generating cookie session", error);
  }
};

export const clearCookieSessionAction = async () => {
  try {
    const deleted = (await cookies()).delete(SESSION_COOKIE_NAME);

    return deleted;
  } catch (error) {
    console.error("Error clearing cookie session", error);
  }
};

export async function getAuthenticatedUser(): Promise<string | undefined> {
  try {
    const session = (await cookies()).get(SESSION_COOKIE_NAME)?.value;

    if (!session) {
      signOut();
      return;
    }

    return session;
  } catch (error) {
    console.error("Error fetching authenticated user", error);
    signOut();
  }
}

export const signOut = async () => {
  try {
    await clearCookieSessionAction();
  } catch (error) {
    console.log("Error signing out", error);
  }

  redirect("/login");
};
