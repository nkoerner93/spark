import UserProfileWrapper from "@/components/ui/UserProfileWrapper";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

interface Params {
  user: string;
}

export default function UserPage({ params }: { params: Params }) {
  return (
    <section>
      <Suspense fallback={<Loader2 />}>
        <UserProfileWrapper username={params.user} />
      </Suspense>
    </section>
  );
}
