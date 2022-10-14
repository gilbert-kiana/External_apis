import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <label>
        There has been an error in the route you are trying to access
      </label>{" "}
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
