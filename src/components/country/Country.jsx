import { useState } from "react";

const Country = ({ country, handleVisitedCountries, isVisited }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited((preVisited) => !preVisited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3
        style={{
          color: visited ? "White" : "Purple",
        }}
      >
        Name: {name?.common}
      </h3>
      <img src={flags?.png} alt={flags?.alt} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      {isVisited || (
        <>
          <button onClick={handleVisitedCountries(country)}>
            Mark visited
          </button>{" "}
          <button onClick={handleVisited}>Visited</button>
        </>
      )}
      {(visited || isVisited) && <p>I am visited.</p>}
    </div>
  );
};

export default Country;
