import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../constants";


const useRestaurantMenu = (resID) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const res = await fetch(RESTAURANT_MENU_API + resID);
    const resData = await res.json();
    setMenuData(resData?.data);
  };

  return menuData;
};

export default useRestaurantMenu;
