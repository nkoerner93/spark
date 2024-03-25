"use client";

import AuthLayout from "@/app/(auth)/AuthLayout";
import LoginForm from "@/app/(auth)/login/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
