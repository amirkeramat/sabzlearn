import React, { useState, useEffect } from "react";
import "./PopularCourses.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "../../CourseBox/CourseBox";
import "swiper/css";
import "swiper/css/pagination";
export default function PopularCourses() {
  const [popularCourses, setPopularCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/courses/presell")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularCourses(data);
      });
  }, []);
  return (
    <div className='popular'>
      <div className='container'>
        <div className='popular__header'>
          <SectionHeader title='محبوب ترین دوره ها' />
        </div>
        <div className='popular__slider'>
          <Swiper
            spaceBetween={1}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            className='mySwipes'>
            {popularCourses.length &&
              popularCourses.map((product) => (
                <SwiperSlide key={product._id}>
                  <CourseBox
                    title={product.name}
                    cover={product.cover}
                    teacher={product.teacher}
                    price={product.price}
                    student={product.creator}
                    link={product.shortName}
                    rate={product.courseAverageScore}
                    layout={"column"}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
