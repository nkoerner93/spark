import { getSession } from "@/app/actions/actions";
import { notFound } from "next/navigation";

interface Params {
  user: string;
}

export default async function UserPage({ params }: { params: Params }) {
  const userData = await getSession();

  if (!userData) {
    notFound();
  }

  return (
    <div className="flex-col gap-2">
      <div>You are on the profile page of user: {userData.username}</div>
    </div>
  );
}
