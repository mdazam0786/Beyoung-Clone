import React from "react";
import "./searchResult/searchResult.css";

function SearchResult({ apiData }) {
  return (
    <div>
      <div className="main-box">
        <div className="container">
          {apiData.map((item, index) => (
            <div className="products" key={index}>
              <div className="image">
                <img src={item.displayImage} alt={item.name} />
              </div>
              <div className="name">{item.name}</div>
              <div className="price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;