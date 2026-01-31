import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // hide header on scroll
  useEffect(() => {
    let timeout = null;
    const onScroll = () => {
      setHidden(true);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setHidden(false), 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`header ${hidden ? "hidden" : ""}`}>
      {/* LOGO */}
      <div className="logo-container">
        <div className="logo-icon">
          <img src="/assets/logo.png" alt="Restaurant Logo" />
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="navigation">
        <NavLink to="/restaurent" end className="nav-link">HOME</NavLink>
        <NavLink to="/menu" className="nav-link">MENU</NavLink>
        <NavLink to="/gallerie" className="nav-link">GALLERIE</NavLink>
        <NavLink to="/aboutus" className="nav-link">ABOUT US</NavLink>
      </nav>

      {/* DESKTOP ICONS */}
      <div className="header-icons">
        <NavLink to="/cart">
          <ShoppingCart color="white" size={26} />
        </NavLink>
        <NavLink to="/reservation" className="reservation-link">
          <button className="reservation-button">Reservation</button>
        </NavLink>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="menu"
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* MOBILE MENU (NOT FULLSCREEN) */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className="mobile-nav"
          onClick={(e) => e.stopPropagation()}
        >
          <NavLink to="/restaurent" onClick={() => setMenuOpen(false)} className="mobile-link">HOME</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)} className="mobile-link">MENU</NavLink>
          <NavLink to="/gallerie" onClick={() => setMenuOpen(false)} className="mobile-link">GALLERIE</NavLink>
          <NavLink to="/aboutus" onClick={() => setMenuOpen(false)} className="mobile-link">ABOUT US</NavLink>
          <NavLink to="/cart" onClick={() => setMenuOpen(false)} className="mobile-link">CART</NavLink>
          <NavLink to="/reservation" onClick={() => setMenuOpen(false)} className="mobile-link">RESERVATION</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
