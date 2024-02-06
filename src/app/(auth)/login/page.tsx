"use client";

import AuthLayout from "@/app/(auth)/AuthLayout";
import LoginForm from "@/app/(auth)/login/components/LoginForm";

export default async function RegisterPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
