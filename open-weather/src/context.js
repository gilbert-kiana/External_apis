import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";

const base_url = `https://api.openweathermap.org/data/2.5/weather?q=`;
const city = "nairobi";
const UserContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [chosenWeather, setChosenWeather] = useState();

  const fetchData = useCallback(async () => {
    //fetching from api with axios
    try {
      const data = await axios.get(
        `${base_url}${city}&appid=${process.env.REACT_APP_OPW_API}`
      );
      //hapa ndio imefika i think the issue ni niko na hiyo ovject nataka kuiset kama chosenweather
      const weather = data.data.weather[0];
      if (weather) {
        const newWeather = { ...weather };
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  });

  return (
    <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, AppProvider };
