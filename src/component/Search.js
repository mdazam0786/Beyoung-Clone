import React, { useState, useEffect } from "react";

import SearchResult from "./SearchResult";

const Search = (props) => {
  const [searchData, setSearchData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const muURl = 'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"T-shirt"}'
        const term = props.res;
        const url= `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${term}"}`
        const response = await fetch(
          url,
          {
            method: "GET",
            headers: {
              projectId: "f104bi07c490",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSearchData(data["data"]);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {searchData && <SearchResult res={searchData} />}

    </div>
  );
};

export default Search;



