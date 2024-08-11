"use client";
import { Button } from "@/components/ui/shad-cn/button";
import React, { useState } from "react";
import { updateProfile } from "@/app/actions/profileActions";
import { toast } from "@/components/ui/shad-cn/use-toast";

const PublicProfileButtons = ({
  initialIsPublic,
}: {
  initialIsPublic: boolean | null;
}) => {
  const [isPublic, setIsPublic] = useState<boolean | null>(initialIsPublic);

  const handlePublicClick = async () => {
    try {
      await updateProfile({ isPublic: true });
      setIsPublic(true);
      toast({
        title: "Success!",
        description: "Your profile is now public.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handlePrivateClick = async () => {
    try {
      await updateProfile({ isPublic: false });
      setIsPublic(false);
      toast({
        title: "Success!",
        description: "Your profile is now private.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <Button
          onClick={handlePublicClick}
          variant={isPublic === true ? "default" : "outline"}
        >
          Public
        </Button>
        <Button
          onClick={handlePrivateClick}
          variant={isPublic === false ? "default" : "outline"}
        >
          Private
        </Button>
      </div>
    </div>
  );
};

export default PublicProfileButtons;
