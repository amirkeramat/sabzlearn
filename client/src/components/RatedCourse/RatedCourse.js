import React from 'react'
import './RatedCourse.css'
export default function RatedCourse() {
  return (
    <li class='course-info__courses-list-item'>
      <a href='#' class='course-info__courses-link'>
        <img
          src='/images/courses/js_project.png'
          alt='Course Cover'
          class='course-info__courses-img'
        />
        <span class='course-info__courses-text'>
          پروژه های تخصصی با جاوا اسکریپت
        </span>
      </a>
    </li>
  );
}
