import restaurantList from "../utils/mockData";
import Rescards from "./Rescards.js";
import { useState } from "react";

const Body = () => {
  const [List, setList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search-box">
        <input type="text" placeholder="Search here" />
        <button>Search</button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filtered = List.filter((res) => res.info.avgRating > 4);
          setList(filtered);
        }}
      >
        Top Rated
      </button>
      <div className="res-container">
        {List.map((e) => (
          <Rescards key={e.info.id} resdata={e} />
        ))}
      </div>
    </div>
  );
};
export default Body;
