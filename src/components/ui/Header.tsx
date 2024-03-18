import Searchbar from "./Searchbar";
import { Button } from "./shad-cn/button";
import Link from "next/link";
import { getSession } from "@/app/actions/actions";
import { Menu_LoggedInDropdown } from "./Menu_LoggedInDropdown";

const Header = async () => {
  const session = await getSession();
  const sessionData = JSON.parse(JSON.stringify(session));

  return (
    <header className="sticky top-0 z-50 my-4 w-full">
      <div className="flex h-14 items-center justify-between gap-8">
        <span className="text-2xl font-bold">
          <Link href={session.isLoggedIn ? "/dashboard" : "/"}>Spark</Link>
        </span>
        <Searchbar />
        {session.isLoggedIn ? (
          <span>
            <Menu_LoggedInDropdown session={sessionData} />
          </span>
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
