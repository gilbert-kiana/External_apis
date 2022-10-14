import React from "react";
import SingleJoke from "../components/SingleJoke";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <SingleJoke />
    </div>
  );
};

export default Home;
