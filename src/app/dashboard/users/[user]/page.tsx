import UserProfile from "@/components/ui/UserProfile";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

interface Params {
  user: string;
}

export default function UserPage({ params }: { params: Params }) {
  return (
    <section className="mt-20 flex justify-center">
      <Suspense fallback={<Loader2 />}>
        <UserProfile username={params.user} />
      </Suspense>
    </section>
  );
}
