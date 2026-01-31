import React, { useEffect, useState } from "react";
import "./restaurant-hero.css";
import { ShoppingCart, User } from "lucide-react";
import ChefMealCarousel from "../components/ChefMealCarousel";

function HeroTextAnimated() {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const captions = ["Fine Dining", "Chef Excellence", "Taste Luxury"];

  useEffect(() => {
    // trigger a slightly longer and more visible animation on change
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 1800);
    return () => clearTimeout(t);
  }, [captionIndex]);

  return (
    <div
      className={`hero-title ${animate ? "caption-animate" : ""}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <h1 className="hero-caption" role="heading" aria-level="1">
        {captions[captionIndex]}
      </h1>
      <span className="caption-underline" aria-hidden="true" />
      <p className="hero-subline">
        Prepared with passion and expertise by our chef — each dish is an
        experience designed to awaken your senses. Savor the moment and let
        yourself be transported by our culinary creations.
      </p>

      {/* invisible carousel used only to drive captions: */}
      <div style={{ display: "none" }}>
        <ChefMealCarousel
          images={[
            "/assets/pictures/r4.png",
            "/assets/pictures/r3.png",
            "/assets/pictures/r5.png",
          ]}
          captions={captions}
          interval={3000}
          pauseOnHover={false}
          onChange={(idx) => setCaptionIndex(idx)}
        />
      </div>
    </div>
  );
}

const RestaurantHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // For a static hero image, treat it as "playing" so animations like the logo run
    setIsPlaying(true);
  }, []);

  return (
    <div className="hero-container">
      {/* Image background (replacing previous video) */}
      <div className="hero-video" aria-hidden={!isPlaying}>
        <img
          className="hero-chef-image"
          src="restaurent/assets/pictures/bg3.jpg"
          alt="Chef at work"
        />
        <div className="video-overlay" />
      </div>

      {/* Main Hero Content with animated caption synced to carousel */}
      <div className="hero-content">
        <HeroTextAnimated />
      </div>

      {/* Food Images */}
      <div className="hero-carousel">
        <ChefMealCarousel
          images={[
            "/assets/pictures/r4.png",
            "/assets/pictures/r3.png",
            "/assets/pictures/r5.png",
          ]}
          interval={7000}
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default RestaurantHero;
