import { Button } from "./shad-cn/button";
import Link from "next/link";
import { getSession } from "@/app/actions/actions";
import { Menu_LoggedInDropdown } from "./Menu_LoggedInDropdown";
import Spark_Heading from "./Spark_Heading";
import { Zap } from "lucide-react";
import NavBar from "./NavBar";
import { Separator } from "./shad-cn/separator";
import MobileMenu from "./MobileMenu";

const Header = async () => {
  const session = await getSession();
  const sessionData = JSON.parse(JSON.stringify(session));

  return (
    <header className="w-full border-b-[1px]  p-4">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
        <span className="text-2xl font-bold">
          <Link href={session.isLoggedIn ? "/dashboard" : "/"}>
            {" "}
            <div className="flex flex-row items-center gap-2">
              <Zap className="text-orange-600" />
              <Spark_Heading fontweight="font-bold" size="text-2xl">
                Spark
              </Spark_Heading>
            </div>
          </Link>
        </span>
        <NavBar />
        <div className="flex flex-row items-center gap-4">
          <MobileMenu />
          {session.isLoggedIn ? (
            <span>
              <Menu_LoggedInDropdown session={sessionData} />
            </span>
          ) : (
            <Link href={"/login"}>
              <Button data-test-loginbutton="login-button">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
