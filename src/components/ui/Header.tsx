import { getSession } from "@/app/actions/actions";
import { Zap } from "lucide-react";
import Link from "next/link";
import { Menu_Dropdown } from "./Menu_Dropdown";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import Spark_Heading from "./Spark_Heading";
import { Button } from "./shad-cn/button";

const Header = async () => {
  const session = await getSession();
  const sessionData = JSON.parse(JSON.stringify(session));

  return (
    <header className="w-full border-b-[1px] py-2">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-8">
        <span className="font-bold">
          <Link href={"/"}>
            <div className="flex flex-row items-center gap-2">
              <Zap className="text-orange-600" />
              <Spark_Heading fontweight="font-bold" size="text-lg">
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
              <Menu_Dropdown session={sessionData} />
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
