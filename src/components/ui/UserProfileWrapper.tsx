import {
  GetUserProfileResponse,
  getUserProfile,
} from "@/app/actions/profileActions";
import UserProfile from "./UserProfile";

const UserProfileWrapper = async ({ username }: { username: string }) => {
  const userData: GetUserProfileResponse = await getUserProfile(username);
  return <UserProfile userData={userData} />;
};

export default UserProfileWrapper;
