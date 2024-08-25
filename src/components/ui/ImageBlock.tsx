import Link from "next/link";
import { FC } from "react";
import { Button } from "./shad-cn/button";

interface ImageBlockProps {
  imageleft: boolean;
  title: string;
  description?: string;
  link?: string;
  buttontext?: string;
  alt: string;
  imagepath: string;
}

const ImageBlock: FC<ImageBlockProps> = ({
  imageleft,
  title,
  description,
  link,
  buttontext,
  alt,
  imagepath,
}) => {
  return (
    <div>
      {imageleft ? (
        <div
          className={`mx-auto flex flex-col gap-5 fade-in-5 lg:w-[85%] lg:flex-row lg:justify-center lg:gap-20`}
        >
          <div className="lg:w-1/2">
            <img
              className="max-h-[275px] min-w-full rounded-lg object-cover contrast-[115%] md:max-h-[350px] md:min-h-[350px] xl:min-h-[250px]"
              src={`/images/${imagepath}`}
              alt={alt}
              sizes="100vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 lg:w-1/2">
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
        </div>
      ) : (
        <div
          className={`mx-auto flex flex-col-reverse gap-5 fade-in-5 lg:w-[85%] lg:flex-row lg:justify-center lg:gap-20`}
        >
          <div className="flex flex-col justify-center gap-6 lg:w-1/2">
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
          <div className="lg:w-1/2">
            <img
              className="max-h-[275px] min-w-full rounded-lg object-cover contrast-[115%] md:max-h-[350px] md:min-h-[350px] xl:min-h-[250px]"
              src={`/images/${imagepath}`}
              alt={alt}
              sizes="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageBlock;
