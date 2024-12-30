"use client";

import { useState } from "react";
import { AlertCircle, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import {
  LoginFormSchema,
  useLoginForm,
} from "@/features/auth/presentation/hooks/useLoginForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { form, loginMutation } = useLoginForm();

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    loginMutation.mutate(data);
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen mx-20">
      <h1 className="text-4xl">Iniciar Sesión</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-full md:w-96 px-8"
        >
          {loginMutation.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Login Error</AlertTitle>
              <AlertDescription>{loginMutation.error.message}</AlertDescription>
            </Alert>
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="on"
                    placeholder="jhon.doe@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl className="">
                    <div className="flex items-center gap-2">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="******"
                        autoComplete="on"
                        className="w-full"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="bg-transparent border-0"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-4 h-12"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? (
              <LoaderCircle className="mr-2 h-6 w-6 animate-spin" />
            ) : (
              "Iniciar Sesión"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
