export interface AnimeCards_SeasonalProps {
  year: number;
  season: string;
}

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
