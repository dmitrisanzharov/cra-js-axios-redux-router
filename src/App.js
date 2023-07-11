import "./App.css";

// components
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";
import BasicTable from "./components/BasicTable";
import SortingTable from "./components/SortingTable";
import FilteringTable from "./components/FilteringTable";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";
import ColumnOrder from "./components/ColumnOrder";
import ColumnHiding from "./components/ColumnHiding";
import StickyTable from "./components/StickyTable";

function App() {
  return (
    <div className="addPadding">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <ColumnHiding /> */}
      <StickyTable />
    </div>
  );
}

export default App;
