import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import Product from '../pages/Product'
import CartProductCard from './CartProductCard'

function Main() {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/product' element={<Product />} />
                <Route path='/cart' element={<CartProductCard />} />
            </Routes>
        </main>
    )
}

export default Main