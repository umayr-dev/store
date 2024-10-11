import React from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import { productList } from '../constants/product'

function Home() {
  return (
  
    <main>

      <Banner/>
      <ProductList list={productList}/>
      <Banner/>
    <ProductList list={productList}/>
      <Banner/>
    <ProductList list={productList}/> 
    </main>
  )
}

export default Home