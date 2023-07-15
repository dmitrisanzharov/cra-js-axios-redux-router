import "./App.css";

// components
import BasicTable from "./components/BasicTable";
import SortedTable from "./components/SortedTable";
import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";

function App() {
  return (
    <div className="addPadding">
      {/* <BasicTable /> */}
      {/* <SortedTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      <RowSelection />
    </div>
  );
}

export default App;
