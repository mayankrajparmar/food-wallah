import RestaurantCard, {
  withDiscountLable,
} from "../components/cards/RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [topFlag, setTopFlag] = useState(false);
  const [originalData, data, setData] = useRestaurant();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const searchedRestaurants = originalData.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        restaurant.info.areaName
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        restaurant.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    return searchedRestaurants;
  };

  useEffect(() => {
    if (topFlag) {
      const filteredData = data.filter((res) => res.info.avgRating > 4.2);
      setData(filteredData);
    } else {
      if (searchText != "") setData(handleSearch());
      else setData(originalData);
    }
  }, [topFlag]);

  const RestaurantCardDiscounted = withDiscountLable(RestaurantCard);

  if (originalData.length == 0) return <h1>Loading...</h1>;
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="flex">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search your restaurant"
            className="w-[95%] py-[6px] px-[10px] text-[1.2rem] text-[#3d3d3d] bg-transparent border-1 border-[#818181] border-r-0 border-[1px] rounded-l-[8px] outline-none focus:border-[#ff4800] transition-all"
          />
          <button
            onClick={() => {
              setData(handleSearch());
            }}
            className="py-[7px] px-[10px] text-[1.2rem] text-[#fff] bg-[#ff4800] rounded-r-[8px] border-none hover:bg-[#016034]"
          >
            search
          </button>
        </div>
        <button
          className="py-[7px] px-[10px] text-[1.2rem] text-[#fff] bg-[#ff4800] rounded-[8px] border-none hover:bg-[#016034]"
          onClick={() => {
            setTopFlag(!topFlag);
          }}
        >
          {topFlag ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
        {/* <input
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your Name"
          className="w-[20%] py-[6px] px-[10px] text-[1.2rem] text-[#3d3d3d] bg-transparent border-1 border-[#818181]  rounded-[8px] outline-none focus:border-[#ff4800] transition-all"
        /> */}
      </div>

      <div className="flex mt-10 flex-wrap justify-center items-center gap-x-[20px] gap-y-[25px]">
        {data.map((item) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              key={item.info.id}
              to={`/restaurant/${item.info.id}`}
            >
              {/* {console.log(item.info)} */}
              {item.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardDiscounted {...item.info} />
              ) : (
                <RestaurantCard {...item.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
