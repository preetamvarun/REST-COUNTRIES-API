import { screen, render } from "@testing-library/react";
import Header from "../src/HeaderComponent/Header";
import "@testing-library/jest-dom";

// test("Checking Where In The World Text Insider The Header", () => {
//     render(<Header modeColor = {"light"} onChange={() => {}}/>);
//     const text = screen.getByText("Where In The World?");
//     expect(text).toBeInTheDocument();
// })

test("Which mode is in the header component", () => {
    render(<Header modeColor={"mockModeColor"} onChange={() => {}}/>)
    const div = screen.getByTestId("test-toggle-theme")
    const p = screen.getByTestId("current-theme")
    expect(p).toBeInTheDocument();
})