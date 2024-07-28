"use client";

import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";

interface UsersTablePaginatorProps {
  totalRecords: number;
  rows: number;
  first: number;
  onPageChange: (event: PaginatorPageChangeEvent) => void;
}

const UsersTablePaginator = ({
  totalRecords,
  first,
  rows,
  onPageChange,
}: UsersTablePaginatorProps) => {
  return (
    <div className="card">
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        rowsPerPageOptions={[5, 10, 25, 50]}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default UsersTablePaginator;
