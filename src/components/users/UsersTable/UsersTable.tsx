"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { DropdownChangeEvent } from "primereact/dropdown";

import { User } from "@/interfaces/UserInterface";
import UsersTablePaginator from "./UsersTablePaginator";

import styles from "./UsersTable.module.css";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableData from "./UsersTableData";

interface UsersTableProps {
  allUsers: User[];
}

const UsersTable = ({ allUsers }: UsersTableProps) => {
  const [usersState, setUsersState] = useState<User[]>(allUsers || []);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(allUsers);

  const url = new URL(`${process.env.NEXT_PUBLIC_URL}/users`);
  const router = useRouter();

  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);

  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  const states = [
    { value: "ACTIVO", label: "Activo" },
    { value: "INACTIVO", label: "Inactivo" },
  ];

  useEffect(() => {
    let filtered = allUsers;

    if (globalFilterValue) {
      filtered = filtered.filter((user) =>
        user.usuario.toLowerCase().includes(globalFilterValue.toLowerCase())
      );
    }

    if (selectedState) {
      filtered = filtered.filter((user) => user.estado === selectedState);
    }

    setFilteredUsers(filtered);
    setFirst(0);
  }, [globalFilterValue, selectedState, allUsers]);

  // Función para filtrar por nombre
  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilterValue(e.target.value);
  };

  // Función para filtrar por estado
  const onStateChange = (e: DropdownChangeEvent) => {
    setSelectedState(e.value);
  };

  // Función de seleccion de usuario para editar
  const onRowSelect = (e: any) => {
    url.searchParams.set("modal", "edit");
    url.searchParams.set("id", e.value.id ? e.value.id.toString() : "");
    router.push(url.toString());
  };

  // Función de paginado
  const onPageChange = (e: any) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const paginatedUsers = filteredUsers.slice(first, first + rows);

  return (
    <div className={styles.table__container}>
      <div className={styles.table__dataTable}>
        <UsersTableHeader
          globalFilterValue={globalFilterValue}
          selectedState={selectedState}
          states={states}
          onGlobalFilterChange={onGlobalFilterChange}
          onStateChange={onStateChange}
        />
        <UsersTableData
          paginatedUsers={paginatedUsers}
          onRowSelect={onRowSelect}
        />
      </div>
      <UsersTablePaginator
        first={first}
        rows={rows}
        totalRecords={usersState.length}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default UsersTable;
