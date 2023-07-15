import React from "react";
import { useTable } from "react-table";
import "./styles.css";
import data from "./data.json";
import { COLUMNS } from "./columns";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => data, []);
  const columnsFinal = React.useMemo(() => COLUMNS, []);

  const tableInstance = useTable({
    data: dataFinal,
    columns: columnsFinal,
  });

  const {
    headerGroups,
    footerGroups,
    getTableProps,
    rows,
    prepareRow,
    getTableBodyProps,
  } = tableInstance;

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
            return (
              <tr {...footerGroupsEl.getFooterGroupProps()}>
                {footerGroupsEl.headers.map((columnEl) => {
                  return (
                    <th {...columnEl.getFooterProps()}>
                      {" "}
                      {columnEl.render("Footer")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </>
  );
};

export default BasicTable;
