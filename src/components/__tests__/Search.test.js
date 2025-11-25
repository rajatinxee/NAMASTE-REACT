// const { render, act } = require("@testing-library/react")
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body.jsx";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "jsb" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);

  // expect(searchBtn).toBeInTheDocument();
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const filterBtn = screen.getByRole("button", {name: "Top - Rated Restaurants"});

  fireEvent.click(filterBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1)

});
