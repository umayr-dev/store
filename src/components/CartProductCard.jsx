import React, { useContext } from 'react'
import TrashBox from '../../public/icons/TrashBox'
import { CartContext } from '../context/CartContext'
import Counter from './Counter'
import NullCart from './NullCart'
import { Link } from 'react-router-dom'


function CartProductCard() {
    const { cart, deleteItem, getTotal, getTotalSum, getTotalPrice } = useContext(CartContext)
  return (
    <>
    <div className="container">
        <div className="cart">
            <h1>{ getTotal() > 0 ? `Savatingiz ${getTotal()}mahsulot` :<NullCart/>}</h1>
            {
                getTotal() > 0 ?             <div className="cart-content">
                <div className="order-info">
                    {/* <div className="top">
                        <p>Yetkazib berishning eng yaqin sanasi</p>
                        <span>15-oktabr</span>
                    </div> */}
                    {
                        cart.map((item, key) =>(
                            <div className="bottom" key={key}>
                            <p>Uzum Market omborida </p>
                            <h1>15-oktabr orasida yetkazamiz</h1>
                            <div className="bottom-content">
                                <img src={item.images[0]} height={120} width={120} alt="" />
                                <div className="context">
                                    <div className="context-top">
                                        <p>
                                        {item.name}</p>
                                        <button onClick={()=> deleteItem(item.id)}> <TrashBox/> <p>Yo'q qilish</p></button>
                                    </div>
                                    <div className="context-bottom">
                                        <p></p>
                                        <Counter item={item}/>
                                        <div>
                                            <h2>{(item.discount_price * item.qty).toLocaleString()}</h2>
                                             <del>{(item.price * item.qty).toLocaleString()}</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        ))
                    }

                </div>

                <div className="ordered" >
                                    <h1>Buyurtmangiz</h1>
                                    <span>
                                        <p>Mahsulotlar {getTotal()}:</p>
                                        <p>Asl Bahosi: {getTotalPrice().toLocaleString()} So'm</p>
                                    </span>
                                    <div className="arrive-date">
                                        <p>Yetkazib berish ertaga</p>
                                    </div>
                                    <span>
                                        <p>Jami:</p>
                                        <p className='price-order'>{getTotalSum().toLocaleString()} so'm
                                            <span>Tejavingiz: {(getTotalPrice() - getTotalSum()).toLocaleString()} so'm</span>
                                        </p>
                                    </span>
                                    <Link to="/checkout">
                                    <button className='checkout'>
                                        Rasmiylashtirishga o'tish
                                    </button>
                                    </Link>
                                </div> 
            </div> :''
            }

        </div>
    </div>
    
    </>
  )
}

export default CartProductCard