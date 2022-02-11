import React from "react";
import Logo from "../../Images/imgbin-online-LOGO-1.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library(faHouse);
function NAV() {
  return (
    <div>
      <div className="Navigation_Bar">
        <a href="#" className="brand">
          <img className="Logo" src={Logo} />
        </a>

        <div className="left">
          <NavLink exact to="/">
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </NavLink>
        </div>
        <div className="middle">
          <NavLink to="/Authentication">AUTH</NavLink>
        </div>
        <div className="right">
          <NavLink to="/Chatroom">Chatroom</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NAV;
