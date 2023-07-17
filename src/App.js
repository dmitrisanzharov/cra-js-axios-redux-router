import "./App.css";

// components
import BasicTable from "./components/BasicTable";
import SortedTable from "./components/SortedTable";
import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";
import ColumnFiltering from "./components/ColumnFiltering";

// v8
import SortingTableV8 from "./components/SortingTableV8";

function App() {
  return (
    <div className="addPadding">
      {/* <BasicTable /> */}
      {/* <SortedTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* V8 */}
      {/* <SortingTableV8 /> */}
      {/* <BasicTable /> */}
      <ColumnFiltering />
    </div>
  );
}

export default App;
