import "./App.css";
import Forget from "./pages/Forget";
import Homepage from "./pages/Homepage";
import ReadtDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./component/SearchResult";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SeachResult" element={<SearchResult />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Forget" element={<Forget />}></Route>
        <Route path="/ProductDetails" element={<ProductDetails />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
