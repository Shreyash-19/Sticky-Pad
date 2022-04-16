import React, { useEffect } from "react";
import axios from "axios";
function Header() {
  const [z, setValue] = React.useState("0");
  const [x, setX] = React.useState("0");

  return (
    <div>
      <header>
        <h1>STICKY PAD </h1>
      </header>
    </div>
  );
}
export default Header;
