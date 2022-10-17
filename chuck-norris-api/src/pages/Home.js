import React from "react";
import SingleJoke from "../components/SingleJoke";
import SearchForm from "../components/SearchForm";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <Categories />
      <SingleJoke />
    </div>
  );
};

export default Home;
