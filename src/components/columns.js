import moment from "moment";
import { createColumnHelper, ColumnDef } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columnDefWithMerge = [
  columnHelper.accessor("id", {
    header: "id",
    footer: "ftr_id",
  }),
  {
    header: "Name",
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
  },
  // columnHelper.accessor("first_name", {
  //   header: "First Name",
  //   footer: "ftr_fn",
  // }),
  // columnHelper.accessor("last_name", {
  //   header: "Last Name",
  //   footer: "ftr_ln",
  // }),
  {
    accessorKey: "email",
    header: "Email",
    footer: "ftr_email",
  },
  {
    accessorKey: "phone",
    header: "phone",
    footer: "ftr_phone",
  },
  {
    accessorKey: "dob",
    header: "Date of Birth",
    footer: "ftr_dob",
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  },
];

export const columnDef = [
  columnHelper.accessor("id", {
    header: "id",
    footer: "ftr_id",
  }),
  columnHelper.accessor("first_name", {
    header: "First Name",
    footer: "ftr_fn",
  }),
  columnHelper.accessor("last_name", {
    header: "Last Name",
    footer: "ftr_ln",
  }),
  {
    accessorKey: "email",
    header: "Email",
    footer: "ftr_email",
  },
  {
    accessorKey: "phone",
    header: "phone",
    footer: "ftr_phone",
  },
  {
    accessorKey: "dob",
    header: "Date of Birth",
    footer: "ftr_dob",
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  },
];

export const columnDef2 = [
  columnHelper.accessor("id", {
    header: "id",
  }),
  {
    accessorKey: "dob",
    header: "Date of Birth",
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  },
  {
    header: "group1",
    columns: [
      columnHelper.accessor("first_name", {
        header: "First Name",
      }),
      columnHelper.accessor("last_name", {
        header: "Last Name",
      }),
    ],
  },
  {
    header: "group 2",
    columns: [
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "phone",
        header: "phone",
      },
    ],
  },
];

export const COLUMNS_old = [
  {
    Header: "id",
    accessor: "id",
    Footer: "ftr_id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "ftr_fn",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "ftr_ln",
  },
  {
    Header: "Email",
    accessor: "email",
    Footer: "ftr_email",
  },
  {
    Header: "Date of Birth",
    accessor: "dob",
    Footer: "ftr_dob",
    Cell: ({ value }) => moment(new Date(value)).format("MMM Do YY"),
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "ftr_phone",
  },
];
