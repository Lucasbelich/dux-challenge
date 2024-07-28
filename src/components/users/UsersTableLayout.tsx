import { Suspense } from "react";

import { getAllUsers } from "@/service/UserService";
import UsersTable from "./UsersTable/UsersTable";
import UsersTableSkeleton from "../skeleton/UsersTableSkeleton";

const UsersTableLayout = async () => {
  const allUsers = await getAllUsers();

  return (
    <>
      <Suspense fallback={<UsersTableSkeleton users={allUsers} />}>
        <UsersTable allUsers={allUsers} />
      </Suspense>
    </>
  );
};

export default UsersTableLayout;
