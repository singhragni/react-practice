import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import {Rest_URL} from '../utils/constant'
const RestauranMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  console.log(resId)
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(Rest_URL+resId);
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };

  const{name, city, cloudinaryImageId,cuisines,costForTwo,costForTwoMessage,avgRating} = resInfo?.data?.cards[2]?.card?.card?.info || '';
 // const {} = resInfo?.data?.cards[2]?.card?.card?.groupedCard || '';
  // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info )

  const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || '';
  return resInfo === null ? (
    <Shimmer />
  ) : (    
    <div className="Menu">
      <h1>{name}</h1>
      <p>{cuisines.join(' , ')} - {costForTwoMessage}</p>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) =>{
          return (
            <li key={item.card.info.id}>{item.card.info.name } - {item.card.info.price }</li>
            
          )
        })}
        
      </ul>
    </div>
  );
};

export default RestauranMenu;
