import React from "react";
import { useGlobalContext } from "../context";

const Weather = () => {
  const { name, temperature } = useGlobalContext();

  return (
    <section className="container">
      <div className="maincard">
        <span className="cardtitle"></span>
        Location:<div className="titles"> {name}</div>
        Temperature:<div className="titles">{temperature}°C</div>
      </div>
    </section>
  );
};

export default Weather;
