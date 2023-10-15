import React from "react";
import "./searchResult/searchResult.css";

export default function SearchResult(props) {
  console.log(props.res);
  return (
    <div>
      <div className="main-box">
        {props.res ? (
          <div className="container">
            {props.res.map((item, index) => (
              <div className="products" key={index}>
                <div className="image">
                  <img src={item.displayImage} alt={item.name} />
                </div>
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
              </div>
            ))}
          </div>
        ) :(
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}


