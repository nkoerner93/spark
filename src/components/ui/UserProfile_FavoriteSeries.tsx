// components/UserProfile.tsx
import { GetUserProfileResponse } from "@/app/actions/profileActions";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shad-cn/avatar";
import { Button } from "@/components/ui/shad-cn/button";
import { MonitorPlay } from "lucide-react";
import { Card, CardContent, CardHeader } from "./shad-cn/card";

type UserProfileProps = {
  userData: GetUserProfileResponse;
};

const UserProfile_FavoriteSeries: React.FC<UserProfileProps> = ({
  userData,
}) => {
  const { userData: user, totalSeries } = userData;
  if (user) {
    const usernameShort = user.username.slice(0, 2);

    return (
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader className="flex flex-col items-center space-y-4">
          <Avatar className="h-32 w-32">
            <AvatarImage
              src="/images/cards/card_anime.webp?height=128&width=128"
              alt="User profile picture"
              className="object-cover"
            />
            <AvatarFallback>{usernameShort}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-2xl font-bold"></h1>
            <p className="text-muted-foreground">{user.username}</p>
          </div>
          <Button disabled variant="outline">
            Add to friends
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <MonitorPlay className="text-muted-foreground" />
            <span>Favorite Series: {totalSeries}</span>
          </div>
        </CardContent>
      </Card>
    );
  }
};

export default UserProfile_FavoriteSeries;
