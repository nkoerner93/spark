"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlankButtonProps {
  className?: string;
  href: string;
}

const BlankButton = ({ className = "", href }: BlankButtonProps) => {
  return (
    <div className="mb-2 flex flex-row items-center gap-1">
      <ArrowLeft />
      <Link href={href}>
        <button className={`primary border-none font-bold ${className}`}>
          Back
        </button>
      </Link>
    </div>
  );
};

export default BlankButton;
