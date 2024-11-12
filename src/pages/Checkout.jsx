import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Api from '../api'
import { urls } from '../constants/urls'
import { message, Form, Input, Checkbox } from 'antd'

function Checkout() {

    const { cart,  getTotal, getTotalSum, getTotalPrice } = useContext(CartContext);
    const navigate = useNavigate();
    const isAuth = JSON.parse(localStorage.getItem('user')) || false;
    const [form] = Form.useForm();


    function handleSubmit() {
        form.validateFields()
            .then(values => {
                const orderData = {
                    ...values,
                    products: cart.map(item =>  ({ name: item.name,  })),
                    totalSum: getTotalSum().toLocaleString(),
                    totalPrice: getTotalPrice().toLocaleString(),                
                }
    
                Api.post(urls.orders.get, orderData)
                    .then(res => {
                        if (res.data.id) {
                            message.success("Buyurtma muvaffaqiyatli rasmiylashtirildi")
                            localStorage.removeItem('cart')
                            navigate('/');
                            window.location.reload()
                        }
                    })
                    .catch(err => console.log(err, 'Error in order submission'))
            })
            .catch(errorInfo => {
                console.log('Form validation failed:', errorInfo)
            })
    }
    
  return (
    <>
    <div className="container">
        <div className="checkout-page">
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
                    <Form className='form' form={form} layout="vertical">
                            <Form.Item
                                name="familiya"
                                label="Familiya"
                                initialValue={isAuth.familiya || ''}
                                rules={[{ required: true, message: 'Familiya kiriting' }]}
                            >
                                <Input className='input'/>
                            </Form.Item>
                            <Form.Item
                                name="ism"
                                label="Ism"
                                initialValue={isAuth.ism || ''}
                                rules={[{ required: true, message: 'Ism kiriting' }]}
                            >
                                <Input className='input' />
                            </Form.Item>
                            <Form.Item name="subscribe" valuePropName="checked">
                                <Checkbox>
                                    Yangiliklarimiz va aksiyalarimizga obuna boʻling. <br />
                                    Yangi chegirmalar, aksiyalar va sotib tugatishlar haqida birinchilar qatorida bilib olasiz.
                                </Checkbox>
                            </Form.Item>
                        </Form>


                </div>
                <div className="order">
                    <div className="product-all">
                    {
                        cart.map((item, key) =>(
                                <div className="product" key={key}>
                                    <img src={item?.images[0]} height={100} width={100} alt="" />
                                    <div className="product-content">
                                        <h1>{item.name}</h1>
                                        <p>{item.discount_price?.toLocaleString()} so'm</p>
                                    </div>
                                </div>
                        ))
                    }
                    </div>
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
                                    
                                    <button onClick={()=> handleSubmit()} className='checkout'>
                                        Buyurtma qilish
                                    </button>
                                    
                                </div> 
        </div>
    </div>
    </>
  )
}

export default Checkout