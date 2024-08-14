import { getPublicUsers } from "@/app/api/memberApi";
import HeroSection from "@/components/ui/HeroSection";
import { Button } from "@/components/ui/shad-cn/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/shad-cn/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserDashboard = async ({ searchParams }: any) => {
  const { page = 1, limit = 20 } = searchParams;
  const allusers = await getPublicUsers(false);

  // Calculate total pages
  const totalPages = Math.ceil(allusers.length / limit);

  // If the requested page exceeds the total pages, return an empty array
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedPosts =
    page > totalPages ? [] : allusers.slice(startIndex, endIndex);

  return (
    <div>
      <HeroSection title="Users" subtitle={`List of all our public users.`} />
      <div className="flex flex-col items-center gap-8">
        {paginatedPosts.length > 0 ? (
          <Table className="mx-auto w-[400px] lg:w-[800px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead className="text-right">Username</TableHead>
              </TableRow>
              {paginatedPosts.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    {startIndex + index + 1}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/dashboard/users/${user.username}`}>
                      {user.username}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody></TableBody>
          </Table>
        ) : (
          <div className="flex flex-col gap-4 text-center">
            <p>No users found on this page.</p>
            <Link href={`/dashboard/users/?page=1&limit=${limit}`}>
              <Button>Return to First Page</Button>
            </Link>
          </div>
        )}
      </div>
      {paginatedPosts.length > 0 && (
        <div className="mt-4 flex flex-row justify-end gap-2">
          <span className="flex flex-row gap-2">
            {parseInt(page) > 1 && (
              <Link
                href={`/dashboard/users?page=${parseInt(page) - 1}&limit=${limit}`}
              >
                <Button variant={"outline"}>
                  <ChevronLeft />
                </Button>
              </Link>
            )}
            {parseInt(page) < totalPages && (
              <Link
                href={`/dashboard/users/?page=${parseInt(page) + 1}&limit=${limit}`}
              >
                <Button variant={"outline"}>
                  <ChevronRight />
                </Button>
              </Link>
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
