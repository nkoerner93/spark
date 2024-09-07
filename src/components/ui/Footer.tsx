import { Github, Zap } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import Spark_Heading from "./Spark_Heading";
import { Separator } from "./shad-cn/separator";

const Footer = () => {
  return (
    <section className="mx-auto w-full">
      <Separator className="h-[1px]" />
      <div className="mx-auto max-w-screen-2xl px-8 py-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <Zap className="text-orange-600" />
            <Spark_Heading fontweight="font-bold" size="text-lg">
              Spark
            </Spark_Heading>
          </div>
          <div className="flex flex-row items-center gap-2">
            <ThemeToggle />
            <Spark_Heading fontweight="font-semibold" size="text-sm">
              <Link
                href="https://github.com/nkoerner93/spark"
                target="_blank"
                className="flex flex-row gap-2"
              >
                <Github className="h-5 w-5" /> Github
              </Link>
            </Spark_Heading>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
