import UserContext from "../utils/UserContext";

import { useContext } from "react";


export const Footer = () => {
  const {loggedInUser} = useContext(UserContext);

  return (
    <>
        <li>{loggedInUser}</li>
      <h1>I am header</h1>
    </>
  );
};

export default Footer;
