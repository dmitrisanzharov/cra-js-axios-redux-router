import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import "./styles.css";
import data from "./data.json";
import { columnDef2 } from "./columns";

const BasicTable = () => {
  const [columnVisibility, setColumnVisibility] = React.useState({});

  const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => columnDef2, []);

  const tableInstance = useReactTable({
    data: dataFinal,
    columns: columnsFinal,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
  });

  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <>
      <div>
        <label>
          <input
            {...{
              type: "checkbox",
              checked: tableInstance.getIsAllColumnsVisible(),
              onChange: tableInstance.getToggleAllColumnsVisibilityHandler(),
            }}
          />{" "}
          Toggle All
        </label>
      </div>
      <hr />
      {tableInstance.getAllLeafColumns().map((column) => {
        return (
          <div key={column.id}>
            <label>
              <input
                {...{
                  type: "checkbox",
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                }}
              />{" "}
              {column.id}
            </label>
          </div>
        );
      })}
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
