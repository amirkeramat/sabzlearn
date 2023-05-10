import React from "react";
import "./PopularCourses.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from '../CourseBox/CourseBox'
export default function PopularCourses() {
  return (
    <div class='popular'>
      <div class='container'>
        <div class='popular__header'>
          <SectionHeader title='محبوب ترین دوره ها' />
        </div>
        <div class='popular__slider'>
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
          </Swiper>
        </div>
      </div>
    </div>
  );
}
