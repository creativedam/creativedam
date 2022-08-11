import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("Renders <App /> big data mining", async () => {
    render(<App />);
    const linkElement = screen.getByText(/Creative Dam/i);
    expect(linkElement).toBeInTheDocument();
  });
});
