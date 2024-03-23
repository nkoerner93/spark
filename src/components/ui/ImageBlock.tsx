import Link from "next/link";
import { FC } from "react";
import { Button, buttonVariants } from "./shad-cn/button";

interface ImageBlockProps {
  imageleft: boolean;
  title: string;
  description?: string;
  link?: string;
  buttontext?: string;
  alt: string;
}

const ImageBlock: FC<ImageBlockProps> = ({
  imageleft,
  title,
  description,
  link,
  buttontext,
  alt,
}) => {
  return (
    <div
      className={`mx-auto mb-16 flex flex-col gap-5 fade-in-5 lg:w-[85%] lg:flex-row lg:justify-center lg:gap-10 xl:gap-10 ${imageleft ? "xl:pl-20" : "pr-10"}`}
    >
      {imageleft ? (
        <>
          <div className="lg:w-1/2 lg:max-w-[600px]">
            <img
              className="rounded-lg contrast-[115%]"
              src="/images/cards/card_anime.jpg"
              alt={alt}
              sizes="100vw"
            />
          </div>
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
            {link && (
              <Link href={link}>
                <Button className=" bg-orange-600 text-sm">
                  {buttontext !== undefined ? buttontext : "Get Started"}
                </Button>
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
            {link && (
              <Link href={link}>
                <Button className=" bg-orange-600 text-sm">
                  {buttontext !== undefined ? buttontext : "Get Started"}
                </Button>
              </Link>
            )}
          </div>
          <div className="lg:w-1/2 lg:max-w-[600px]">
            <img
              className="rounded-lg contrast-[115%]"
              src="/images/cards/card_anime.jpg"
              alt={alt}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageBlock;
