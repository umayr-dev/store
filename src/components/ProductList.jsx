import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import Right from '../../public/icons/Right'

function ProductList(props) {
  return (
    <div className="container">
    { props.isHome ? <Link className='famous' to='/top'>Mashhur <Right/></Link> : null}
    <div className={props.isGrid ? "productlist productlist-grid" : "productlist"}>
    {props.list.map((item) => (
        <ProductCard key={item.id} product={item} />
    ))}
  </div>
  {props.isHome ? <div className="other">
    <button>Yana ko'rsatish 10</button>
  </div> : null}
    </div>
  )
  
}

export default ProductList