import React from "react";
import { useGlobalContext } from "../context";

const SingleJoke = () => {
  const joke = useGlobalContext();

  return (
    <section>
      <h2>Joke</h2>
      <div>{joke}</div>
    </section>
  );
};

export default SingleJoke;
