import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("should load header with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();

});
