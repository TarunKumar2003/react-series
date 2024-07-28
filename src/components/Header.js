import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
