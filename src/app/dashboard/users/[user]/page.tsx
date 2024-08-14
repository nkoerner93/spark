import { getUserByName } from "@/app/api/memberApi";
import { notFound } from "next/navigation";

interface Params {
  user: string;
}

export default async function UserPage({ params }: { params: Params }) {
  const { user } = params;
  const userData = await getUserByName(user);

  if (!userData) {
    notFound();
  }

  return (
    <div className="flex-col gap-2">
      <div>You are on the profile page of user: {userData.username}</div>
      <div>Profile Status: {user}</div>
    </div>
  );
}
