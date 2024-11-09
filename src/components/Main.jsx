import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import Product from '../pages/Product'
import CartProductCard from './CartProductCard'
import SavedProduct from '../pages/SavedProduct'
import Checkout from '../pages/Checkout'
import ProductSearch from './ProductSearch'

function Main() {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/product/:slug' element={<Product />} />
                <Route path='/cart' element={<CartProductCard />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/saved' element={<SavedProduct />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/search' element={<ProductSearch />} />
            </Routes>
        </main>
    )
}

export default Main