import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Rest_URL } from "../utils/constant";
import useResInfoData from "../utils/useResInfoData";
import RestraurantCategory from "./RestraurantCategry";
const RestauranMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showInd, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useResInfoData(resId);
  console.log("jjjjjjjjrest");
  console.log("showInd----", showInd)
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    city,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    costForTwoMessage,
    avgRating,
  } = resInfo?.data?.cards[2]?.card?.card?.info || "";

  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const { cards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || "";
  console.log(Array.isArray(cards));
  const allItemCards = cards.filter(
    (value) =>
      value?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("i am resu--e-");
  console.log(allItemCards);
  return (
    <div className="">
      <h1 className="text-center font-bold my-8 text-2xl">{name}</h1>
      <p className="text-center font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* acrodinal  */}
      {allItemCards.map((category, index) => {
        return (
          <RestraurantCategory
            key={category.card.card.title}
            category={category}
            showIndex={index=== showInd ? true : false}
            setShowIndex={() => setShowIndex(showInd === index ? null : index)}

          />
        );
      })}
    </div>
  );
};

export default RestauranMenu;
