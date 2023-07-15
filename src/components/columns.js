import moment from "moment";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
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
