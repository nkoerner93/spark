import { getSession } from "@/app/actions/actions";
import { SessionData } from "../../../../lib/lib";

export default async function ProfileSettings() {
  const session = await getSession();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-primary">Account-Settings</h2>
      <div className="flex flex-row gap-2">
        <h3 className="font-bold">Accountname:</h3>
        <span> {session.username}</span>
      </div>
    </div>
  );
}
