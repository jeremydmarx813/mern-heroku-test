import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Dashboard />, div);
      });

      it("renders heading", () => {
        render(<Dashboard />,);
        const headingElement = screen.getByText(/Highlighted ETFs/i);
        expect(headingElement).toBeInTheDocument();
      });
})