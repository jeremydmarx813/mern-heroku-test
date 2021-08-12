import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EtfComponent from './EtfComponent';

const apiKey = process.env.REACT_APP_API_KEY;

const Dashboard = () => {
  const [tickers, setTickers] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.polygon.io/v3/reference/tickers?type=ETF&market=stocks&active=true&sort=last_updated_utc&order=asc&limit=20&&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.results)
        setTickers(res.results);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="flexCenteredDiv" >
      <h2>Highlighted ETFs</h2>
      {tickers.length &&
        tickers.map((e) => {
          return <EtfComponent key={uuidv4()} data={e} />;
        })}
    </div>
  );
};

export default Dashboard;
