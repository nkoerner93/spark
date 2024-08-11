// ProfileSettings.tsx
import PublicProfileButtons from "./PublicProfileButtons";
import { getProfile } from "@/app/actions/profileActions";

export default async function ProfileSettings() {
  const profile = await getProfile();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-primary">Account-Settings</h2>
      <div className="flex flex-row gap-2">
        <h3 className="font-bold">Accountname:</h3>
        <span>{profile.session.username}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Profile:</h3>
        {profile.user ? (
          <PublicProfileButtons initialIsPublic={profile.user.isPublic} />
        ) : (
          <span>No User found.</span>
        )}
      </div>
    </div>
  );
}
