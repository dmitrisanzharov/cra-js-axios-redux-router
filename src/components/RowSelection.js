// import React from "react";
// import { useTable, useRowSelect, useColumnOrder } from "react-table";
// import "./styles.css";
// import data from "./data.json";
// import { COLUMNS } from "./columns";
// import Checkbox from "./Checkbox";

// const BasicTable = () => {
//   const dataFinal = React.useMemo(() => data, []);
//   const columnsFinal = React.useMemo(() => COLUMNS, []);

//   const tableInstance = useTable(
//     {
//       data: dataFinal,
//       columns: columnsFinal,
//     },
//     useRowSelect,
//     useColumnOrder,
//     (hooks) => {
//       hooks.visibleColumns.push((columns) => [
//         {
//           id: "selection",
//           Header: ({ getToggleAllRowsSelectedProps }) => (
//             <Checkbox {...getToggleAllRowsSelectedProps()} />
//           ),
//           Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
//         },
//         ...columns,
//       ]);
//     }
//   );

//   const {
//     headerGroups,
//     footerGroups,
//     getTableProps,
//     rows,
//     prepareRow,
//     getTableBodyProps,
//     selectedFlatRows,
//     setColumnOrder,
//     allColumns,
//     getToggleHideAllColumnsProps,
//   } = tableInstance;

//   return (
//     <>
//       <div>
//         <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
//         <ul>
//           {allColumns.map((columnEl) => {
//             return (
//               <li key={columnEl.id}>
//                 <input type="checkbox" {...columnEl.getToggleHiddenProps()} />
//                 {columnEl.Header}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <hr />
//       <button onClick={() => setColumnOrder(["phone"])}>
//         Change Column Order
//       </button>
//       <hr />
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroupEl) => (
//             <tr {...headerGroupEl.getHeaderGroupProps()}>
//               {headerGroupEl.headers.map((columnEl) => (
//                 <th {...columnEl.getHeaderProps()}>
//                   {columnEl.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((rowEl) => {
//             prepareRow(rowEl);
//             return (
//               <tr {...rowEl.getRowProps()}>
//                 {rowEl.cells.map((cellEl) => {
//                   return (
//                     <td {...cellEl.getCellProps()}>{cellEl.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//         <tfoot>
//           {footerGroups.map((footerGroupsEl) => {
//             return (
//               <tr {...footerGroupsEl.getFooterGroupProps()}>
//                 {footerGroupsEl.headers.map((columnEl) => {
//                   return (
//                     <th {...columnEl.getFooterProps()}>
//                       {" "}
//                       {columnEl.render("Footer")}
//                     </th>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tfoot>
//       </table>
//       <ul>
//         {selectedFlatRows.map((row) => {
//           return <li key={row.id}>{JSON.stringify(row.original)}</li>;
//         })}
//       </ul>
//     </>
//   );
// };

// export default BasicTable;
