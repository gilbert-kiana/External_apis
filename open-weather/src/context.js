import React, { useEffect } from "react";
import axios from "axios";

const url = `https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=${process.env.REACT_APP_OPW_API}`;

const UserContext = React.createContext();

const AppProvider = ({ children }) => {
  const fetchData = async () => {
    try {
      const data = await axios.get(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  });
  //fadsfds
  //just to test the git stuff
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export { UserContext, AppProvider };
