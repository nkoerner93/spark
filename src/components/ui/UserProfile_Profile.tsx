// components/UserProfile.tsx
import { GetUserProfileResponse } from "@/app/actions/profileActions";
import { Avatar, AvatarFallback } from "@/components/ui/shad-cn/avatar";
import { Button } from "@/components/ui/shad-cn/button";
import { Card, CardHeader } from "./shad-cn/card";

type UserProfileProps = {
  userData: GetUserProfileResponse;
};

const UserProfile_Profile: React.FC<UserProfileProps> = ({ userData }) => {
  const { userData: user, totalSeries } = userData;
  if (user) {
    const usernameShort = user.username.slice(0, 2);

    return (
      <Card>
        <CardHeader className="flex flex-col items-center space-y-4">
          <Avatar className="h-32 w-32">
            <img
              src="/images/cards/card_anime.webp?height=128&width=128"
              alt="User profile picture"
              className="object-cover"
            />
            <AvatarFallback>{usernameShort}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="font-bold">{user.username}</h2>
          </div>
          <Button disabled variant="outline">
            Add to friends
          </Button>
        </CardHeader>
      </Card>
    );
  }
};

export default UserProfile_Profile;
