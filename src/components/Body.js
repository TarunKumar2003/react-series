import { RestaurantCard } from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body-container">
      <div className="search-input"> search</div>
      <div className="card-container">
        <RestaurantCard resName="KFC" />
        <RestaurantCard resName="H-10" />
      </div>
    </div>
  );
};

export default Body;
