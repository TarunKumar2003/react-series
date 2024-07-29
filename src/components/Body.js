import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../utils/mock_data";
import { useEffect, useState } from "react";

console.log(restaurantList.length);
const Body = () => {
  const [restaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.945140216919313&lng=76.81731384247541&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = data.json();
    console.log(json);

    const newRestaurants =
      json?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants;

    console.log(newRestaurants);
    setFilteredRestaurants(restaurants);
  };
  return (
    <div className="body-container">
      <div className="filter">
        <div className="input-box">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let searchedRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchedRestaurants);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            topRatedRestaurants = restaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurants(topRatedRestaurants);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            resName={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            costForTwo={restaurant.info.costForTwo / 100}
            avgRating={restaurant.info.avgRating}
            deliveryTime={restaurant.info.deliveryTime}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
            key={restaurant.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
