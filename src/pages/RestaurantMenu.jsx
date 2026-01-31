import "./menu.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useRef, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

export default function RestaurantMenu() {
  const [selectedCategory, setSelectedCategory] = useState("hamburger");
  const [selectedItem, setSelectedItem] = useState({
    name: "HAMBURGER",
    price: "60 MAD",
    image: "/assets/pictures/1b.png",
    description:
      "Un incontournable qui traverse les générations. Notre Cheeseburger est composé d'un steak haché de bœuf 100 % pur, grillé à la perfection, surmonté d'une tranche de fromage cheddar fondant qui recouvre délicieusement la viande.",
  });

  // scroll handling for sidebar categories
  const sidebarRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const updateScroll = () => {
    const el = sidebarRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 0);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight);
  };

  const scrollByAmount = (amt) => {
    const el = sidebarRef.current;
    if (!el) return;
    el.scrollBy({ top: amt, behavior: "smooth" });
  };

  const scrollUp = () => scrollByAmount(-120);
  const scrollDown = () => scrollByAmount(120);

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;
    updateScroll();
    const onScroll = () => updateScroll();
    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  // ensure active category stays visible
  useEffect(() => {
    const el = sidebarRef.current;
    const active = el?.querySelector(".sidebar-item.active");
    active?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    updateScroll();
  }, [selectedCategory]);

  const menuCategories = {
    hamburger: {
      items: [
        {
          name: "HAMBURGER",
          price: "60 MAD",
          image: "/assets/pictures/1b.png",
          description:
            "Un incontournable qui traverse les générations. Notre Cheeseburger est composé d'un steak haché de bœuf 100 % pur, grillé à la perfection, surmonté d'une tranche de fromage cheddar fondant qui recouvre délicieusement la viande.",
        },
      ],
      gallery: [
        { name: "Cheeseburger", image: "/assets/pictures/3b.png" },
        {
          name: "Double Cheeseburger",
          image: "/assets/pictures/1b.png",
        },
        { name: "Mini Burger", image: "/assets/pictures/2b.png" },
        { name: "BBQ Burger", image: "/assets/pictures/4b.png" },
        { name: "Fish Burger", image: "/assets/pictures/5b.png" },
      ],
    },
    pates: {
      items: [
        {
          name: "SPAGHETTI CARBONARA",
          price: "45 MAD",
          image: "/assets/pictures/5pa.png",
          description:
            "Des spaghettis crémeux avec des lardons, des œufs frais et du parmesan. Un classique italien préparé selon la tradition.",
        },
      ],
      gallery: [
        {
          name: "Spaghetti Carbonara",
          image: "/assets/pictures/5pa.png",
        },
        {
          name: "Penne Arrabbiata",
          image: "/assets/pictures/7pa.png",
        },
        { name: "Lasagne", image: "/assets/pictures/3pa.png" },
        {
          name: "Fettuccine Alfredo",
          image: "/assets/pictures/2pa.png",
        },
      ],
    },
    pizza: {
      items: [
        {
          name: "PIZZA MARGHERITA",
          price: "55 MAD",
          image: "/assets/pictures/1p.png",
          description:
            "La pizza classique avec sauce tomate, mozzarella fraîche et basilic. Simple et délicieuse, comme en Italie.",
        },
      ],
      gallery: [
        {
          name: "Pizza Margherita",
          image: "/assets/pictures/1p.png",
        },
        {
          name: "Pizza Pepperoni",
          image: "/assets/pictures/2p.png",
        },
        {
          name: "Pizza Quatre Saisons",
          image: "/assets/pictures/5p.png",
        },
        {
          name: "Pizza Végétarienne",
          image: "/assets/pictures/4p.png",
        },
      ],
    },
    drinks: {
      items: [
        {
          name: "JUS D'ORANGE FRAIS",
          price: "25 MAD",
          image: "/assets/pictures/1j.png",
          description:
            "Jus d'orange fraîchement pressé, riche en vitamine C. Parfait pour accompagner votre repas.",
        },
      ],
      gallery: [
        { name: "Jus d'Orange", image: "/assets/pictures/5j.png" },
        { name: "Jus d'ananas", image: "/assets/pictures/1j.png" },
        { name: "Eau Minérale", image: "/assets/pictures/4j.png" },
        { name: "Jus de citron", image: "/assets/pictures/6j.png" },
        {
          name: "jus de passtique",
          image: "/assets/pictures/3j.png",
        },
        { name: "Jus de limon", image: "/assets/pictures/2j.png" },
      ],
    },
    sandwich: {
      items: [
        {
          name: "SANDWICH MIXTE",
          price: "35 MAD",
          image: "/assets/pictures/s1.png",
          description:
            "Sandwich généreux garni de viande, légumes frais et sauce maison, servi chaud et croustillant.",
        },
      ],
      gallery: [
        { name: "Sandwich Mixte", image: "/assets/pictures/s1.png" },
        { name: "Club Sandwich", image: "/assets/pictures/2s.png" },
        {
          name: "croissant sandwich",
          image: "/assets/pictures/3s.png",
        },
        { name: "sandwich meal", image: "/assets/pictures/4s.png" },
        { name: "Panini", image: "/assets/pictures/5s.png" },
      ],
    },
    coffee: {
      items: [
        {
          name: "ESPRESSO",
          price: "18 MAD",
          image: "/assets/pictures/1co.png",
          description:
            "Café espresso torréfié sur place, arôme intense et crémeux.",
        },
      ],
      gallery: [
        { name: "Latte", image: "/assets/pictures/5co.png" },
        { name: "Cappuccino", image: "/assets/pictures/1co.png" },
        {
          name: "haute chocolate ",
          image: "/assets/pictures/3co.png",
        },
        { name: "Latte", image: "/assets/pictures/4co.png" },
      ],
    },
    dessert: {
      items: [
        {
          name: "CHEESECAKE",
          price: "30 MAD",
          image: "/assets/pictures/4c.png",
          description: "Cheesecake onctueux aux fruits rouges, préparé maison.",
        },
      ],
      gallery: [
        { name: "Cheesecake", image: "/assets/pictures/4c.png" },
        {
          name: "Pancakes",
          image:
            "/assets/pictures/These_Are_The_BEST_Pancakes_In_America-removebg-preview.png",
        },
        {
          name: "Chocolate Tirami su",
          image: "/assets/pictures/3c.png",
        },
        { name: "chocolate cake", image: "/assets/pictures/1c.png" },
        {
          name: "dessert frambois",
          image: "/assets/pictures/2c.png",
        },
      ],
    },
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedItem(menuCategories[category].items[0]);
  };

  const handleGalleryItemClick = (item) => {
    setSelectedItem({
      name: item.name.toUpperCase(),
      price: "60 MAD",
      image: item.image,
      description: `Délicieux ${item.name.toLowerCase()} préparé avec les meilleurs ingrédients. Une expérience culinaire exceptionnelle.`,
    });
  };

  return (
    <>
      <Header />
      <div className="restaurant-container">
        <div className="main-layout">
          {/* Left Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-scroll" ref={sidebarRef}>
              <div className="sidebar-items">
                <div
                  className={`sidebar-item ${
                    selectedCategory === "hamburger" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("hamburger")}
                >
                  <img
                    src="/assets/pictures/1b.png"
                    alt="Hamburger"
                  />
                  <p>hamburger</p>
                </div>

                <div
                  className={`sidebar-item ${
                    selectedCategory === "pates" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("pates")}
                >
                  <img src="/assets/pictures/2pa.png" alt="Pates" />
                  <p>pates</p>
                </div>

                <div
                  className={`sidebar-item ${
                    selectedCategory === "pizza" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("pizza")}
                >
                  <img src="/assets/pictures/3p.png" alt="Pizza" />
                  <p>pizza</p>
                </div>

                <div
                  className={`sidebar-item ${
                    selectedCategory === "drinks" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("drinks")}
                >
                  <img src="/assets/pictures/5j.png" alt="Drinks" />
                  <p>drinks</p>
                </div>

                <div
                  className={`sidebar-item ${
                    selectedCategory === "sandwich" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("sandwich")}
                >
                  <img
                    src="/assets/pictures/s1.png"
                    alt="Sandwich"
                  />
                  <p>sandwich</p>
                </div>

                <div
                  className={`sidebar-item ${
                    selectedCategory === "coffee" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("coffee")}
                >
                  <img src="/assets/pictures/1co.png" alt="Coffee" />
                  <p>coffee</p>
                </div>

                <div
                  className={`sidebar-item ${
                    selectedCategory === "dessert" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("dessert")}
                >
                  <img src="/assets/pictures/4c.png" alt="Dessert" />
                  <p>dessert</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            {/* Menu Title */}
            <div className="menu-title">
              <h2>menu</h2>
            </div>

            {/* Horizontal Category Navigation */}
            <div className="category-nav">
              <button
                className={`category-btn ${
                  selectedCategory === "hamburger" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("hamburger")}
              >
                <img src="/assets/pictures/1b.png" alt="Hamburger" />
                <span>hamburger</span>
              </button>

              <button
                className={`category-btn ${
                  selectedCategory === "pates" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("pates")}
              >
                <img src="/assets/pictures/2pa.png" alt="Pates" />
                <span>pates</span>
              </button>

              <button
                className={`category-btn ${
                  selectedCategory === "pizza" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("pizza")}
              >
                <img src="/assets/pictures/3p.png" alt="Pizza" />
                <span>pizza</span>
              </button>

              <button
                className={`category-btn ${
                  selectedCategory === "drinks" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("drinks")}
              >
                <img src="/assets/pictures/5j.png" alt="Drinks" />
                <span>drinks</span>
              </button>

              <button
                className={`category-btn ${
                  selectedCategory === "sandwich" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("sandwich")}
              >
                <img src="/assets/pictures/s1.png" alt="Sandwich" />
                <span>sandwich</span>
              </button>

              <button
                className={`category-btn ${
                  selectedCategory === "coffee" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("coffee")}
              >
                <img src="/assets/pictures/1co.png" alt="Coffee" />
                <span>coffee</span>
              </button>

              <button
                className={`category-btn ${
                  selectedCategory === "dessert" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("dessert")}
              >
                <img src="/assets/pictures/4c.png" alt="Dessert" />
                <span>dessert</span>
              </button>
            </div>

            {/* Featured Item Section */}
            <div className="featured-section">
              {/* Main Item Image */}
              <div className="main-item">
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.name}
                />
                <div className="price-tag">
                  <p>{selectedItem.price}</p>
                </div>
              </div>

              {/* Description Card */}
              <div className="description-card">
                <h3>{selectedItem.name}</h3>
                <p>{selectedItem.description}</p>
                <button className="add-to-cart-btn">
                  <span>Add to cart</span>
                  <ShoppingCart color="black" size={28} className="icon" />
                </button>
              </div>
            </div>

            {/* Bottom Gallery Row */}
            <div className="gallery-row">
              {menuCategories[selectedCategory]?.gallery.map((item, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => handleGalleryItemClick(item)}
                >
                  <img src={item.image || "/placeholder.svg"} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
