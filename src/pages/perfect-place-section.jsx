import React, { useEffect, useState, useMemo } from "react";
import "./perfect-place-section.css";

const PerfectPlaceSection = () => {
  const promoCards = [
    {
      title: "Appetizers",
      subtitle: "Fresh starters to begin your dining experience",
      price: "$15",
      unit: "per person",
      img: "/assets/c1.jpg",
      alt: "Delicious appetizers",
      className: "appetizers-card",
    },
    {
      title: "Cocktails",
      subtitle: "Canonical classics to obscure the drinks",
      price: "$120",
      unit: "per person",
      img: "/assets/pictures/coktailBackground.png",
      alt: "Gourmet main courses",
      className: "main-courses-card",
    },
    {
      title: "Seafood",
      subtitle: "Fresh catch prepared with traditional recipes",
      price: "$45",
      unit: "per person",
      img: "/assets/pictures/seafood.jpg",
      alt: "Fresh seafood dishes",
      className: "seafood-card",
    },
    {
      title: "Beverages",
      subtitle: "Refreshing drinks and premium selections",
      price: "$12",
      unit: "per person",
      img: "/assets/pictures/beverages.jpg",
      alt: "Assorted beverages",
      className: "beverages-card",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Responsive items per slide: 1 on mobile (<=768px), 2 on desktop
  const [itemsPerSlide, setItemsPerSlide] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth <= 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < promoCards.length; i += itemsPerSlide) {
      result.push(promoCards.slice(i, i + itemsPerSlide));
    }
    return result;
  }, [promoCards, itemsPerSlide]);

  useEffect(() => {
    // reset index when slides count changes
    setActiveIndex(0);
    if (!slides.length) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="perfect-place-section">
      <div className="perfect-place-container">
        {/* Main Title */}
        <h2 className="perfect-place-title">
          Perfect Place For An Exceptional Experience
        </h2>

        {/* Content Row */}
        <div className="content-row">
          {/* Left Side - Images */}
          <div className="images-container-p">
            <img
              className="image-container-p"
              src="/assets/p-place.png"
              alt="Chef working in kitchen"
            />


          </div>

          {/* Right Side - Text and Features */}
          <div className="content-text">
            <p className="description-text">
              Discover culinary excellence at our restaurant, where premium
              ingredients meet innovative cooking techniques. Our expert chefs
              craft each dish with passion, delivering authentic flavors and
              unforgettable dining moments in an elegant atmosphere designed for
              your comfort and enjoyment.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 8h10M7 12h6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Online Food Ordering</h3>
                  <p className="feature-description">
                    Easy food delivery from the best restaurants
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">100% Healthy Food</h3>
                  <p className="feature-description">
                    Eating a wide variety of nutritious healthy foods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards (autoplay slider — 2 cards per slide) */}
        <div className="promo-cards" style={{ overflow: "hidden" }}>
          <div
            className="promo-slider"
            style={{
              display: "flex",
              width: `${slides.length * 100}%`,
              transform: `translateX(-${activeIndex * (100 / slides.length)}%)`,
              transition: "transform 0.6s ease",
            }}
          >
            {slides.map((slide, sidx) => (
              <div
                key={sidx}
                className="promo-slide"
                style={{ width: `${100 / slides.length}%`, display: "flex" }}
              >
                {slide.map((card, idx) => (
                  <div
                    key={idx}
                    className={`promo-card ${card.className || ""}`}
                    style={{ flex: 1 }}
                  >
                    <div className="card-content">
                      <div className="card-text">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-subtitle">{card.subtitle}</p>
                      </div>
                      <div className="card-price">
                        <span className="price">
                          <span className="price-amount">{card.price}</span>
                          <span className="price-unit">{card.unit}</span>
                        </span>
                      </div>
                    </div>
                    <div className="card-image">
                      <img src={card.img} alt={card.alt} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
                style={{ cursor: "pointer" }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectPlaceSection;
