import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { resData } from "./data";
import Footers from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";
import { Header_logo, Res_cart_logo } from "../utils/constant";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import Error from "./Error";
import Contact from './Contact';

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
  return (
    <>
      <Header />
      <Outlet />
      <Footers />
    </>
  );
};

const routerPath = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error />,
    children:[
      {
        path: '/',
        element: <Body/>
      },{
        path:'/about',
        element: <h1>I am habout</h1>
      },{
        path: '/contact',
        element: <Contact/>
      }
    ]
   },
  
  //{ path: "*", element: <Error /> }
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerPath} />);
