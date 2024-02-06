"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     redirect("/");
  //   }
  // });

  return (
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <div className="flex h-screen w-1/2 items-center justify-center bg-slate-950">
        {children}
      </div>
      <div className="hidden h-screen w-1/2 lg:block">
        <img
          className="h-full w-full object-cover"
          src="/images/auth_background.png"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
