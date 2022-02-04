import React from "react";
import Logo from "../../Images/imgbin-online-LOGO-1.png";
function NAV() {
  return (
    <div>
      <div className="Navigation_Bar">
        <a href="#" className="brand">
          <img className="Logo" src={Logo} />
        </a>

        <div className="left">
          <a href="#" className="link">
            Home
          </a>
          <a href="#" className="link">
            Authentication
          </a>
        </div>
        <div className="right">
          <a href="#" className="link">
            Chatroom
          </a>
        </div>
      </div>
    </div>
  );
}

export default NAV;
