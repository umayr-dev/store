import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Api from '../api';
import { urls } from '../constants/urls';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function BrandCategories() {

    const [brands, setBrands] = useState([])

    function getBrands(){
            Api.get(urls.brands.get)
              .then((res) => {
                setBrands(res.data);
              })
              .catch((err) => console.log(err, "Error in get brand"))
    }
    useEffect(()=>{
        getBrands()
    }, [])
  return (
    <div className="container">

    <div className='brands-categories'>
        <h2>Ommabop brendlar</h2>
          <Swiper
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        pagination={{
            // type: 'fraction',
        
            clickable: true,
        }}
        // navigation={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >
        {
            brands.map(item =>(
                <SwiperSlide className='slider-brands' key={item.id}> <img src={item.image ? item.image : null} width={200} height={120}  /></SwiperSlide>
            ))
        }
      </Swiper>
    </div>
        </div>
  )
}

export default BrandCategories