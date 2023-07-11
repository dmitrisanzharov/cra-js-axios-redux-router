import React from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css";

const PaginationTable = () => {
  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  const {
    headerGroups,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  // console.log("tableInstance", tableInstance);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroupEl) => (
            <tr {...headerGroupEl.getHeaderGroupProps()}>
              {headerGroupEl.headers.map((columnEl) => (
                <th {...columnEl.getHeaderProps()}>
                  {columnEl.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((rowEl) => {
            prepareRow(rowEl);
            return (
              <tr {...rowEl.getRowProps()}>
                {rowEl.cells.map((cellEl) => {
                  return (
                    <td {...cellEl.getCellProps()}>{cellEl.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page {state.pageIndex + 1} of {pageOptions.length}{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={state.pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
      <hr />
      <select
        value={state.pageSize}
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

export default PaginationTable;
