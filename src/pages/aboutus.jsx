import "./aboutus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AboutUs = ({
  backgroundImage = "/assets/pictures/background.jpg",
}) => {
  const aboutStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <>
      <Header />
      <div className="aboutus-container" style={aboutStyle}>
        <div className="aboutus-content">
          <h1 className="aboutus-title">ABOUT US</h1>
          <p className="aboutus-subtitle">
            Hospitalité marocaine • Saveurs du monde • Accueil chaleureux
          </p>

          <div className="aboutus-frame">
            <div className="aboutus-main">
              <div className="aboutus-image">
                <img
                  src="assets/pictures/aboutus.jpg"
                  alt="Elegant plated dish with artistic presentation"
                />
              </div>

              <div className="decorative-panel">
                <video
                  className="decorative-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >

                  <source src="/assets/L.mp4" type="video/mp4" />

                </video>
              </div>

              <div className="aboutus-text">
                <p>
                  Depuis notre ouverture, notre mission est simple : offrir une
                  expérience culinaire inoubliable, alliant saveurs
                  authentiques, produits frais et accueil chaleureux. Chaque
                  plat est préparé avec soin par notre chef, en s'inspirant des
                  traditions locales et internationales, pour éveiller vos
                  papilles et satisfaire vos envies. Que vous veniez pour un
                  dîner en amoureux, un repas en famille ou une célébration
                  entre amis, nous mettons tout en œuvre pour faire de chaque
                  visite un moment unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
