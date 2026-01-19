import React, { useEffect, useState } from "react";
import {
  Armchair,
  Waves,
  Home,
  Coffee,
  ChefHat,
  Wifi,
  Gamepad2,
} from "lucide-react";
import "./why-choose-us-section.css";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Waves size={48} />,
      title: "POOL",
      description: "Relax by our stunning swimming pool",
    },
    {
      icon: <Coffee size={48} />,
      title: "ALWAYS QUALITY BEANS",
      description: "Premium coffee beans for the perfect brew",
    },
    {
      icon: <ChefHat size={48} />,
      title: "EXPERIENCED CHEFS",
      description: "Professional chefs with years of expertise",
    },
    {
      icon: <Wifi size={48} />,
      title: "HIGH WIFI",
      description: "Fast and reliable internet connection",
    },
    {
      icon: <Gamepad2 size={48} />,
      title: "GAMES",
      description: "Entertainment options for all ages",
    },
  ];

  const feedbacks = [
    {
      text: "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts",
      name: "Bratlee Hamint",
      images: [
        "/restaurent/assets/banner1.png",
        "/restaurent/assets/banner2.png",
        "/restaurent/assets/banner3.png",
      ],
      imageIndex: 0,
    },
    {
      text: "Fantastic experience — the flavors, the atmosphere and the service were unforgettable. We’ll definitely be back.",
      name: "Marianne Coup",
      images: [
        "restaurent/assets/banner1.png",
        "restaurent/assets/banner2.png",
        "restaurent/assets/banner3.png",
      ],
      imageIndex: 1,
    },
    {
      text: "An exceptional evening with beautiful presentation and delightful desserts — highly recommended!",
      name: "Jules Armand",
      images: [
        "restaurent/assets/banner1.png",
        "restaurent/assets/banner2.png",
        "restaurent/assets/banner3.png",
      ],
      imageIndex: 2,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // autoplay feedbacks every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(id);
  }, [feedbacks.length]);

  // trigger a quick fade animation on change
  useEffect(() => {
    setIsFading(true);
    const t = setTimeout(() => setIsFading(false), 300);
    return () => clearTimeout(t);
  }, [activeIndex]);

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="section-title">Why people choose us?</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item icon-feature">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* Mobile-only infinite scroller: duplicated list for seamless loop */}
        <div
          className="icon-scroller mobile-only"
          aria-label="Features scrolling"
          role="region"
        >
          <div className="icon-track">
            {[...features, ...features].map((feature, idx) => (
              <div key={`sc-${idx}`} className="feature-item icon-feature">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="feedback-section">
          <div className="feedback-content">
            <h3 className="feedback-title">Our Customer Feedbacks</h3>

            <div className={`feedback-card ${isFading ? "fade" : ""}`}>
              <p className="feedback-text">{feedbacks[activeIndex].text}</p>
              <div className="customer-info">
                <span className="customer-name">
                  {feedbacks[activeIndex].name}
                </span>
                <div className="customer-avatar"></div>
              </div>
            </div>
          </div>

          <div className="feedback-images">
            <div
              className={`food-image-1 ${
                feedbacks[activeIndex].imageIndex === 0 ? "active" : ""
              }`}
            >
              <img
                src={feedbacks[activeIndex].images[0]}
                alt="Grilled steak with vegetables"
              />
            </div>
            <div
              className={`food-image-2 ${
                feedbacks[activeIndex].imageIndex === 1 ? "active" : ""
              }`}
            >
              <img
                src={feedbacks[activeIndex].images[1]}
                alt="Coffee cup with beans"
              />
            </div>
            <div
              className={`food-image-3 ${
                feedbacks[activeIndex].imageIndex === 2 ? "active" : ""
              }`}
            >
              <img
                src={feedbacks[activeIndex].images[2]}
                alt="Layered dessert in glass"
              />
            </div>
          </div>
        </div>

        {/* pagination linked to feedbacks */}
        <div className="pagination-dots">
          {feedbacks.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${activeIndex === idx ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              style={{ cursor: "pointer" }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
