import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("renders heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/Daily Stock Highlights/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("renders paragraph", () => {
    render(<App />);
    const paragraphElement = screen.getByText(
      /This app is designed to provide easy access to the latest stock information from Poylygon.io/
    );
    expect(paragraphElement).toBeInTheDocument();
  });

});
