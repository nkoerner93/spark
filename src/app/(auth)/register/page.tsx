"use client";

import AuthLayout from "@/app/(auth)/AuthLayout";
import RegisterForm from "@/app/(auth)/register/components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
