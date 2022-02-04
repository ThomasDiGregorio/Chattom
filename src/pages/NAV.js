import React from "react";
import Logo from "../../Images/imgbin-online-LOGO-1.png";
function NAV() {
  return (
    <div>
      <img className="Logo" src={Logo} /> <a>Home,</a> <a>Authentication,</a>{" "}
      <a>Chatroom</a>
    </div>
  );
}

export default NAV;
