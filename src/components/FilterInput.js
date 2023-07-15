import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  function handleInput(evt) {
    setFilter(evt.target.value);
  }

  return (
    <span>
      Search <input value={filter || ""} onChange={handleInput} />
    </span>
  );
};

export default GlobalFilter;
