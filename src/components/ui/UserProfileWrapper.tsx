import {
  GetUserProfileResponse,
  getUserProfile,
} from "@/app/actions/profileActions";
import Link from "next/link";
import UserProfile from "./UserProfile";
import { Button } from "./shad-cn/button";

const UserProfileWrapper = async ({ username }: { username: string }) => {
  const userData: GetUserProfileResponse = await getUserProfile(username);

  return (
    <>
      {!userData ? (
        <div className="flex h-[500px] flex-col items-center justify-center gap-4">
          <h2 className="font-bold md:text-xl">User not found.</h2>
          <Link href={"/dashboard"}>
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row gap-4">
          <UserProfile userData={userData} />
          <UserProfile userData={userData} />
        </div>
      )}
    </>
  );
};

export default UserProfileWrapper;
