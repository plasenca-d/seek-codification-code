import { AuthDataSource } from "@/features/auth/domain/datasources/auth.datasource";
import { login, logout } from "../actions/auth.action";
import { User } from "@/features/users/domain/entities/user.entity";

export const AuthDataSourceImpl = (): AuthDataSource => {
  return {
    login: async (email: string, password: string): Promise<User> => {
      return await login(email, password);
    },
    logout: async () => {
      return await logout();
    },
  };
};
