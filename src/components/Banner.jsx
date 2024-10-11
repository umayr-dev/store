import React  from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function Banner({list}) {

  return (
    <main>
        <div className="container">
            
                <Swiper navigation={true} modules={[Navigation, Pagination]} pagination={true} className="mySwiper">
                  {
                    list.map((item)=>(
                      <SwiperSlide key={item.id}>
                      <div className="banner">
                      <img src={item.image} alt={item.title} />
                      </div>
                      </SwiperSlide>
                    ))
                  }
      </Swiper>
        </div>
    </main>
  )
}

export default Banner