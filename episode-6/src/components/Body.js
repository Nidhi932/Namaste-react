import restaurantList from "../utils/mockData.js";
import Rescards from "./Rescards.js";
import { useEffect, useState } from "react";

const Body = () => {
  const [List, setList] = useState(restaurantList);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9581934&lng=72.8320729&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    const obj = json?.data?.cards;
    const to_befiltered = Object.keys(obj).map(
      (key) => obj[key]?.card?.card?.info
    );
    console.log(to_befiltered);
    const final_obj = to_befiltered.filter(Boolean);
    console.log(final_obj);
    setList(final_obj);
    console.log(List);
  };

  return (
    <div className="body">
      <div className="search-box">
        <input type="text" placeholder="Search here" />
        <button>Search</button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filtered = List.filter((res) => res.avgRating > 4);
          setList(filtered);
        }}
      >
        Top Rated
      </button>
      <div className="res-container">
        {List.filter((e) => e && e.id).map((e) => (
          <Rescards key={e.id} resdata={e} />
        ))}
      </div>
    </div>
  );
};
export default Body;
