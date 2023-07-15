import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  function handleInput(evt) {
    setFilter(evt.target.value);
  }

  return (
    <span>
      Search <input value={filterValue || ""} onChange={handleInput} />
    </span>
  );
};

export default ColumnFilter;
