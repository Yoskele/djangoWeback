import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbarContainer">
        <Link className="navLinkContainer" to="/">
          Senaste casino nyheter
        </Link>
        <br />
        <Link className="navLinkContainer" to="/casino-bonus">
          Bonus
        </Link>

        {/* <Link className="navLinkContainer" to="/casino-spel-slots">
          Casino spel
        </Link> */}
      </div>
    </nav>
  );
};
export default Navbar;
