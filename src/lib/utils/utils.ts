import { logout } from "@/app/actions/actions";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Async logout event handler
export const handleLogout = async () => {
  await logout();
};

// Display current season based on current month
export function getCurrentSeason() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns zero-based index

  if (currentMonth >= 3 && currentMonth <= 5) {
    return "Spring";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    return "Summer";
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    return "Autumn";
  } else {
    return "Winter";
  }
}

export const extractOffsetFromUrl = (url: string) => {
  const match = url.match(/offset=(\d+)/); // Match the offset value using a regular expression
  if (match && match[1]) {
    return parseInt(match[1], 10); // Extracted offset value as integer
  } else {
    return null; // Return null if offset is not found in the URL
  }
};
