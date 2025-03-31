import { Metadata } from "next";
import { LoginButton } from "@/components/auth/LoginButton";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center py-10">
      <div className="w-full max-w-md space-y-8 px-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
        <LoginButton />
      </div>
    </div>
  );
} 