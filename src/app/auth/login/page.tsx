import { AnimatedSide } from "@/auth/presentation/components/animated-side";
import LoginForm from "@/auth/presentation/components/login-form";
import ChangeThemeFBA from "@/components/ui/change-theme-fba";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex gap-10">
        <div className="flex-1 p-5">
          <AnimatedSide />
        </div>
        <div className="flex-1">
          <LoginForm />
        </div>
      </main>
      <ChangeThemeFBA />
    </div>
  );
}
