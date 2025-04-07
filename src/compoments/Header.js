import { useEffect, useState, useContext } from "react";
import { Header_logo } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [buton, setButton] = useState("Login");
  const data = useContext(UserContext)
  console.log(data)
  useEffect(() => {}, [buton]);
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo">
        <img className="w-35" alt="logo" src={Header_logo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-1">
          <li className="px-4">Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <Link to='/offer'><li >Offer</li></Link>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <Link to='/cart'><li className="px-4" >Cart</li></Link>
          <li
            className="butt"
            onClick={() => {
              buton === "Login" ? setButton("LogOut") : setButton("Login");
            }}
          >
            {buton}
          </li>
          <li className="px-2"> {data.loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};
