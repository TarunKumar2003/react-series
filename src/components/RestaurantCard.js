export const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <img
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a58fzzytyng7p9ljfvgg"
        className="res-img"
      />
      <h3>{props.resName}</h3>
      <h4>Thailand sandwich</h4>
      <h4>4.6 stars</h4>
      <h4>56 minutes </h4>
    </div>
  );
};

export default RestaurantCard;
