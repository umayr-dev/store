import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Api from '../api';
import { urls } from '../constants/urls';
import { FreeMode, Pagination } from 'swiper/modules';

function BannerCategories() {
    const [categories, setCategories] = useState([])

    function getCategories(){
            Api.get(urls.categories.get)
              .then((res) => {
                setCategories(res.data);
              })
              .catch((err) => console.log(err, "Error in get categories"))
    }
    useEffect(()=>{
        getCategories()
    }, [])
  return (
<div className="container">
  <div className='banner-categories'>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        {
            categories.map(item =>(
                <SwiperSlide className='slider-banner' key={item.id}>{item.name} <img src={item.image ? item.image : null} width={24} height={24}  /></SwiperSlide>
            ))
        }
      </Swiper>
  </div>
</div>
  )
}

export default BannerCategories