import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="head">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
