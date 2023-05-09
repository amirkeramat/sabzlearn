import React from "react";
import "./LastCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
export default function LastCourses() {
  return (
    <div class='courses'>
      <div class='container'>
        <SectionHeader
          title='جدیدترین دوره ها'
          desc='سکوی پرتاپ شما به سمت موفقیت'
          btnTitle='تمامی دوره ها'
        />
        <div className="courses-content">
            <div className="container">
                <div className="row">
                   <CourseBox/> 
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
