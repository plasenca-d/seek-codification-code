import { User } from "@/features/users/domain/entities/user.entity";

export interface AuthDataSource {
  login(email: string, password: string): Promise<User>;
  logout(): Promise<void>;
}
