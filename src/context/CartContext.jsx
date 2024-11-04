import React, { createContext, useState } from 'react'

export const CartContext = createContext();

function CartProvider( {children} ) {
  let initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    const [cart, setCart] = useState(initialState)

    function setLocaleCart(cart){
      localStorage.setItem('cart', JSON.stringify(cart))
      setCart(cart)
    }
    function addCart(product){
      if(cart.some(item => item.id === product.id)){
        setLocaleCart(cart.map(item=> item.id === product.id ? {...item, qty: item.qty + 1}:item))
      }else{

        let obj = {...product, qty:1}
        setLocaleCart([...cart, obj])

      }
    }
    function deleteItem(id){
      setLocaleCart(cart.filter(item => item.id !== id))
    }
    function increment(id){
      setLocaleCart(cart.map(item => item.id === id ? {...item,qty: item.qty + 1 }: item))
    }
    function decrement(id){
      setLocaleCart(cart.map(item => item.id === id ? {...item,qty: item.qty === 1 ? 1 : - 1 }: item))
    }
    function getTotal(){
      let total = 0
      for( let item of cart){
        total += item.qty
      }
      return total
    }

    function getTotalSum(){
      let sum = 0
      for(let item of cart){
        sum +=item.discount_price * item.qty
      }
      return sum
    }
    function getTotalPrice(){
      let sum = 0
      for(let item of cart){
        sum +=item.price * item.qty
      }
      return sum
    }
  return <CartContext.Provider value={{ cart, addCart, increment, decrement, deleteItem , getTotal,getTotalSum, getTotalPrice}}>
    {children}
  </CartContext.Provider>
    
    
  
}

export default CartProvider