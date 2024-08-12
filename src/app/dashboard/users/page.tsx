import { getPublicUsers } from "@/app/actions/memberActions";
import HeroSection from "@/components/ui/HeroSection";
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

const UserDashboard = async () => {
  // Await the asynchronous function
  const allusers = await getPublicUsers(false);
  console.log(allusers);

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
            {allusers.map((user, index) => (
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
    </div>
  );
};

export default UserDashboard;
