import { message } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { CartContext } from '../context/CartContext';

function Product({ product }) {
  const {slug} = useParams()
  const [ products, setProducts] = useState()
  const [active, setActive] = useState(false)
  const [btnactive, setBtnActive] = useState(false)
  const { addCart } = useContext(CartContext);
  function getProduct(){
    fetch(`https://5709cdd829da4f5e.mokky.dev/products/${slug}`).then(function(res){
      return res.json()
    }).then(function(data){
      setProducts(data)
    }).catch(function(err){
      console.log(err, 'olov');
    })
  }
  function handleClickProduct() {
    addCart(product);
    message.success('Mahsulot savatga muvaffaqiyatli qo`shildi!')
  }
  function handleClick(){
    setActive(true)
  }
  function handleClick2(){
    setBtnActive(true)
  }
  useEffect(()=> {
    getProduct()
  }, [slug]);

  return (
    <>
    <main>
    <div className="container">
        <h1 className='product-name'>{products?.name}</h1>
        <span><p>{products?.reviews} sharhlar</p></span>
    <div className="product">
      <div className="product-content">
        <img src={products?.images[0]} width={450} alt="" />
      </div>
      <div className="products-details">
        <h2>Tezkor xotira (RAM)</h2>
        <div className="btns">
          <button className={active ? 'ram active' : 'ram'} onClick={()=>handleClick()}>8Gb</button>
          <button className={btnactive ? 'ram active' : 'ram'} onClick={()=>handleClick2()}>6Gb</button>
        </div>
        <h2>Ichki Xotira</h2>
        <div className="btns">
          <button className={btnactive ? 'ram active' : 'ram'} onClick={()=>handleClick2()}>256Gb</button>
          <button className={active ? 'ram active' : 'ram'} onClick={()=>handleClick()}>128Gb</button>
        </div>
        <h2>Mahsulot haqida qisqacha</h2>
        <p className='all-details'>Barcha xususiyatlar</p>
      </div>
      <div className="productpage-ordered">
        <h2>{products?.discount_price} so'm</h2>
        <div className="credit">
          <p>Muddatli to'lov</p>
          <h2 className='credit-price'>{products?.price_per_month.toLocaleString()} so'm</h2>
          <p>24/oy</p>
        </div>
        <p>Buyurtmani rasmiylashtirishda 12 oydan 24 oygacha <br />
        muddatli to‘lovni tanlashingiz mumkin</p>
      <div className="product-carts">
        <button className='click' onClick={()=>handleClickProduct()}>Savatchaga</button>
        <button className='click2'>Birgina klik orqali harid</button>
      </div>
      <p>Muddatli to'lov rasmiylashtirayotganingizda bizdan va hamkorlardan eng ma'qul takliflarga ega bo'ling.</p>
      </div>
      </div>
    </div>
    </main>

    </>
  )
}

export default Product