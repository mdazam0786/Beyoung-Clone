import React, { useState, useEffect } from "react";

export default function ProductDetails() {
  const [detail, setDetail] = useState("");

  async function productDetail() {
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
  useEffect(() => {
    productDetail();
  }, []);

  return (
    <div>
      <div>product pages</div>
      <button onClick={detail && productDetail}></button>
    </div>
  );
}
