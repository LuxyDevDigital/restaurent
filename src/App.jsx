import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantMenu from "./pages/RestaurantMenu";
import Reservation from "./pages/reservation";
import RestaurantGallerie from "./pages/gallerie";
import AboutUs from "./pages/aboutus";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<RestaurantMenu />} />
        <Route path="/gallerie" element={<RestaurantGallerie />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
