// components/UserProfile.tsx
import { GetUserProfileResponse } from "@/app/actions/profileActions";
import { Globe, MonitorPlay } from "lucide-react";
import { Card, CardContent, CardHeader } from "./shad-cn/card";

type UserProfileProps = {
  userData: GetUserProfileResponse;
};

const UserProfile_Favorites: React.FC<UserProfileProps> = ({ userData }) => {
  const { userData: user, totalSeries, totalMaps } = userData;
  if (user) {
    return (
      <Card>
        <CardHeader className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Favorites</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <MonitorPlay className="text-muted-foreground" />
              <p>Favorite Series: {totalSeries}</p>
            </div>
            <div className="flex flex-row gap-2">
              <Globe className="text-muted-foreground" />
              <p>Favorite Maps: {totalMaps}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
};

export default UserProfile_Favorites;
