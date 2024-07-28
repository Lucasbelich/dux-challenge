import UsersEditLayout from "@/components/users/UsersEditLayout";
import UsersForm from "@/components/users/UsersForm/UsersForm";
import UsersHeader from "@/components/users/UsersHeader";
import UsersTableLayout from "@/components/users/UsersTableLayout";

export type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function UsersPage(props: Props) {
  const showModal = props.searchParams?.modal;
  const userId = props.searchParams?.id ?? "";

  return (
    <div className="flex flex-column w-full">
      {showModal === "create" && <UsersForm />}
      {showModal === "edit" && <UsersEditLayout id={userId} />}
      <UsersHeader />
      <UsersTableLayout />
    </div>
  );
}
