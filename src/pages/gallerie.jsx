"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RestaurantGallerie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const galleryImages = [
    {
      id: 1,
      src: "/assets/pictures/gallerie/1.jpg",
      alt: "Restaurant Interior",
    },
    {
      id: 2,
      src: "/assets/pictures/gallerie/2.jpg",
      alt: "Elegant Dining Room",
    },
    {
      id: 3,
      src: "/assets/pictures/gallerie/3.jpg",
      alt: "Gourmet Food Presentation",
    },
    {
      id: 4,
      src: "/assets/pictures/gallerie/4.jpg",
      alt: "Menu Design",
    },
    {
      id: 5,
      src: "/assets/pictures/gallerie/5.jpg",
      alt: "Chef Cooking",
    },
    {
      id: 6,
      src: "/assets/pictures/gallerie/6.jpg",
      alt: "Wine Service",
    },
    {
      id: 7,
      src: "/assets/pictures/gallerie/7.jpg",
      alt: "Pasta Dish",
    },
    {
      id: 8,
      src: "/assets/pictures/gallerie/8.jpg",
      alt: "Restaurant Terrace",
    },
    {
      id: 9,
      src: "/assets/pictures/gallerie/9.jpg",
      alt: "Chocolate Dessert",
    },
    {
      id: 10,
      src: "/assets/pictures/gallerie/10.jpeg",
      alt: "Restaurant Bar",
    },
    {
      id: 11,
      src: "/assets/pictures/gallerie/11.jpg",
      alt: "Fresh Pizza",
    },
    {
      id: 12,
      src: "/assets/pictures/gallerie/12.jpg",
      alt: "Table Setting",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // GSAP Animations on mount
  useEffect(() => {
    // Hero fade-in
    gsap.fromTo(
      ".hero-section",
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Title animation (scale + fade)
    gsap.fromTo(
      ".title-text",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, delay: 0.3, ease: "back.out" }
    );

    // Gallery cards stagger animation
    gsap.fromTo(
      ".gallery-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.5,
        ease: "power2.out",
      }
    );

    // Footer image fade-in
    gsap.fromTo(
      ".footer-image",
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay: 1, ease: "power2.out" }
    );
  }, []);

  // Gallery card hover animations with GSAP
  const handleCardHover = (e) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      scale: 1.08,
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    });
  };

  const handleCardHoverOut = (e) => {
    gsap.to(e.currentTarget, { duration: 0.3, scale: 1, boxShadow: "none" });
  };

  // Modal animation on open/close
  useEffect(() => {
    if (selectedImage) {
      gsap.fromTo(
        ".modal-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".modal-content",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out" }
      );
    } else {
      gsap.to(".modal-overlay", {
        opacity: 0,
        duration: 0.2,
        pointerEvents: "none",
      });
      gsap.to(".modal-content", { opacity: 0, scale: 0.8, duration: 0.2 });
    }
  }, [selectedImage]);

  return (
    <>
      <Header/>
      <div className="gallerie-container" ref={containerRef}>
        {/* Hero Section */}
        <div className="hero-section">
          <img
            src="/assets/g.png"
            alt="Restaurant Interior Hero"
            className="hero-image"
          />
          <div className="hero-overlay">
            {/* overlay kept empty to preserve visual darkening */}
          </div>
        </div>

        {/* Title section placed under the hero to match the provided photo */}
        <div className="title-section">
          <h2 className="title-text">Our Gallerie</h2>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-content">
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-card"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardHoverOut}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="gallery-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
            <img
            src="/assets/g2.jpg"
            alt="Restaurant Interior Hero"
            className="footer-image"
          />

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedImage.alt}</h3>
                <p className="modal-category">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* styled-jsx: quick styles to match l'image fournie (fond gris, titre script, grille, arrondis, modal) */}
        {/* language=css */}
        <style jsx>{`
          .gallerie-container {
            background: #d1d1d1;
            
            min-height: 100vh;
          }
          .hero-section {
            position: relative;
            height: 250px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.6);
          }
          .hero-overlay {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          /* Title section that matches the reference photo */
          .title-section {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 28px 0 18px;
            background: transparent;
          }
          .title-text {
            font-family: "Brush Script MT", "Island Moments", cursive;
            font-size: 60px; /* ajustable si besoin */
            font-style: italic;
            color: #222;
            letter-spacing: 1px;
            margin: 0;
          }

          .gallery-content {
            max-width: 1100px;
            margin: 30px auto;
            padding: 2px;
          }
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
          }
          .gallery-card {
            background: transparent;
            border-radius: 18px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            transition: none;
          }
          .gallery-card:hover {
            transform: translateY(-6px) scale(1.03);
          }
          .gallery-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            display: block;
            border-radius: 16px;
          }
          .gallery-overlay {
            position: absolute;
            inset: 0;
            border-radius: 16px;
            pointer-events: none;
          }

          .modal-overlay {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.6);
            z-index: 800;
            padding: 24px;
          }
          .modal-content {
            background: #fff;
            border-radius: 12px;
            max-width: 400px;
            width: 100%;
            max-height: 50vh;
            overflow: auto;
            position: relative;
            padding: 18px;
          }
          .modal-image {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 8px;
            object-fit: contain;
          }
          .modal-close {
            position: absolute;
            right: 12px;
            top: 12px;
            background: transparent;
            border: 0;
            cursor: pointer;
            padding: 6px;
          }
          .modal-info {
            margin-top: 12px;
            color: #333;
          }
          .modal-category {
            color: #666;
            font-size: 14px;
            margin-top: 6px;
          }

          .footer-section {
            margin-top: 40px;
          }
          .footer-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 1000px) {
            .gallery-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .gallery-image {
              height: 150px;
            }
          }
          @media (max-width: 700px) {
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .hero-section {
              height: 150px;
            }
          }
        `}</style>
      </div>
      <Footer/>
     </> 
  );
}
