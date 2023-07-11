import React from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = React.useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined, value);
  }, 1000); // recommended 300 milliseconds

  function handleInput(evt) {
    setValue(evt.target.value);
    onChange(evt.target.value);
  }

  return (
    <span>
      Search <input value={value || ""} onChange={handleInput} />
    </span>
  );
};

export default GlobalFilter;
