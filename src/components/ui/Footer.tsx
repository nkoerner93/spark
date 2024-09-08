import { Github, Zap } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import Spark_Heading from "./Spark_Heading";

const Footer = () => {
  return (
    <section className="border-t-[1px] px-8 py-8">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-row justify-between">
          <Link href={"/"}>
            <div className="flex flex-row items-center gap-2">
              <Zap className="text-orange-600" />
              <Spark_Heading fontweight="font-bold" size="text-2xl">
                Spark
              </Spark_Heading>
            </div>
          </Link>
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
