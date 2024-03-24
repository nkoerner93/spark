"use client";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ReturnButtonProps {
  className?: string;
}

const ReturnButton = ({ className = "" }: ReturnButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="mb-2 flex flex-row items-center gap-1">
      <ArrowLeft />
      <button
        className={`primary border-none font-bold ${className}`}
        onClick={handleClick}
      >
        Back
      </button>
    </div>
  );
};

export default ReturnButton;
