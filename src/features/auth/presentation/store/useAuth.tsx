import { User } from "@/features/users/domain/entities/user.entity";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const authStore: StateCreator<AuthState> = (set) => ({
  isAuthenticated: false,
  user: null,
  login: (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));

    set({ isAuthenticated: true, user });
  },
  logout: () => {
    localStorage.removeItem("user");

    set({ isAuthenticated: false, user: null });
  },
});

export const useAuthStore = create<AuthState>()(
  persist(authStore, { name: "auth" })
);
