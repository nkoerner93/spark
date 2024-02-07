"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { AUTHIMAGES } from "src/constants/authImageConstants";

interface AuthLayoutProps {
  children: ReactNode;
}

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * AUTHIMAGES.length);
  return AUTHIMAGES[randomIndex];
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const randomImage = getRandomImage();

  return (
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <div className="flex h-screen w-1/2 items-center justify-center bg-slate-950">
        {children}
      </div>
      <div className="hidden h-screen w-1/2 lg:block">
        <img className="h-full w-full object-cover" src={randomImage} />
      </div>
    </div>
  );
};

export default AuthLayout;
