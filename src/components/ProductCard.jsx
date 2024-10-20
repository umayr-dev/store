import React from 'react'
import Star from '../../public/icons/Star'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
    const {id,name, images, price, price_per_month, reviews, discount_price } = product
  return (
    <div className="container">

        <Link to={'/product/' + id}>
        <div className="card">
            <div className="card-image">
                <img src={images[0]} alt={name} />
            </div>
            <div className="card-content">
                <p>{name}</p>
                <p> <span><Star/> ( {reviews} sharhlar)</span></p>
                <p className='price'>{price_per_month} so'm/oyiga</p>
                <del>{price}</del>
                <h2>{discount_price} so'm</h2>
            </div>
        </div>
        </Link>
        
    </div>
)
}

export default ProductCard