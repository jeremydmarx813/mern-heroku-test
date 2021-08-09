import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SearchBar = () => {
  const [tickers, setTickers] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.polygon.io/v3/reference/tickers?type=CS&market=stocks&sort=last_updated_utc&active=true&sort=ticker&order=asc&limit=20&apiKey=EmfTXPyQkL1cPLeRdaM47Y2IpiruOzk8"
    )
      .then((res) => res.json())
      .then((res) => {
        setTickers(res.results.map((e) => e.ticker));
      });
  }, []);
  return (
    <div>
      {tickers.length &&
        tickers.map((e) => {
          return <div key={uuidv4()}>{e}</div>;
        })}
    </div>
  );
};

export default SearchBar;
