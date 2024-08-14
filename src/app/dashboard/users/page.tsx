import { getPublicUsers } from "@/app/actions/memberActions";
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
import Link from "next/link";
import React from "react";

const UserDashboard = async ({ searchParams }: any) => {
  const { page = 1, limit = 1 } = searchParams;
  const allusers = await getPublicUsers(false);

  // Calculate the start and end indexes for the current page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);

  // Get the paginated posts for the current page

  // Await the asynchronous function
  const paginatedPosts = allusers.slice(startIndex, endIndex);

  return (
    <div>
      <HeroSection title="Users" subtitle={`List of all our users.`} />
      <div className="flex flex-row justify-center gap-8">
        <Table className="mx-auto w-[400px] lg:w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="text-right">Username</TableHead>
            </TableRow>
            {paginatedPosts.map((user, index) => (
              // Return the JSX element
              <TableRow key={user.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
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
      </div>
      <div className="mt-4 flex flex-row justify-end gap-2">
        <span className="flex flex-row gap-2">
          {parseInt(page) - 1 < 0 ? (
            <Link
              href={`/dashboard/users?page=${parseInt(page) - 1}&limit=${limit}`}
            >
              <Button>Zurück</Button>
            </Link>
          ) : null}
          {parseInt(page) + 1 <= allusers.length ? (
            <Link
              href={`/dashboard/users/?page=${parseInt(page) + 1}&limit=${limit}`}
            >
              <Button>Weiter</Button>
            </Link>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default UserDashboard;
