import { Github, Zap } from "lucide-react";
import { Separator } from "./shad-cn/separator";
import Spark_Heading from "./Spark_Heading";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mt-16">
      <Separator className="h-[1px] bg-slate-300" />
      <div className="p-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <Zap className="text-orange-600" />
            <Spark_Heading fontweight="font-semibold" size="text-lg">
              Spark
            </Spark_Heading>
          </div>
          <Spark_Heading fontweight="font-semibold" size="text-md">
            <Link
              href="https://github.com/nkoerner93/spark"
              target="_blank"
              className="flex flex-row gap-2"
            >
              <Github /> Github
            </Link>
          </Spark_Heading>
        </div>
      </div>
    </section>
  );
};

export default Footer;
