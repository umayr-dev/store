import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

function ProductList(props) {
  return (
    <div className="container">
    { props.isHome ? <Link className='famous' to='/top'>Xit Savdo</Link> : null}
    <div className={props.isGrid ? "productlist productlist-grid" : "productlist"}>
    {props.list.map((item) => (
        <ProductCard key={item.id} product={item} />
    ))}
  </div>
    </div>
  )
  
}

export default ProductList