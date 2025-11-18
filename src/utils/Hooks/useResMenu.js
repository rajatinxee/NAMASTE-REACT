import { useState, useEffect } from "react";
import { MENU_URL } from "../links";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      MENU_URL +
        resId +
        "&query=Chole%20Bhature&submitAction=ENTER&source=collection"
    );

    const json = await res.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useResMenu;
