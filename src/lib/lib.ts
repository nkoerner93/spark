import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: number;
  username?: string;
  email?: string;
  img?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.AUTH_SECRET!,
  cookieName: "spark_session",
  cookieOptions: {
    httpOnly: true,
    secure: true,
  },
};

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  focusOnSelect: false,
  arrows: false,
  rows: 12,
  swipe: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        rows: 1,
        infinite: true,
        arrows: true,
        swipe: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        swipe: true,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        swipe: true,
      },
    },
  ],
};
