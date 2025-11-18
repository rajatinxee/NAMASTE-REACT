import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom'


test("Should Load Contact us", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();


});


test("Did button render in COntact", () => {
    render(<Contact/>)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});


test('check all textbox', () => {
    render(<Contact/>)
    const inputText = screen.getAllByRole("textbox");
    console.log(inputText); 
    // expect(inputText).toBeInTheDocument();
});
