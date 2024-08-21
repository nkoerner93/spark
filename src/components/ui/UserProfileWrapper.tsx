import {
  GetUserProfileResponse,
  getUserProfile,
} from "@/app/actions/profileActions";
import Link from "next/link";
import UserProfile_FavoriteSeries from "./UserProfile_FavoriteSeries";
import UserProfile_Profile from "./UserProfile_Profile";
import { Button } from "./shad-cn/button";

const UserProfileWrapper = async ({ username }: { username: string }) => {
  const userData: GetUserProfileResponse = await getUserProfile(username);

  return (
    <>
      {!userData ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="font-bold md:text-xl">User not found.</h2>
          <Link href={"/dashboard"}>
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row gap-4">
          <UserProfile_Profile userData={userData} />
          <UserProfile_FavoriteSeries userData={userData} />
        </div>
      )}
    </>
  );
};

export default UserProfileWrapper;
