import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const {slug} = useParams()
  console.log(slug);
  
  return (
    <>
      <div className="product">
        <h1>Product</h1>
      </div>
    </>
  )
}

export default Product