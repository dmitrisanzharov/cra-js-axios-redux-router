import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import "./styles.css";
import data from "./data.json";
import { columnDef, columnDefWithMerge, columnDef2 } from "./columns";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => columnDef2, []);

  const tableInstance = useReactTable({
    data: dataFinal,
    columns: columnsFinal,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const {
    getHeaderGroups,
    getRowModel,
    setPageIndex,
    getPageCount,
    nextPage,
    previousPage,
    getCanNextPage,
    getCanPreviousPage,
    options,
    setPageSize,
  } = tableInstance;

  console.log(tableInstance);

  return (
    <>
      <table>
        <thead>
          {getHeaderGroups().map((headerGroupEl) => {
            return (
              <tr key={headerGroupEl.id}>
                {headerGroupEl.headers.map((columnEl) => {
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
      <div>
        <div>Current page: {options.state.pagination.pageIndex}</div>
        <div>Number of pages in total: {getPageCount() - 1}</div>
      </div>
      <hr />
      <div>
        <button
          disabled={!getCanPreviousPage()}
          onClick={() => setPageIndex(0)}
        >
          First Page
        </button>
        <button disabled={!getCanPreviousPage()} onClick={() => previousPage()}>
          Previous page
        </button>
        <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          Next page
        </button>
        <button
          onClick={() => setPageIndex(getPageCount() - 1)}
          disabled={!getCanNextPage()}
        >
          Last Page
        </button>
      </div>
      <hr />
      <div>
        <ul>
          <li>Jump to page</li>
          <li>
            <input
              type="number"
              defaultValue={0}
              onChange={(e) => setPageIndex(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <hr />
      <select
        value={options.state.pagination.pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 25, 50].map((pageSizeEl) => {
          return (
            <option key={pageSizeEl} value={pageSizeEl}>
              Show: {pageSizeEl}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default BasicTable;
