import { MapResult, Session } from "@prisma/client";
import { ComponentType, SVGProps } from "react";

export type Anime_Data_Seasonal = {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
  };
};

export type Anime = {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
};

export type Anime_Data_HighestRated = {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
  };
  ranking: {
    rank: number;
  };
};

export type AnimeRankingType =
  | "all"
  | "airing"
  | "upcoming"
  | "tv"
  | "ova"
  | "movie"
  | "special"
  | "bypopularity"
  | "favorite";

export type MenuItems_MainMenu = {
  title: string;
  url: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type User = {
  id: number;
  email: string;
  password: string;
  created_on: Date | null;
  last_login: Date | null;
  username: string;
  isPublic: boolean;
  sessions: Session[];
  mapResults: MapResult[];
};
