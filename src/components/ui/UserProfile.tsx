import { Button } from "@/components/ui/shad-cn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shad-cn/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/shad-cn/card";
import { Badge } from "@/components/ui/shad-cn/badge";
import {
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
  MailIcon,
} from "lucide-react";
import { getUserByName } from "@/app/api/memberApi";
import { getFavoriteTVSeriesByUsername } from "@/app/actions/tvSeriesActions";

interface UserProfileProps {
  username: string;
}

export default async function UserProfile({ username }: UserProfileProps) {
  const userData = await getUserByName(username);
  const usernameShort = userData?.username.slice(0, 2);
  const FavoriteSeries = await getFavoriteTVSeriesByUsername(username);

  return (
    <>
      {!userData ? (
        <div>No user found.</div>
      ) : (
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
              <p className="text-muted-foreground">{userData?.username}</p>
            </div>
            <Button disabled variant="outline">
              Add to friends
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <BriefcaseIcon className="text-muted-foreground" />
              <span>Works at TechCorp</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="text-muted-foreground" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="text-muted-foreground" />
              <span>Joined January 2020</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="text-muted-foreground" />
              <span>jane.doe@example.com</span>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
