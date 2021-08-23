import React from "react";
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
  CardHeader,
} from "@material-ui/core";

const EtfComponent = ({ data }) => {
  const { name, ticker, locale, primary_exchange } = data;

  return (
    <Card elevation={3}>
      <CardHeader title={name} subheader={ticker} />
      <CardContent varianr="body2" color="secondary">
        <Typography>Country: {locale.toUpperCase()}</Typography>
        <Typography>Primary Exchange: {primary_exchange}</Typography>
      </CardContent>
    </Card>
  );
};

export default EtfComponent;
