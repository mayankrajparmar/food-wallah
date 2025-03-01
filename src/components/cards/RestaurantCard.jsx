import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  sla,
}) => {
  return (
    <div className="w-[16.5rem] shadow-md cursor-pointer p-4 rounded-xl  ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
        style={{ width: "100%", height: "200px", borderRadius: "16px" }}
      />
      <h3 className="mt-2">
        {name.length > 26 ? name.substring(0, 22) + "..." : name}
      </h3>
      <p>{avgRating} Stars</p>
      <p>
        {cuisines.join(", ").length > 25
          ? cuisines.join(", ").substring(0, 28) + "..."
          : cuisines.join(", ")}
      </p>
      <p>{sla.slaString}</p>
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
