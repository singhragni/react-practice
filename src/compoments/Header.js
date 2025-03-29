import { useEffect, useState } from "react";
import { Header_logo } from "../utils/constant";
import { Link } from "react-router";

export const Header = () => {
  const[buton,setButton] = useState('Login')

  useEffect(()=>{
    console.log("i am useEffect");
  },[buton])

  return (
    <div className="header">
      <div className="logo">
        <img className="img-logo" alt="logo" src={Header_logo}></img>
      </div>
      <div className="list">
        <ul className="list-page">
          <li>Home</li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li className="butt"  onClick={()=>{
            buton === 'Login'? setButton('LogOut'):setButton('Login')
          }}>{
            buton 
          }</li>
        </ul>
      </div>
    </div>
  );
};
