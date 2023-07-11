import React from "react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css";
import Checkbox from "./Checkbox.js";

const RowSelection = () => {
  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const {
    headerGroups,
    getTableProps,
    rows,
    getTableBodyProps,
    prepareRow,
    footerGroups,
    selectedFlatRows,
  } = tableInstance;

  // console.log("tableInstance", tableInstance);

  const firstPageRows = rows.slice(0, 10);

  return (
    // this is template
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
          {firstPageRows.map((rowEl) => {
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
        <tfoot>
          {footerGroups.map((footerGroupsEl) => {
            // console.log("footerGroupsEl", footerGroupsEl);

            return (
              <tr {...footerGroupsEl.getFooterGroupProps()}>
                {footerGroupsEl.headers.map((columnEl) => {
                  return (
                    <th {...columnEl.getFooterProps()}>
                      {columnEl.render("Footer")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
      <hr />
      <ul>
        {selectedFlatRows.map((row) => {
          return <li key={row.id}>{JSON.stringify(row.original)}</li>;
        })}
      </ul>
    </>
  );
};

export default RowSelection;
