"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "@/components/ui/forms/LoginForm";
import RegisterForm from "@/components/ui/forms/RegisterForm";

export default async function RegisterPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
