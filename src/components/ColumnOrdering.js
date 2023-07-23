import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnOrderState,
} from "@tanstack/react-table";
import "./styles.css";
import data from "./data.json";
import { columnDef, columnDefWithMerge, columnDef2 } from "./columns";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => columnDef2, []);

  const [columnOrder, setColumnOrder] = React.useState([]);

  const tableInstance = useReactTable({
    data: dataFinal,
    columns: columnsFinal,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnOrder: columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
  });

  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <>
      <button onClick={() => setColumnOrder(["phone"])}>swap columns</button>
      <hr />
      <table>
        <thead>
          {getHeaderGroups().map((headerGroupEl) => {
            return (
              <tr key={headerGroupEl.id}>
                {headerGroupEl.headers.map((columnEl) => {
                  console.log(columnEl);
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
    </>
  );
};

export default BasicTable;
