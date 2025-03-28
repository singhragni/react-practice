import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { resData } from "./data";

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

const Header = () => (
  <div className="header">
    <div className="logo">
      <img
        className="img-logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswNpqFFnkcuHKv2QUTT1kbpgwbinSVJQgYA&s"
      ></img>
    </div>
    <div className="list">
      <ul className="list-page">
        <li>Home</li>
        <li>Help</li>
        <li>Offer</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const ResturantContainers = ({ resName }) => {
  console.log("att=-------");
  console.log(resName.info.name);
  return (
    <div className="res-cart">
      <img
        className="res-cart-logo"
        alt="logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resName.info.cloudinaryImageId}
      ></img>
      <h3>{resName.info.name}</h3>
      <h4>{resName.info.areaName}</h4>
      <h5>{resName.info.cuisines.join(",")}</h5>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search"> search</div>
    <div className="res-Container">
      {resData.map((res) =>{
        return <ResturantContainers key ={res.info.id}  resName={res}/>
      })}           
    </div>
  </div>
);

const Footer = () => <h1></h1>;

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
