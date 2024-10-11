import React from 'react'
import Star from '../../public/icons/Star'

function ProductCard(props) {
  return (
    <div className="container">

        <div className="card">

            <div className="card-image">
                <img src={props.product.img} alt="" />
            </div>
            <div className="card-content">
                <p>{props.product.title}</p>
                <span><Star/> <p>{props.product.comment}</p></span>
                <p className='price'>{props.product.price}</p>
                <del>{props.product.subtotal}</del>
                <h2>{props.product.total} so'm</h2>
            </div>
        </div>
    </div>
        )

        
  
}

export default ProductCard