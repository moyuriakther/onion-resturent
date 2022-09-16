import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/common/Footer/Footer";
import Header from "./Components/common/Header/Header";
import NotFound from "./Components/common/NotFound/NotFound";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Login/Register";
import ProductDetail from "./Components/Pages/Products/ProductDetail";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productDetail/:productName" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
