import React from "react";
import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
export default function PopularCourses() {
  return (
    <div class='popular'>
      <div class='container'>
        <div class='popular__header'>
          <SectionHeader title='محبوب ترین دوره ها' />
        </div>
        <div class='popular__slider'>
          <div class='swiper swiper-container'>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
                <PopularCourses />
              </SwiperSlide>
              <SwiperSlide>
                <PopularCourses />
              </SwiperSlide>
              <SwiperSlide>
                <PopularCourses />
              </SwiperSlide>
              <SwiperSlide>
                <PopularCourses />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
