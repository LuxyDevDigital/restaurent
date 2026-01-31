"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import "./reservation.css"

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    guests: "2",
    tableType: "standard",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
    // Handle form submission here
  }

  return (
    <>
    <Header />
      <div className="reservation-container">
        <div className="reservation-content">
          <h1 className="reservation-title">Reservation</h1>

          <div className="reservation-main">
            {/* Left side - Images */}
            <div className="reservation-images">
              <div className="image-container large">
                <img
                  src="/assets/pictures/reservation1.png"
                  alt="Elegant dining table with wine glasses and candles"
                  className="reservation-image"
                />
              </div>
              <div className="image-container medium">
                <img
                  src="/assets/pictures/reservation2.png"
                  alt="Cozy restaurant interior with warm lighting"
                  className="reservation-image"
                />
              </div>
              <div className="image-container medium">
                <img
                  src="/assets/pictures/reservation3.png"
                  alt="Romantic dinner setting with wine and food"
                  className="reservation-image"
                />
              </div>
            </div>

            {/* Right side - Reservation Form */}
            <div className="reservation-form-container">
              <div className="form-quote">
                "Treat yourself to an unforgettable dining experience - book your table now."
              </div>

              <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="your name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="input-with-icon">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-input date-input"
                      required
                    />
                  </div>
                  <div className="input-with-icon">
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="form-input time-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="select-with-icon">
                    <select name="guests" value={formData.guests} onChange={handleInputChange} className="form-select">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                    <svg className="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="select-with-icon">
                    <select
                      name="tableType"
                      value={formData.tableType}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="standard">Standard Table</option>
                      <option value="window">Window Table</option>
                      <option value="private">Private Booth</option>
                      <option value="terrace">Terrace</option>
                    </select>
                    <svg className="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 12h18m-9-9v18"></path>
                    </svg>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  Book Table
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Reservation
