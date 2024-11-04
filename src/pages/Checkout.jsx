import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'



function Checkout() {
    const {getTotal, getTotalSum, getTotalPrice } = useContext(CartContext)


  return (
    <>
    <div className="container">
        <div className="checkout-page">
            {/* <h1>Buyurtmani Rasmiylashtirish</h1> */}
            <div className="checkout-page__content">
                <h2>Qabul qilish usuli va yetkazib berish manzili:</h2>
                <p>Yetkazib berish shahri</p>
                <select>
                    <option>Urganch</option>
                    <option>Toshkent Sh</option>
                </select>
                <p>Olish usuli</p>
                <div className="office">
                    <input className='radio' name='radio' type="radio" />
                    <div className="office-info">
                        <p>Uzum topshirish punkti</p>
                        <span>24 - 48 soat orasida yetkazamiz, <p className='green'>bepul</p></span>
                    </div>
                </div>
                <div className="deliver">
                    <input className='radio-check' name='radio' type="radio" />
                    <div className="office-info">
                        <p>Uzum topshirish punkti</p>
                        <span>48 soat ichida yetkazamiz, <p className='green'>bepul</p></span>
                        <p>Kuryer buyurtmani olib ketadi va qulay yetkazish vaqtini aniqlash uchun qoʻngʻiroq qiladi</p>
                    </div>
                </div>
                <h1>Yetkazib berish manzili</h1>
                <span><img src="/images/location.png" alt="" width={24} height={24} /><h2>Uzum Market topshirish punkti</h2> </span>
                <p>Urganch sh., Marifatchilar ko'chasi, 172-chi uy</p>
                <span>Yetkazib berish (Ertaga), <p className='green'>bepul</p></span>
                <p>Buyurtmani saqlash muddati – 5 kun</p>
                <button className='change'>O'zgartirish</button>
                <div className="checkout-info">
                    <h2>Buyurtmani qabul qiluvchi:</h2>
                    <form className="form">
                        <label>
                            <span>Familiya*</span>
                            <input type="text" required />
                        </label>
                        <label>
                            <span>Ism*</span>
                            <input type="text" required />
                        </label>
                    </form>
                    <p>Siz koʻrsatgan telefon raqamiga buyurtma holati haqida bildirishnoma yuboramiz. <br />
                    Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz bilan telefon orqali bogʻlanadi.</p>
                    <p><input type="checkbox" name="" id="" /> <span>
                    Yangiliklarimiz va aksiyalarimizga obuna boʻling. <br /> Yangi chegirmalar, aksiyalar va sotib tugatishlar haqida birinchilar qatorida bilib olasiz.</span></p>
                </div>
                <div className="order">

                </div>
            </div>
            <div className="checkout-ordered" >
                                    <h1>Buyurtmangiz <Link to='/cart'><p style={{textDecoration: 'underline'}} >Savatga o'tish</p></Link></h1>
                                    <span className='sum'>
                                        <p>Mahsulotlar : {getTotal()}ta</p>
                                        
                                    </span>
                                    <span>
                                    <p>Yetkazib berish :</p>
                                    <p className='green'> Bepul</p>
                                    </span>
                                    
                                    <span className='sum'>
                                        <p>Jami mahsulot: {getTotalSum().toLocaleString()}so'm</p>
                                        <p>Jami:</p>
                                        <p className='price-order'>
                                            <span>Tejavingiz: {(getTotalPrice() - getTotalSum()).toLocaleString()} so'm</span>
                                        </p>
                                    </span>
                                    <Link to="/checkout">
                                    <button className='checkout'>
                                        To'lovga o'ting
                                    </button>
                                    </Link>
                                </div> 
        </div>
    </div>
    </>
  )
}

export default Checkout