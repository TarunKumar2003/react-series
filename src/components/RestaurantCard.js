import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({
  resName,
  cuisines,
  costForTwo,
  avgRating,
  deliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <div className="restaurant-card">
      <img
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
        className="res-img"
      />
      <h3>{resName}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo.toString()}</h4>
    </div>
  );
};

export default RestaurantCard;
