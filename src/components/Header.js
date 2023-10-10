import React from "react";
import Search from "./Search";

function Header({changeFilterVal}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search changeFilterVal={changeFilterVal}/>
    </header>
  );
}

export default Header;
