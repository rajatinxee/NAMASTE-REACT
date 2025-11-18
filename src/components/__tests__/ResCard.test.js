import { render, screen } from "@testing-library/react"
import ResCard from "../RestCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom";

it("should render Restaurant Cart with props Data", () => {
    render(
        // RestCard expects individual props (resname, cuisines, rating, etc.)
        // pass the name from the mock so the component can render it
        <ResCard resname={MOCK_DATA.info.name} />
    );

    // match the short 'JSB' substring in the rendered name (case-insensitive)
    const name = screen.getByText(/JSB/i);
    expect(name).toBeInTheDocument();

});