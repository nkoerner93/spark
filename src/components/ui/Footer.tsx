import { Github } from "lucide-react";
import { Separator } from "./shad-cn/separator";
import Spark_Heading from "./Heading";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mt-16">
      <Separator className="h-[1px] bg-slate-300" />
      <div className="p-6">
        <div className="flex flex-row justify-between">
          <Spark_Heading fontweight="font-semibold" size="2xl">
            Heading
          </Spark_Heading>
          <Spark_Heading fontweight="font-semibold" size="2xl">
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
