import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RestaurantMenu from "./pages/RestaurantMenu"
import Reservation from "./pages/reservation"
import RestaurantGallerie from "./pages/gallerie"
import AboutUs from "./pages/aboutus"
import Footer from './components/Footer'
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurent" element={<Home/>} />
        <Route path="/restaurent/menu" element={<RestaurantMenu/>} />
        <Route path="/restaurent/gallerie" element={<RestaurantGallerie/>} />
        <Route path="/restaurent/reservation" element={<Reservation/>} />
        <Route path="/restaurent/aboutus" element={<AboutUs/>} />
        <Route path="/restaurent/footer" element={<Footer/>} />
        <Route path="/restaurent/cart" element={<Cart/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
