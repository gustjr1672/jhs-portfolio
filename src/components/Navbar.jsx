import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li><a href="#intro">소개</a></li>
        <li><a href="#career">경력</a></li>
        <li><a href="#projects">프로젝트</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
