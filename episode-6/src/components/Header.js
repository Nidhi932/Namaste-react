import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");

  return (
    <div className="head">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              {
                btnname === "Login"
                  ? setbtnname("Logout")
                  : setbtnname("Login");
              }
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
