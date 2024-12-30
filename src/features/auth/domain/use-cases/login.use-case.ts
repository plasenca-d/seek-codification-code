import { User } from "@/features/users/domain/entities/user.entity";
export interface LoginUseCase {
  execute: (email: string, password: string) => Promise<User>;
}
