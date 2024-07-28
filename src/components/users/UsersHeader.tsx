import Link from "next/link";
import ButtonPrimary from "../ui/ButtonPrimary";

const UsersHeader = () => {
  const url = new URL(`${process.env.NEXT_PUBLIC_URL}/users`);
  url.searchParams.set("modal", "create");

  return (
    <div className="w-full h-max px-6 py-2 flex flex-row align-items-center justify-content-between">
      <h1>Usuarios</h1>
      <Link href={url.toString()} scroll={false}>
        <ButtonPrimary label="Nuevo Usuario" icon="pi pi-plus" />
      </Link>
    </div>
  );
};

export default UsersHeader;
