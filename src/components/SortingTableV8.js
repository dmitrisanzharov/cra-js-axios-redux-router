import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import "./styles.css";
import dataJSON from "./data.json";
import { columnDef } from "./columns";

const BasicTable = () => {
  //   const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => columnDef, []);

  const [sorting, setSorting] = React.useState([]);
  const [data, setData] = React.useState(dataJSON);

  const tableInstance = useReactTable({
    data: data,
    columns: columnsFinal,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <>
      <table>
        <thead>
          {getHeaderGroups().map((headerGroupEl) => {
            return (
              <tr key={headerGroupEl.id}>
                {headerGroupEl.headers.map((columnEl) => {
                  return (
                    <th
                      colSpan={columnEl.colSpan}
                      key={columnEl.id}
                      {...{
                        className: columnEl.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: columnEl.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        columnEl.column.columnDef.header,
                        columnEl.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;
