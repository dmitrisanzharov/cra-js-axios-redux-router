import React from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css";

const BasicTable = () => {
  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const {
    headerGroups,
    getTableProps,
    rows,
    getTableBodyProps,
    prepareRow,
    footerGroups,
  } = tableInstance;

  // console.log("tableInstance", tableInstance);

  return (
    // this is template
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
        {rows.map((rowEl) => {
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
  );
};

export default BasicTable;
