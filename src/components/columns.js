import moment from "moment";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id", // this are the TITLES on the Table Header columns
    accessor: "id", // this is MAPPING to JSON KEYS from DATA,
    Footer: "Id_footer", // IS POSITIONING IMPORTANT HERE - no does NOT matter
    disableFilters: true, // this disables filtering
    sticky: "left",
  },
  {
    Header: "First Name", // this will be the name of CHILD columns
    accessor: "first_name",
    Footer: "firstName_footer",
    sticky: "left",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "lastName_footer",
    sticky: "left",
  },
  {
    Header: "Date of Birth", // this will be the name of CHILD columns
    accessor: "date_of_birth",
    Footer: "DateOfBirth_footer",
    Cell: ({ value }) => moment(new Date(value)).format("MMM Do YY"),
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country_footer",
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone_footer",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Age",
    accessor: "age",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id", // this are the TITLES on the Table Header columns
    accessor: "id", // this is MAPPING to JSON KEYS from DATA,
    Footer: "Id_footer", // IS POSITIONING IMPORTANT HERE - no does NOT matter
  },
  {
    Header: "Name", // this will be the name of the PARENT column
    Footer: "Name_footer",
    columns: [
      {
        Header: "First Name", // this will be the name of CHILD columns
        accessor: "first_name",
        Footer: "firstName_footer",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "lastName_footer",
      },
    ],
  },
  {
    Header: "Info", // this will be the name of the PARENT column
    Footer: "Info_footer",
    columns: [
      {
        Header: "Date of Birth", // this will be the name of CHILD columns
        accessor: "date_of_birth",
        Footer: "DateOfBirth_footer",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country_footer",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone_footer",
      },
    ],
  },
];
