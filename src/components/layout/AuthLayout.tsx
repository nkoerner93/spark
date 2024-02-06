import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <div className="w-1/2">{children}</div>
      <div className="w-1/2 md:visible">Image here</div>
    </div>
  );
};

export default AuthLayout;
