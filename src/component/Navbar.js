import React, { useState, useEffect } from "react";
import "./navbar/offer-top.css";
import "./navbar/header-top.css";
import "./navbar/header.css";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "./Search";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleClick = () => {
    setSearchButtonClicked(true);
  };

  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  

  return (
    <nav className="navbar">
      {/* offer-top  */}
      <div className="offer-top">
        <span>Free Shipping on All Orders |</span> Get Extra ₹100 OFF on Spent
        of ₹999 Use Code:
        <span>BEYOUNG100</span>
      </div>

      {/* header-top  */}
      <section className="header-top">
        <div className="container">
          <div className="left">
            <a href="/" className="track">
              <PlaceIcon />
            </a>
            <a href="/">track order</a>
          </div>
          <div className="right">
            <Link
              to="/Login"
            >
              log in
            </Link>
            <a href="/" className="seprate">
              |
            </a>
            <Link to="/Signup">sign up</Link>
          </div>
        </div>
      </section>

      {/* header  */}
      <header className="header">
        <div className="left">
          <div className="logo">beyoung</div>
          <div className="list-item">
            <ul>
              <li>men</li>
              <li>women</li>
              <li>combos</li>
              <li>joggers</li>
              <li>shop the look</li>
              <li>shop by collection</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div>
            <div
              className={`search-toggle ${
                isSearchVisible ? "visible" : "hidden"
              }`}
            >
              <input
                type="text"
                placeholder="Search entire store here..."
                onClick={handleSearch}
              />
              <button onClick={handleClick}>Search</button>
            </div>
            <SearchIcon className="search-bar" onClick={toggleSearch} />
          </div>
          {searchButtonClicked && <Search />}

          <div>
            <FavoriteIcon />
          </div>
          <div>
            <ShoppingCartIcon />
          </div>
        </div>
      </header>
    </nav>
  );
}
