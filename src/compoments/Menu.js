import { useDispatch } from "react-redux";
import { Menu_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const Menu = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    //dispatch the action 
    dispatch(addItem(item))
  }
  let i =0;
  return (


    <div className="p-4">
      {items.map((item) => {
        return (
          <div
            key={i++}
            className="flex w-6/12 m-auto p-4 items-center border-b border-gray-200"
          >
            {/* Left section - Text Content */}
            <div className="w-6/12">
              <div>
                <span>🌿</span>
              </div>
              <div>
                <span className="font-bold">{item.card.info.name}</span>
              </div>
              <div>
                <span>
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <div className="mt-1 text-gray-600 text-sm w-10/12 line-clamp-2">
                {item.card.info.description
                  ? item.card.info.description
                  : "A delicious and flavorful dish crafted with fresh ingredients."}
              </div>
            </div>

            {/* Right section - Image + ADD Button */}
            <div className="w-6/12 flex flex-col items-end relative">
              <img
                alt="menu-logo"
                src={Menu_URL + item.card.info.imageId}
                className="w-32 h-32 rounded-xl"
              />
              <button className="w-20 h-10 border border-gray-300 cursor-pointer text-green-500 bg-white font-bold absolute bottom-[-10px]"
              onClick={()=>handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
