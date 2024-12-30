import { AuthDataSource } from "@/features/auth/domain/datasources/auth.datasource";
import { AuthRepository } from "@/features/auth/domain/repositories/auth.repository";

export const AuthRepositoryImpl = (
  dataSource: AuthDataSource
): AuthRepository => {
  return {
    login: dataSource.login,
    logout: dataSource.logout,
  };
};
