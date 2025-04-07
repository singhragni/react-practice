import { Res_cart_logo } from "../utils/constant";

export const ResturantContainers = ({ resName }) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 shadow-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="logo"
        src={Res_cart_logo + resName.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2">{resName.info.name}</h3>
      <h4>{resName.info.areaName}</h4>
      <h5>{resName.info.cuisines.join(",")}</h5>
    </div>
  );
};


// heigher order component 
// resurant card with promatd label

// input - 
export const withPrometedLabel = (ResturantContainers) =>{

  return (props) =>{
    return (
     <div className="relative">
  <label className="absolute bg-black text-white m-2 p-2 rounded-lg">PROMOTED</label>
  <ResturantContainers {...props} />
</div>
    )
  }

}


