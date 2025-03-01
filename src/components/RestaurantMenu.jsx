import { useState } from "react";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import { RestaurantMenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const menuData = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(0);

  if (menuData === null) return <RestaurantMenuShimmer />;

  const {
    name,
    avgRatingString,
    cuisines,
    totalRatingsString,
    city,
    costForTwoMessage,
    locality,
    areaName,
    cloudinaryImageId,
    sla,
  } = menuData?.cards[2]?.card?.card?.info;

  const menu =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = menu.filter(
    (c) =>
      c?.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="w-[60%] mx-auto">
      <div className="w-full flex items-center bg-[#ff4800] text-white shadow-md p-[20px] rounded-[8px] mb-[30px] overflow-hidden">
        <img
          className="w-[250px] h-[150px] object-cover rounded-[8px] mr-[40px] hover:scale-[1.1] transition-transform duration-300 ease-in-out"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <div className="flex flex-col justify-center gap-[5px">
          <h1 className="text-[20px] font-bold">{name}</h1>
          <h3 className=" font-semibold text-[17px]">
            {locality}, {areaName}, {city}
          </h3>
          <p className="text-[15px] ">{cuisines?.join(", ")}</p>

          <h4 className=" flex gap-[20px] font-semibold">
            <div className="flex items-center">
              <MdStarRate
                className="w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[5px]"
                style={
                  avgRatingString > 4.0
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              />
              <span>
                {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
              </span>
            </div>
            <span>|</span>
            <span className="time">{sla?.slaString}</span>
          </h4>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>

      {/* Category Accordians */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showMenuItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
