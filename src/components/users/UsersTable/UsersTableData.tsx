import { User } from "@/interfaces/UserInterface";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

interface UsersTableDataProps {
  paginatedUsers: User[];
  onRowSelect: (e: any) => void;
}

const UsersTableData = ({
  paginatedUsers,
  onRowSelect,
}: UsersTableDataProps) => {
  return (
    <DataTable
      value={paginatedUsers}
      scrollHeight="auto"
      removableSort
      tableStyle={{ minWidth: "50rem" }}
      unstyled={false}
      globalFilterFields={["usuario"]}
      selectionMode="single"
      onSelectionChange={onRowSelect}
    >
      <Column
        field="id"
        header="id"
        sortable
        style={{ width: "25%", height: "3rem", padding: "1rem" }}
      ></Column>
      <Column
        field="usuario"
        header="Usuario"
        sortable
        style={{ width: "25%" }}
      ></Column>
      <Column
        field="estado"
        header="Estado"
        sortable
        style={{ width: "25%" }}
      ></Column>
      <Column
        field="sector"
        header="sector"
        sortable
        style={{ width: "25%" }}
      ></Column>
    </DataTable>
  );
};

export default UsersTableData;
