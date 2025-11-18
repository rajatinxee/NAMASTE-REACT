import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/links";
import useResMenu from "../utils/Hooks/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // Extract all cards from REGULAR menu
  const allCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Filter for ItemCategory cards (accordion items)
  const categories = allCards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log("Categories:", categories);

  return (
    <div className="p-5 m-5 text-center">
      <h1 className="font-bold ">Name: {resInfo.cards[0].card.card.text}</h1>
      <h3 className="text-lg font-semibold mb-5">Menu</h3>

      <div>
        {categories.length > 0 ? (
          categories.map((categoryCard, index) => (
            <ResCategory
              key={categoryCard?.card?.card?.title}
              category={categoryCard?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex((prev) => (prev === index ? null : index))
              }
            />
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </div>
    </div>
  );
};

export default ResMenu;
