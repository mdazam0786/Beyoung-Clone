import "./App.css";
import Navbar from "./component/Navbar";
import Forget from "./pages/Forget";
import Homepage from "./pages/Homepage";
import ReadtDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./component/SearchResult";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SeachResult" element={<SearchResult />} />
        {/* <Route path="/" element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
