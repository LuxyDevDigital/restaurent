import React, { useEffect, useRef, useState } from "react";
import "./ChefMealCarousel.css";

export default function ChefMealCarousel({
  images = [
    "/restaurent/assets/pictures/1.jpg",
    "/restaurent/assets/pictures/2.jpg",
    "/restaurent/assets/pictures/3.jpg",
  ],
  captions = [],
  interval = 3000,
  pauseOnHover = true,
  onChange = () => {},
  chefScale = 1.12,
}) {
  const [index, setIndex] = useState(0);
  const [isPicking, setIsPicking] = useState(false);
  const intervalRef = useRef(null);
  const timeouts = useRef([]);

  useEffect(() => {
    onChange(0);
  }, []);

  useEffect(() => {
    startCycle();
    return cleanup;
  }, [images.length, interval]);

  function cleanup() {
    clearInterval(intervalRef.current);
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }

  function startCycle() {
    cleanup();

    function pick() {
      setIsPicking(true);

      timeouts.current.push(
        setTimeout(() => {
          setIndex((prev) => {
            const next = (prev + 1) % images.length;
            onChange(next);
            return next;
          });
        }, 500)
      );

      timeouts.current.push(setTimeout(() => setIsPicking(false), 1100));
    }

    timeouts.current.push(setTimeout(pick, 700));
    intervalRef.current = setInterval(pick, interval);
  }

  return (
    <div className="chef-carousel">
      {/* PLATE */}
      <div className={`plate ${isPicking ? "lift bring-from-side" : ""}`}>
        <img
          src={images[index]}
          alt={captions[index] || `Repas ${index + 1}`}
        />
        <div className="plate-shadow" />
      </div>

      {/* CHEF */}
      <div className={`chef ${isPicking ? "picking" : ""}`}>
        <div
          className="chef-scale"
          style={{ transform: `scale(${chefScale})` }}
        >
          <svg
            width="992"
            height="1189"
            viewBox="0 0 992 1189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M493 1150.49L636.5 760.993M371 859.993V1150.49"
              stroke="white"
              stroke-width="40"
              stroke-linecap="round"
            />
            <path
              d="M893.5 266.494C1002 288.493 1015.5 521.493 818.25 503.994M818.25 503.994L853.5 475.993M818.25 503.994L800 527.994M765.5 285.045C760 262.493 757 256.993 759 231.493M765.5 285.045C790.931 300.771 810.621 323.239 830.5 357.994M765.5 285.045C739.469 268.948 707.422 259.914 663 251.994L624.25 304.994M760.5 145.494C760.5 25.4934 594 -27.5065 530.5 72.4942L624.25 304.994M624.25 304.994L589.512 353.775C589.22 354.185 589.279 354.75 589.65 355.091L613.5 376.994M112 786.494C135.5 723.994 92 647.493 20 647.493M112 786.494L272.876 993.191C273.219 993.632 273.857 993.707 274.292 993.356L371 915.494M112 786.494L200 717.494M200 717.494C198 682.993 218 650.493 256 647.493M200 717.494L293.343 838.145C293.698 838.604 294.368 838.665 294.8 838.279L471.215 680.748C471.399 680.585 471.636 680.494 471.881 680.494H566M566 680.494V607.486C566 607.175 565.856 606.883 565.61 606.693L488.378 547.17C487.908 546.808 487.855 546.12 488.263 545.69L524.049 507.969C524.323 507.68 524.4 507.257 524.245 506.891L508.346 469.311C508.148 468.845 508.34 468.3 508.779 468.048C560.696 438.273 585.203 415.752 613.5 376.994M566 680.494H683.5M613.5 376.994L800 527.994M800 527.994L702.282 602.778C702.1 602.918 701.971 603.116 701.917 603.34L683.5 680.494M683.5 680.494H701C701.552 680.494 702 680.942 702 681.494V897.494M702 897.494L605.5 1168.99M702 897.494V1168.99"
              stroke="white"
              stroke-width="40"
              stroke-linecap="round"
            />
            <path
              d="M890.5 263.494C974.5 134.494 836.5 30.9934 749 68.9937"
              stroke="white"
              stroke-width="40"
              stroke-linecap="round"
            />
            <path
              d="M448 818.993V819.493M448 915.993V916.993M448 1013.49V1014.49"
              stroke="white"
              stroke-width="40"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      {/* GLINT */}
      <div className={`glint ${isPicking ? "active" : ""}`} />
    </div>
  );
}
