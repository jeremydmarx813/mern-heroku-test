// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="App flexCenteredDiv">
      <header>
        <h1>Daily Stock Highlights</h1>
      </header>
      <p>
        This app is designed to provide easy access to the latest stock
        information from Poylygon.io.
      </p>
      <Dashboard />
    </div>
  );
}

export default App;
