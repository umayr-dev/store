import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/main.scss'
import CartProvider from './context/CartContext.jsx'
import SavedProvider from './context/SavedContext.jsx'
import { LanguageProvider } from './context/LanguageContext';
ReactDOM.createRoot(document.querySelector('.wrapper')).render(
  <BrowserRouter>
  <LanguageProvider>
  <SavedProvider>
  <CartProvider>
  <App />
  </CartProvider>
  </SavedProvider>
  </LanguageProvider>
  </BrowserRouter>
)
