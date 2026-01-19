"use client"

import { useState } from "react"
import "./Cart.css"
import Header from "../components/Header"

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger Deluxe", price: 60.0, quantity: 2, image: "/restaurent/assets/pictures/1b.png" },
    { id: 2, name: "Pizza Margherita", price: 55.0, quantity: 1, image: "/restaurent/assets/pictures/1p.png" },
    { id: 3, name: "Salade Verte", price: 45.0, quantity: 3, image: "/restaurent/assets/pictures/5pa.png" },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <>
      <Header />
    <div className="cart-container">
      <div className="cart-content">
        <h1>Votre Panier</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">{item.price.toFixed(2)} MAD</p>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                    />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p className="item-total">{(item.price * item.quantity).toFixed(2)} MAD</p>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} MAD</span>
              </div>
              <div className="summary-row">
                <span>Taxe (10%)</span>
                <span>{tax.toFixed(2)} MAD</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{total.toFixed(2)} MAD</span>
              </div>
              <button className="checkout-btn">Passer la Commande</button>
              <button className="continue-shopping">Continuer les achats</button>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  )
}
