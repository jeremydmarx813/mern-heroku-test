// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./Dashboard";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="sm">
      <header>
        <h1>Daily Stock Highlights</h1>
      </header>
      <p>
        This app is designed to provide easy access to the latest stock
        information from Poylygon.io.
      </p>
      <Dashboard />
    </Container>
  );
};

export default App;
