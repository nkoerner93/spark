import Searchbar from "./Searchbar";
import { Button } from "./shad-cn/button";
import Link from "next/link";
import { getSession } from "@/app/actions/actions";
import { Menu_LoggedInDropdown } from "./Menu_LoggedInDropdown";
import Spark_Heading from "./Spark_Heading";
import { Zap } from "lucide-react";

const Header = async () => {
  const session = await getSession();
  const sessionData = JSON.parse(JSON.stringify(session));

  return (
    <header className="sticky top-0 z-50 my-4 w-full bg-slate-50">
      <div className="flex h-14 items-center justify-between">
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
        <Searchbar />
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
    </header>
  );
};

export default Header;
