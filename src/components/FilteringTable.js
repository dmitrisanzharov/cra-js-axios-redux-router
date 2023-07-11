import React from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";

const FilteringTable = () => {
  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => MOCK_DATA, []);

  const defaultColumn = React.useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const tableInstance = useTable(
    {
      defaultColumn: defaultColumn,
      columns: columns,
      data: data,
    },
    useFilters,
    useGlobalFilter
  );

  const {
    headerGroups,
    getTableProps,
    rows,
    getTableBodyProps,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
  } = tableInstance;

  // console.log("tableInstance", tableInstance);

  return (
    // this is template
    <>
      <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroupEl) => (
            <tr {...headerGroupEl.getHeaderGroupProps()}>
              {headerGroupEl.headers.map((columnEl) => (
                <th {...columnEl.getHeaderProps()}>
                  {columnEl.render("Header")}
                  <div>
                    {columnEl.canFilter ? columnEl.render("Filter") : null}
                  </div>
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
    </>
  );
};

export default FilteringTable;
