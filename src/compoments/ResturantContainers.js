import { Res_cart_logo } from "../utils/constant";

export const ResturantContainers = ({ resName }) => {
  return (
    <div className="res-cart">
      <img
        className="res-cart-logo"
        alt="logo"
        src={Res_cart_logo + resName.info.cloudinaryImageId}
      ></img>
      <h3>{resName.info.name}</h3>
      <h4>{resName.info.areaName}</h4>
      <h5>{resName.info.cuisines.join(",")}</h5>
    </div>
  );
};


