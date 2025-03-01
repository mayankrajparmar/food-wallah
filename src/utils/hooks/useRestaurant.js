import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../constants";

const useRestaurant = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(RESTAURANT_API);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const resData = await res.json();
      const restaurantList =
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // console.log(restaurantList);
      setOriginalData(restaurantList);
      setData(restaurantList);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return [originalData, data, setData];
};

export default useRestaurant;
