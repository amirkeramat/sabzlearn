import React from "react";
import "./RatedCourse.css";
import Button from "../Form/Button/Button";
export default function RatedCourse() {
  return (
    <li className='course-info__courses-list-item'>
      <Button href='#' className='course-info__courses-link'>
        <img
          src='/images/courses/js_project.png'
          alt='Course Cover'
          className='course-info__courses-img'
        />
        <span className='course-info__courses-text'>
          پروژه های تخصصی با جاوا اسکریپت
        </span>
      </Button>
    </li>
  );
}
