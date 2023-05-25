import React, { useEffect, useState } from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PreSellCourses.css";
import CourseBox from "../../CourseBox/CourseBox";
import "swiper/css";
import "swiper/css/pagination";
export default function PreSellCourses() {
  const [preSellCourses, setPreSellCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/courses/presell")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPreSellCourses(data);
      });
  }, []);
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
            pagination={{
              clickable: true,
            }}
            className='mySwipes'>
            {preSellCourses.length &&
              preSellCourses.map((product) => (
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
