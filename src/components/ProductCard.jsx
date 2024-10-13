import React from 'react'
import Star from '../../public/icons/Star'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div className="container">

        <Link to={props.product.slug}>
        <div className="card">
            <div className="card-image">
                <img src={props.product.img} alt="" />
            </div>
            <div className="card-content">
                <p>{props.product.title}</p>
                <p> <span><Star/>  {props.product.comment}</span></p>
                <p className='price'>{props.product.price}</p>
                <del>{props.product.subtotal}</del>
                <h2>{props.product.total} so'm</h2>
            </div>
        </div>
        </Link>
        
    </div>
)
}

export default ProductCard