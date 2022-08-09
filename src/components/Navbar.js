import { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const { pages, onPage, toggled, handleClick, handleToggleClick } = props;

  return (
    <div
      style={{ position: "fixed", zIndex: "10", width: "100%" }}
      className="nav-header"
    >
      <div
        className={`nav-sub-header topnav${toggled ? " responsive" : ""}`}
        id="myTopnav"
        style={{ margin: "auto" }}
      >
        {pages.map((page) => (
          <a
            key={page.id}
            className={`${onPage === page.id ? "active" : ""}`}
            onClick={() => handleClick(page.id)}
          >
            {page.title}
          </a>
        ))}
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={handleToggleClick}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
