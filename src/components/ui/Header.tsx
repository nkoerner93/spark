"use client";

import React, { useState } from "react";
import { Input } from "./shad-cn/input";
import Searchbar from "./Searchbar";
import { Button } from "./shad-cn/button";
import Link from "next/link";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 my-4 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between gap-8">
        <span className="text-2xl font-bold">Spark</span>
        <Searchbar />
        {isLoggedIn ? (
          <span>My Profile</span>
        ) : (
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
