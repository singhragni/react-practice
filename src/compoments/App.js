import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { resData } from "./data";
import Footers from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";
import { Header_logo,Res_cart_logo } from "../utils/constant";

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
      <Body />
      <Footers />
    </>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
