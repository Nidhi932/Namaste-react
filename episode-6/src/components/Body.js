import Rescards from "./Rescards.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [List, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const obj =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(obj);
    setList(obj);
    setFilteredList(obj);

    // const obj = json?.data?.cards;
    // const to_befiltered = Object.keys(obj).map(
    //   (key) => obj[key]?.card?.card?.info
    // );
    // console.log(to_befiltered);
    // const final_obj = to_befiltered.filter(Boolean);
    // console.log(final_obj);
    // setList(final_obj);
    // console.log(List);
  };

  // if (List.length === 0) {
  //   return <Shimmer />;
  // }

  return List.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedList = List.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(searchedList);
            }}
          >
            Search
          </button>
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
          {filteredList.map((e) => (
            <Rescards key={e.info.id} resdata={e} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
