import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import "./styles.css";
import data from "./data.json";
import { columnDef, columnDefWithMerge, columnDef2 } from "./columns";
import FilterFunction from "./FilterFunction.js";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => columnDef2, []);

  const [columnFilters, setColumnFilters] = React.useState([]);

  const tableInstance = useReactTable({
    data: dataFinal,
    columns: columnsFinal,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters: columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
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
                  console.log(columnEl);
                  return (
                    <th colSpan={columnEl.colSpan} key={columnEl.id}>
                      {columnEl.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                          {columnEl.column.getCanFilter() ? (
                            <div>
                              <FilterFunction
                                column={columnEl.column}
                                table={tableInstance}
                              />
                            </div>
                          ) : null}
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