import { useState, useEffect } from "react";
import DisplayData from "./DisplayData";

function Countries() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  return (
    <div>
      <h1>Data Fetching {countryData.length}</h1>
      {countryData.map((country) => (
        <DisplayData
          key={Math.random()}
          name={country.name.common}
          population={country.population.toLocaleString()}
          area={country.area}
          flags={country.flags.png}
          continents={country.continents}
          maps={country.maps.googleMaps}
        ></DisplayData>
      ))}
    </div>
  );
}

export default Countries;
