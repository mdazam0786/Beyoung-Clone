import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchResult from "./SearchResult";
import { Link, Route, Routes } from "react-router-dom";
import "./navbar/offer-top.css";
import "./navbar/header-top.css";
import "./navbar/header.css";
import Search from "./Search";

export default function Navbar() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  // to 
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const projectId = "f104bi07c490";

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    const dynamicApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${searchTerm}"}`;

    try {
      const response = await fetch(dynamicApi, {
        headers: {
          projectId: projectId,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data.data);
        setSearchTerm("");
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <nav className="navbar">
      {/* offer-top  */}
      <div className="offer-top">
        <span>Free Shipping on All Orders |</span> Get Extra ₹100 OFF on Spent
        of ₹999 Use Code: <span>BEYOUNG100</span>
      </div>

      {/* header-top  */}
      <section className="header-top">
        <div className="container">
          <div className="left">
            <Link to="/">
              <PlaceIcon />
            </Link>
            <Link to="/">track order</Link>
          </div>
          <div className="right">
            <Link to="/" onClick={toggleLogin}>
              log in
            </Link>
            {/* <div
              className={`login-toggle ${
                isLoginVisible ? "visible" : "hidden"
              }`}
            ></div> */}
            <Link to="/" className="separate">
              |
            </Link>
            <Link to="/">sign up</Link>
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
            <input
              type="text"
              placeholder="Search entire store here..."
              value={searchTerm}
              onChange={handleInput}
            />
            <Search />
            {/* <Link to="/searchResult"> */}
              {/* <SearchIcon className="search-bar" onClick={handleSearch} /> */}
            {/* </Link> */}
          </div>

          <div>
            <FavoriteIcon />
          </div>
          <div>
            <ShoppingCartIcon />
          </div>
        </div>
      </header>
      {/* <Routes>
        <Route
          path="/searchResult"
          element={<SearchResult apiData={searchResult} />}
        />
      </Routes> */}
    </nav>
  );
}
