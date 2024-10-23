import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/main.scss'
import CartProvider from './context/CartContext.jsx'

ReactDOM.createRoot(document.querySelector('.wrapper')).render(
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>
)
