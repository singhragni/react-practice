import { resData } from "../utils/mockData";
import { ResturantContainers, withPrometedLabel } from "./ResturantContainers";
import { useState, useEffect, useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";

// const [resDataS] = useState(resData); // hooks can not called outside the function component.

export const Body = () => {
  const [resDataS, setResData] = useState(resData);
  const [resDataSC, setResDataC] = useState(resData);
  const [resS, setresS] = useState("");
  const isOnline = useOnlineStatus();
  const ResCarPromated = withPrometedLabel(ResturantContainers);
  useEffect(() => {
   
    fetchData();
  }, []);
  console.log("i m component");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.618246300516812&lng=77.42469989997464&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const sweegyApi = await data.json();

    const { restaurants } =
      sweegyApi.data.cards[1]?.card?.card?.gridElements?.infoWithStyle || "";
    // setResData(sweegyApi)
    console.log(restaurants);
    setResData(restaurants);
    console.log("datattata");
  };

  if (isOnline === false)
    return (
      <h1>OOps! somthing went wrong please check ur internet connection </h1>
    );
  const { setUserName, loggedInUser } = useContext(UserContext);
  return (
    <div className="body">
      <div className="flex px-2 py-4">
        <input
          className=" border border-solid border-black"
          type="text"
          value={resS}
          onChange={(e) => {
            console.log("dattatta");
            console.log(e);
            setresS(e.target.value);
          }}
        ></input>
        <button
          className="ml-2 px-2 bg-green-100  rounded-lg"
          onClick={() => {
            let data = resDataSC.filter((value) =>
              value.info.name.toLowerCase().includes(resS.toLowerCase())
            );
            setResData(data);
          }}
        >
          Search
        </button>
        <div className="flex items-center">
          <button
            className="ml-6 bg-gray-200 w-[200px] rounded-lg"
            onClick={() => {
              let filter = resDataS.filter(
                (vale) => vale.info.avgRatingString > 4
              );
              setResData(filter);
            }}
          >
            Top Rated Restraurant
          </button>
        </div>
        <label className="px-2">User Name:</label>
        <input
          className="border border-black p-0.5"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {resDataS.map((res) => {
          return (
            <div key={res.info.id}>
              <Link to={"/resturants/" + res.info.id}>
                {res.info.prompted ? (
                  <ResCarPromated resName={res} />
                ) : (
                  <ResturantContainers resName={res} />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
