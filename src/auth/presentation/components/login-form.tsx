"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen mx-20">
      <h1 className="text-4xl">Iniciar Sesión</h1>
      <form className="flex flex-col gap-3 w-full md:w-96 px-8">
        <label htmlFor="email">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            autoComplete="email"
            required
          />
        </label>
        <div className="flex">
          <label htmlFor="password w-full" className="flex gap-2">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="bg-transparent border-0"
            >
              {}
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </label>
        </div>
        <Button type="submit" className="w-full mt-4 h-12">
          Ingresar
        </Button>
      </form>
    </div>
  );
}
