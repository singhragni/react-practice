import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { resData } from "./data";
import Footers from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";
import { Header_logo, Res_cart_logo } from "../utils/constant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Error";
import Contact from "./Contact";
import RestauranMenu from "./RestaurantMenu";
import About from "./About";
import Shimmer from "./Shimmer";
import Offer from "./Offer";
import UserContext from "../utils/UserContext";
//import Grocery from './Grocery';

const Grocery = lazy(() => import("./Grocery"));

// const parent = React.createElement("div", {id:"parnet"},'this is React')

/**
 * Header
 * - logo
 * - cart
 * - home
 * Body
 *  - search
 *  - resName
 *  - resCusion
 * Footer
 * - contactInfo
 * -
 *
 */

const App = () => {
  const [userName, setUsername] = useState("");
  useEffect(() => {
    const data = {
      name: "ragini singh",
    };
    setUsername(data.name);
  }, []);
  return (
    // defualt value
    <UserContext.Provider value={{loggedInUser:userName,setUserName: setUsername}}>
      <Header />
      <Outlet />
      <Footers />
    </UserContext.Provider>
  );
};

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/resturants/:resId",
        element: <RestauranMenu />,
      },
      {
        path: "/cart",
        element: <h1>I am cart</h1>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },

  //{ path: "*", element: <Error /> }
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerPath} />);
