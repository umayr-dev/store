import React from 'react'
import { Link } from "react-router-dom";

function NullCart() {
  return (
    <div className="container">
        <div className="non-cart">
        <img src="https://texnomart.uz/_nuxt/img/header-basket.04697d5.svg" width={120} height={60} alt="" />
        <p>Savatchada xozirda
        hech nima yo'q</p>
        <Link to='/'><button className='non-cart-button'>Xarid qilish</button></Link>
        </div>
    </div>
  )
}

export default NullCart