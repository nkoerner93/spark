"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

interface ReturnButtonProps {
  className?: string;
  pages?: number;
}

const ReturnButton = ({ className = "", pages = 1 }: ReturnButtonProps) => {
  const href = useMemo(() => {
    return "../".repeat(pages);
  }, [pages]);

  return (
    <Link
      href={href}
      className={`inline-flex items-center space-x-2 py-4 text-primary ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Go Back</span>
    </Link>
  );
};

export default ReturnButton;
