import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

// jest.mock("./app.less", () => jest.fn());
it("renders <App/>", () => {
  const { asFragment } = render(<App />);
});
