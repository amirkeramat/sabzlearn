import React from "react";
import "./LastCourses.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import CourseBox from "../../CourseBox/CourseBox";
export default function LastCourses() {
  return (
    <div className='courses'>
      <div className='container'>
        <SectionHeader
          title='جدیدترین دوره ها'
          desc='سکوی پرتاپ شما به سمت موفقیت'
          btnTitle='تمامی دوره ها'
          btnHref='courses'
        />
        <div className='courses-content'>
          <div className='container'>
            <div className='row'>
              <CourseBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
