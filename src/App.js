import React, { lazy, Suspense, useEffect, useState } from "react";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResMenu from "./components/ResMenu";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./Context/UserContext";
import appStore from "./Redux/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Rajat Panwal",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore} >
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/res-menu/:resId",
        element: <ResMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading kr ra hai......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
