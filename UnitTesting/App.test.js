import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";
import { CustomButton } from "./CustomButton";

describe("Sample Test", () => {
  it("5x5 should equal 25", () => {
    expect(5 * 5).toBe(25);
  });
})

describe("<App />", () => {
  it("should match snapshot", () => {
    const snap = render(<App />).toJSON();
    expect(snap).toMatchSnapshot();
  })
})

describe("<CustomButton />", () => {
  it("should match snapshot", () => {
    const snap = render(<CustomButton />).toJSON();
    expect(snap).toMatchSnapshot();
  })
})