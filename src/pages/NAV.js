import React from "react";
import Logo from "../../Images/imgbin-online-LOGO-1.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Lock from "../../Images/Auth_image_2.png";
import Speak from "../../Images/imgbin-online-chat-icon.jpg";

library.add(faHouse);
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
          <NavLink to="/Authentication">
            <img className="Lock" src={Lock} />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/Chatroom">
            <img className="Speak" src={Speak} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NAV;
