import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";
import { User } from "@/interfaces/UserInterface";

interface UserTableSkeleton {
  users: User[];
}

const UsersTableSkeleton = ({ users }: UserTableSkeleton) => {
  return (
    <div className="px-6">
      <div className="flex gap-4">
        <Skeleton height="3rem" width="15rem" className="mb-3"></Skeleton>
        <Skeleton height="3rem" width="15rem" className="mb-3"></Skeleton>
      </div>
      <DataTable value={users.slice(0, 10)}>
        <Column
          field="id"
          header="id"
          sortable
          style={{ width: "25%", height: "3rem", padding: "1rem" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="usuario"
          header="Usuario"
          sortable
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="estado"
          header="Estado"
          sortable
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="sector"
          header="sector"
          sortable
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
      </DataTable>
    </div>
  );
};

export default UsersTableSkeleton;
