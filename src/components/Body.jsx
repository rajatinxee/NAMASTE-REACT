import RestCard, { withLabel } from "./RestCard";
// import { restaurants } from "../utils/config";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { FETCH_APT } from "../utils/links";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Body = () => {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResCardLabel = withLabel(RestCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  // console.log("Body render");

  useEffect(() => {
    // console.log("Use Effect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_APT);

    if (!data.ok) {
      console.log("HTTP error", data.status);
    }

    const json = await data.json();
    console.log(json.data);

    const restaurantCards = json?.data?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const restaurants = restaurantCards.map((card) => ({
      id: card.card.card.info.id,
      name: card.card.card.info.name,
      cuisines: card.card.card.info.cuisines,
      rating: card.card.card.info.avgRating,
      deliveryTime: card.card.card.info.sla.deliveryTime,
      area: card.card.card.info.areaName,
      image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.card.card.info.cloudinaryImageId}`,
      label: card.card.card.info.aggregatedDiscountInfoV3,
    }));

    setAllCards(restaurants);
    setCards(restaurants);
  };

  const filterRestaurants = () => {
    const filtered = allCards.filter((i) => Number(i.rating) >= 4.5);
    setCards(filtered);
    // console.log(filtered);
  };

  const filterName = () => {
    if (!searchText) {
      setCards(allCards);
      return;
    }

    const filteredData = cards.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setCards(filteredData);
  };

  return cards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-8">
      <div className="flex my-5">
        <div className="search mb-5 mx-3">
          <input
            type="text"
            data-testid = "searchInput"
            className="search-input border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn ml-4 bg-green-100 px-5 py-3 rounded-md hover:bg-green-200 transition-all duration-500 border border-solid border-green-950"
            onClick={filterName}
          >
            Search
          </button>

          <div>User Name is changed by context: {loggedInUser}</div>

          <div className="my-4">
            <label className="m-2 font-bold">User Name:</label>
            <input className="border border-black m-2 p-2" value={loggedInUser} onChange={handleUserName}/>
          </div>
        </div>

        <div className="filter mx-3 flex">
          <div>
            <button
              className="filter-btn bg-blue-200 px-4 py-3 rounded-md hover:bg-pink-200 border border-solid border-blue-950 transition-all duration-500"
              onClick={filterRestaurants}
            >
              Top - Rated Restaurants
            </button>
          </div>
          <h3 className="m-5">Number = {cards.length}</h3>
        </div>
      </div>

      <div className="res-cont flex flex-wrap">
        {cards.map((restaurant) => (
          <Link key={restaurant.id} to={"/res-menu/" + restaurant.id}>
            {restaurant?.label?.header ? (
              <ResCardLabel
                resname={restaurant.name}
                cuisines={restaurant.cuisines}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                area={restaurant.area}
                image={restaurant.image}
                label={restaurant.label}
              />
            ) : (
              <RestCard
                resname={restaurant.name}
                cuisines={restaurant.cuisines}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                area={restaurant.area}
                image={restaurant.image}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
