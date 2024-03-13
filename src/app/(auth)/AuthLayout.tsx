"use client";
import { Toaster } from "@/components/ui/shad-cn/toaster";
import { FC, ReactNode } from "react";
import { AUTHIMAGES } from "src/constants/authImageConstants";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <div className="flex h-screen w-full items-center justify-center bg-slate-950 lg:w-1/2">
        {children}
      </div>
      <div className="hidden h-screen w-1/2 lg:block">
        <img className="h-full w-full object-cover" src={AUTHIMAGES[0]} />
      </div>
      <Toaster />
    </div>
  );
};

export default AuthLayout;
