import React from "react";
import "./searchResult/searchResult111.css";

export default function SearchResult(props) {
  async function getProductDetails() {
    console.log("get Product details api call");
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/product/652675ccdaf00355a78380f8",
        {
          method: "GET",
          headers: {
            projectId: "f104bi07c490",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const details = await response.json();
      console.log(details);
    } catch (error) {
      console.log("Error fetching:", error);
    }
  }

  console.log(props.res);
  return (
    <div>
      <div className="main-box">
        {props.res ? (
          <div className="products-grid">
            {props.res.map((item, index) => (
              <div className="products" key={index}>
                <div className="image">
                  <img
                    src={item.displayImage}
                    alt={item.name}
                    onClick={getProductDetails}
                  />
                </div>
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
