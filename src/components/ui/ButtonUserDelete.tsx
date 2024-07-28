import { removeUser } from "@/actions/form-actions";
import { Button } from "primereact/button";

interface Props {
  userId: string;
}

const ButtonUserDelete = ({ userId }: Props) => {
  return (
    <>
      <form action={removeUser}>
        <input type="hidden" name="id" value={userId} />
        <Button
          label="Eliminar Usuario"
          icon="pi pi-trash"
          className="h-max px-12 py-12 gap-2 bg-red-500 text-white hover:bg-red-100 "
          outlined
        />
      </form>
    </>
  );
};

export default ButtonUserDelete;
