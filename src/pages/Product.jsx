import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function Product() {
  const {slug} = useParams()
  const [ product, setProduct] = useState()
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  function getProduct(){
    fetch(`https://5709cdd829da4f5e.mokky.dev/products/${slug}`).then(function(res){
      return res.json()
    }).then(function(data){
      setProduct(data)
    }).catch(function(err){
      console.log(err, 'olov');
      
    })
  }
  
  useEffect(()=> {
    getProduct()
  }, [slug]);

  return (
    <>
    <main>
    <div className="container">
    <div className="product">
      <div className="product-content">
        <h1>{product?.name}</h1>
        <span><p>{product?.reviews} sharhlar</p></span>

<div className="sviper">
<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          'width': '400px',
          'height': '500px',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
        <img width={'100%'} height={'100%'} src={product?.images[0]} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
      direction='horizontal'
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{
          'width': '200px',
          'height': '400px',
        }}
      >
        <SwiperSlide >
          <img width={'150px'} height={'150px'} src={product?.images[0]}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product?.images[0]}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product?.images[0]}/>
        </SwiperSlide>
        </Swiper>
</div>
      </div>
      </div>
    </div>
    </main>

    </>
  )
}

export default Product