import React from "react";
import Logo from "../../Images/imgbin-online-LOGO-1.png";
import { NavLink } from "react-router-dom";
function NAV() {
  return (
    <div>
      <div className="Navigation_Bar">
        <a href="#" className="brand">
          <img className="Logo" src={Logo} />
        </a>

        <div className="left">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Authentication">Authentication</NavLink>
        </div>
        <div className="right">
          <NavLink to="/Chatroom">Chatroom</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NAV;
