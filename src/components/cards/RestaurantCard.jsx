import { MdStarRate } from "react-icons/md";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla,
  areaName,
}) => {
  return (
    <div className="w-[16.5rem] shadow-md cursor-pointer p-4 rounded-xl  ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
        style={{ width: "100%", height: "200px", borderRadius: "16px" }}
      />
      <h3 className="mt-2 font-semibold">
        {name.length > 26 ? name.substring(0, 22) + "..." : name}
      </h3>
      <p>
        {cuisines.join(", ").length > 25
          ? cuisines.join(", ").substring(0, 28) + "..."
          : cuisines.join(", ")}
      </p>
      <div className="flex items-center gap-4 font-medium text-gray-700">
        <h4 className="flex items-center">
          <MdStarRate
            className="text-white w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[3px]"
            style={
              avgRating > 4.0
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
            }
          />
          <span>{avgRating}</span>
        </h4>
        <h4 className="text-xs">{costForTwo}</h4>
        <p className="text-xs">{sla.slaString}</p>
      </div>
      <p className="text-[#828080] font-[500px] font-[Gilroy, sans-serif] text-[15px]">
        {areaName}
      </p>
    </div>
  );
};

// Higher Order Component (HOC) for RestaurantCard with discount
// Input - RestaurantCard
// Output - RestaurantCard with discount offer if available else normal RestaurantCard

export const withDiscountLable = () => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props;
    return (
      <div className=" rounded-[8px]    relative">
        {aggregatedDiscountInfoV3 &&
          (aggregatedDiscountInfoV3.subHeader ? (
            <div className="text-white w-[232px] bg-black/60  rounded-b-xl px-2 text-lg font-extrabold absolute top-[56%] left-[16px]">{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</div>
          ) : (
            <div className="text-white w-[232px] bg-black/60  rounded-b-xl px-2 text-lg font-extrabold absolute top-[56%] left-[16px]">{`${aggregatedDiscountInfoV3.discountTag} ${aggregatedDiscountInfoV3.header} `}</div>
          ))}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
