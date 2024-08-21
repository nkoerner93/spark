// components/UserProfile.tsx
import { GetUserProfileResponse } from "@/app/actions/profileActions";
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
    return (
      <Card>
        <CardHeader className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Favorites</h3>
          </div>
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
