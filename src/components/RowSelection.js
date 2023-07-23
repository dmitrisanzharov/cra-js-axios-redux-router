import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import "./styles.css";
import data from "./data.json";
import { columnDef, columnDefWithMerge, columnDef2 } from "./columns";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => columnDef2, []);

  const [rowSelection, setRowSelection] = React.useState({});

  const tableInstance = useReactTable({
    data: dataFinal,
    columns: columnsFinal,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
  });

  console.log("selected rows", tableInstance.getSelectedRowModel());

  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <>
      <table>
        <thead>
          {getHeaderGroups().map((headerGroupEl) => {
            return (
              <tr key={headerGroupEl.id}>
                {headerGroupEl.headers.map((columnEl) => {
                  // console.log(columnEl);
                  return (
                    <th colSpan={columnEl.colSpan} key={columnEl.id}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
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
      <hr />
      <ul>
        {tableInstance.getSelectedRowModel().flatRows.map((el) => {
          console.log("elTest", el);
          return (
            <li key={el.id}>
              {Number(el.id) + 1} - {JSON.stringify(el.original)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BasicTable;
