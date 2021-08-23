import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EtfComponent from "./EtfComponent";
import { Box, Typography } from "@material-ui/core";

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
      .catch((err) => console.error(err));
  }, []);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Typography>Highlighted ETFs</Typography>
      {tickers.length &&
        tickers.map((e) => {
          return <EtfComponent key={uuidv4()} data={e} />;
        })}
    </Box>
  );
};

export default Dashboard;
