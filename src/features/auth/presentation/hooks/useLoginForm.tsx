import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { LoginUseCaseImpl } from "@/features/auth/application/use-cases/login.use-case.impl";
import { AuthRepositoryImpl } from "@/features/auth/infrastructure/repositories/auth.repository.impl";
import { AuthDataSourceImpl } from "@/features/auth/infrastructure/datasources/auth.datasource.impl";
import { useAuthStore } from "../store/useAuth";

const LoginUser = LoginUseCaseImpl(AuthRepositoryImpl(AuthDataSourceImpl()));

export const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Ingresa un correo válido",
  }),
  password: z.string().min(1, {
    message: "Agrega tu contraseña",
  }),
});

export const useLoginForm = () => {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: z.infer<typeof LoginFormSchema>) => {
      const user = await LoginUser.execute(data.email, data.password);

      login(user);

      return user;
    },
    onError: (error) => console.log(error),
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return {
    form,
    loginMutation,
  };
};
