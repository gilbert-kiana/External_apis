import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.chucknorris.io/jokes/random";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [joke, setJokes] = useState(null);

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  const fetchRandomJoke = async () => {
    const result = await axios.get(url);
    setJokes(result.data.value);
  };

  // const fetchSpecificCategory = async () => {
  //   const category = await axios.get(categoryUrl);
  //   setCategories(category.data);
  // };

  return <AppContext.Provider value={joke}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
