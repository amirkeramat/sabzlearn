import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PreSellCourses.css";
import CourseBox from "../../CourseBox/CourseBox";
export default function PreSellCourses() {
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
            </SwiperSlide>
            <SwiperSlide>
              <CourseBox />
            </SwiperSlide>
            <SwiperSlide>
              <CourseBox />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
