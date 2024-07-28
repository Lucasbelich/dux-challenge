import { getUserById } from "@/service/UserService";
import ModalMessage from "../ui/ModalMessage/ModalMessage";
import UsersForm from "./UsersForm/UsersForm";
import { Suspense } from "react";
import UsersFormSkeleton from "../skeleton/UsersFormSkeleton";

const UsersEditLayout = async ({ id }: { id: string }) => {
  const user = await getUserById(id);

  if (!user?.length)
    return <ModalMessage title="Error" message="Usuario no encontrado" />;

  return (
    <>
      <Suspense fallback={<UsersFormSkeleton />}>
        <UsersForm user={user} />
      </Suspense>
    </>
  );
};

export default UsersEditLayout;
