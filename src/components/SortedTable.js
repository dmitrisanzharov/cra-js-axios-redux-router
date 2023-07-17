import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import "./styles.css";
import data from "./data.json";
import { columnDef, columnDefWithMerge, columnDef2 } from "./columns";

const BasicTable = () => {
  const [sorting, setSorting] = React.useState([]);

  const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => columnDef2, []);

  const tableInstance = useReactTable({
    data: dataFinal,
    columns: columnsFinal,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
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
                      onClick={columnEl.column.getToggleSortingHandler()}
                    >
                      {columnEl.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                          {
                            { asc: " -UP", desc: " -DOWN" }[
                              columnEl.column.getIsSorted() ?? null
                            ]
                          }
                        </>
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
