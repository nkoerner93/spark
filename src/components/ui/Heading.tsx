import { FC, ReactNode } from "react";

type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl";
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
  return <div className={`${fontweight} ${size}`}>{children}</div>;
};

export default Spark_Heading;
