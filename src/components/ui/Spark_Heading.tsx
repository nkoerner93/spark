import { FC, ReactNode } from "react";

type HeadingSize =
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-4xl"
  | "text-8xl";
type HeadingWeight =
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-normal"
  | "font-extrabold";

interface HeadingProps {
  size: HeadingSize;
  fontweight: HeadingWeight;
  children: ReactNode;
}

const Spark_Heading: FC<HeadingProps> = ({ size, fontweight, children }) => {
  return <div className={`text-primary ${fontweight} ${size}`}>{children}</div>;
};

export default Spark_Heading;
