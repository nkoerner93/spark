import { Github } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./shad-cn/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  button1?: string;
  button1link?: URL | string;
  button2?: string;
  button2link?: URL | string;
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  button1,
  button1link,
  button2,
  button2link,
}) => {
  return (
    <section className="md mx-auto flex max-w-[980px] flex-col items-center gap-2 pb-16">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        {title}
      </h1>
      <span className="max-w-[750px] text-center text-muted-foreground sm:text-lg">
        {subtitle}
      </span>
      {button1link && button1 ? (
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button className="h-9 items-center justify-center whitespace-nowrap rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-secondary">
            <Link href={`${button1link}`}>{button1}</Link>
          </Button>
          {button2link && button2 ? (
            <Button className="h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <Link
                className="flex flex-row items-center"
                href={`${button2link}`}
                target="_blank"
              >
                <Github strokeWidth={0.9} />
                {button2}
              </Link>
            </Button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
};

export default HeroSection;
