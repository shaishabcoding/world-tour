import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.splice(0, 20)));
  }, []);

  const handleVisitedCountries = (country) => () => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <div className="country-container">
          {visitedCountries.map((country, idx) => (
            <Country
              country={country}
              key={idx}
              handleVisitedCountries={handleVisitedCountries}
              isVisited={true}
            />
          ))}
        </div>
      </div>
      <h4>All Countries</h4>
      <div className="country-container">
        {countries.map((country, idx) => (
          <Country
            country={country}
            key={idx}
            handleVisitedCountries={handleVisitedCountries}
            isVisited={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
