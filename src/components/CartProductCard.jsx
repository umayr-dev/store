import React from 'react'
import TrashBox from '../../public/icons/TrashBox'
import ProductList from './ProductList'
import { productList } from '../constants/product'

function CartProductCard() {
  return (
    <>
    <div className="container">
        <div className="cart">
            <h1>Savatingiz, <span>1 mahsulot</span></h1>
            <div className="cart-content">
                <div className="order-info">
                    <div className="top">
                        <p>Yetkazib berishning eng yaqin sanasi</p>
                        <span>15-oktabr</span>
                    </div>
                    <div className="bottom">
                        <p>Uzum Market omborida </p>
                        <h1>15-oktabr orasida yetkazamiz</h1>
                        <div className="bottom-content">
                            <img src="/images/qogoz.jpg" height={120} width={120} alt="" />
                            <div className="context">
                                <div className="context-top">
                                    <p>
                                    Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f C07/3, 500 varaq</p>
                                    <span> <TrashBox/> <p>Yo'q qilish</p></span>
                                </div>
                                <div className="context-bottom">
                                    <p>Sotuvchi: World of stationery</p>
                                    <div className="buttons">
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                    <span><h2>39 500 so'm</h2> <del>57 000 so'm</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ordered">
                    <h1>Buyurtmangiz</h1>
                    <span>
                        <p>Mahsulotlar (1):</p>
                        <p>57 000 so'm</p>
                    </span>
                    <div className="arrive-date">
                        <p>Yetkazib berish 15-oktabr</p>
                    </div>
                    <span>
                        <p>Jami:</p>
                        <p className='price-order'>39 500 so'm
                            <span>Tejavingiz: 17 500 so'm</span>
                        </p>
                    </span>
                    <button>
                        Rasmiylashtirishga o'tish
                    </button>
                </div>
            </div>
        </div>
    </div>
    <ProductList list={productList}/>
    
    </>
  )
}

export default CartProductCard