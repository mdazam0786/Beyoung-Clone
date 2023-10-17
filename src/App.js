import "./App.css";
import Forget from "./pages/Forget";
import Homepage from "./pages/Homepage";
import ReadtDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./component/SearchResult";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Log11 from "./pages/Log11";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/SeachResult" element={<SearchResult />} />
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/" element={<Signup />}></Route> */}
        {/* <Route path="/" element={<Log11 />}></Route> */}

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
