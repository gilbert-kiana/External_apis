import React from "react";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchData() {
    console.log("ndani");
    setSearchTerm(searchValue.current.value);
    console.log(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Search Country location here</label>
          <input type="text" ref={searchValue} onChange={searchData} />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
