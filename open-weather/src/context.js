import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";

const base_url = `https://api.openweathermap.org/data/2.5/weather?q=`;
const city = "nairobi";
const UserContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [chosenWeather, setChosenWeather] = useState({});
  const [name, setName] = useState("");
  const [temperature, setTemperature] = useState();
  const [post, setPost] = useState(null);

  const fetchData = useCallback(async () => {
    //fetching from api with axios
    try {
      // const data = await axios
      //   .get(`${base_url}${city}&appid=${process.env.REACT_APP_OPW_API}`)
      //   .then((res) => {
      //       setChosenWeather(res.data);
      //     console.log(`hii ni console.log ${res.data}`);
      //     console.log(chosenWeather);
      //   });
      const response = await fetch(
        `${base_url}${searchTerm}&appid=${process.env.REACT_APP_OPW_API}`
      );
      const data = await response.json();
      console.log(data);
      setName(data.name);
      setTemperature(data.main.temp);

      console.log(temperature);

      //hapa ndio imefika i think the issue ni niko na hiyo ovject nataka kuiset kama chosenweather
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <UserContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        chosenWeather,
        setChosenWeather,
        setName,
        name,
        temperature,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, AppProvider };
