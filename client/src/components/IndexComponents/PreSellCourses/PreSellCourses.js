import React, { useEffect, useState } from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PreSellCourses.css";
import CourseBox from "../../CourseBox/CourseBox";
export default function PreSellCourses() {
  const [preSellProducts, setPreSellProducts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/v1/courses/presell").then(res=>res.json()).then(data=>{
      console.log(data);
      setPreSellProducts(data)
    })
  },[])
  return (
    <div className='presell'>
      <div className='container'>
        <div className='presell__header'>
          <SectionHeader title='دوره های در حال پیش فروش' />
        </div>
        <div className='presell__slider'>
          <Swiper
            spaceBetween={1}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            {preSellProducts.length &&
              preSellProducts.map((product) => (
                <SwiperSlide>
                  <CourseBox
                    title={product.name}
                    cover={product.cover}
                    teacher={product.teacher}
                    price={product.price}
                    student={product.creator}
                    link={product.shortName}
                  />
                </SwiperSlide>
              ))}

            {/* <SwiperSlide>
              <CourseBox />
            </SwiperSlide>
            <SwiperSlide>
              <CourseBox />
            </SwiperSlide>
            <SwiperSlide>
              <CourseBox />
            </SwiperSlide>
            <SwiperSlide>
              <CourseBox />
            </SwiperSlide>
            <SwiperSlide>
              <CourseBox />
            </SwiperSlide>
            <SwiperSlide>
              <CourseBox />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
