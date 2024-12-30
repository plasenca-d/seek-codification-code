import { LoginUseCase } from "@/features/auth/domain/use-cases/login.use-case";
import { AuthRepository } from "@/features/auth/domain/repositories/auth.repository";

export const LoginUseCaseImpl = (
  authRepository: AuthRepository
): LoginUseCase => {
  return {
    execute: async (email: string, password: string) => {
      return await authRepository.login(email, password);
    },
  };
};
