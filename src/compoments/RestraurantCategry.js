import { useState } from "react";
import Menu from "./Menu";
const RestraurantCategory = ({ category, showIndex, setShowIndex }) => {
  console.log("showIndex for this item:", showIndex);

  const [isClick,setIsClick] = useState(false)
  function handleClick() {
    setShowIndex();
    //setIsClick(!isClick)
  }
  return (
    <>
      <div
        className="relative z-10 w-6/12 m-auto shadow-lg p-4 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category.card.card.title}({category.card.card.itemCards.length})
        </span>
        <span>🔼</span>
      </div>
      <div>{showIndex && <Menu items={category.card.card.itemCards} />}</div>
    </>
  );
};

export default RestraurantCategory;
