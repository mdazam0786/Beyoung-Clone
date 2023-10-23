
import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";


const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState([]);

    const fetchData = async () => {
      console.log("fetchData called");
      setSearchData(null);
    // if (props.res.trim() === "") {

    //   return;
    // }
    
    const term = props.res;
    console.log("itemSearc " + term);
    const url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${term}"}`;

    try {
      const response = await fetch(url, {
        headers: {
          projectId: "f104bi07c490",
        },
      });

      if (response.ok) {
        const data = await response.json();
        // setSearch(data.data);
        setSearchData([]);
        console.log(data);
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

  };

  
  useEffect(() => {
    fetchData();
  }, []);

return (
    <div>
      {searchData ? <SearchResult res={searchData} /> : <p>Loading...</p> }
    </div>
  )
};

export default Search;

/* 
import React, { useState, useEffect } from "react";

import SearchResult from "./SearchResult";

const Search = (props) => {
  const [searchData, setSearchData] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myURl = 'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"T-shirt"}'
        // const term = props.res;
        // const url= `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${term}"}`
        const response = await fetch(
          myURl,
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

  return <div>{searchData && <SearchResult res={searchData} />}</div>;

  

};

export default Search;
*/

// import React, { useState, useEffect } from "react";

// import SearchResult from "./SearchResult";

// const Search = () => {
//   const [searchData, setSearchData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"T-shirt"}',
//           {
//             method: "GET",
//             headers: {
//               projectId: "f104bi07c490",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         setSearchData(data["data"]);
//         console.log(data);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {searchData && <SearchResult res={searchData} />}

//     </div>
//   );
// };

// export default Search;