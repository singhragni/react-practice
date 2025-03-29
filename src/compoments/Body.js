import { resData } from "../utils/mockData";
import { ResturantContainers } from "./ResturantContainers";
import { useState, useEffect } from "react";
import "./index.css";

// const [resDataS] = useState(resData); // hooks can not called outside the function component.

export const Body = () => {
  const [resDataS, setResData] = useState(resData);
  const [resDataSC, setResDataC] = useState(resData);
  const [resS, setresS] = useState("");
  console.log("i m  1component")
  useEffect(() => {
    console.log("data.....");
    fetchData();
  }, []);
  console.log("i m component")
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const sweegyApi = await data.json();
    console.log(sweegyApi);
  };
  return (
    <div className="body">
      <div className="ser-div">
        <input
          className="input-s-btn"
          type="text"
          value={resS}
          onChange={(e) => {
            console.log("dattatta");
            console.log(e);
            setresS(e.target.value);
          }}
        ></input>
        <button
          className="input-btn"
          onClick={() => {
           let data = resDataSC.filter((value) => value.info.name.toLowerCase().includes(resS.toLowerCase()))
           setResData(data)
          }}
        >
          search
        </button>
        <div className="filter">
          <button
            className="filter-btn"
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
      </div>
      <div className="res-Container">
        {resDataS.map((res) => {
          return <ResturantContainers key={res.info.id} resName={res} />;
        })}
      </div>
    </div>
  );
};
