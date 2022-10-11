import React from "react";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // function searchData() {
  //   console.log("ndani");
  //   setSearchTerm(searchValue.current.value);
  //   console.log(searchValue.current.value);
  // }

  function handleSearch() {
    setSearchTerm(searchValue.current.value);
    console.log(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"></label>
          <input id="name" type="text" ref={searchValue} />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
