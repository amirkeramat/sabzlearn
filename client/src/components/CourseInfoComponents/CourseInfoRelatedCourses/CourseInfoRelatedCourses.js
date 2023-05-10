import React from 'react'
import './CourseInfoRelatedCourses.css'
export default function CourseInfoRelatedCourses() {
  return (
    <div class='courseInfo__relatedCourses'>
      <span class='course-info__courses-title'>دوره های مرتبط</span>
      <ul class='course-info__courses-list'>
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
        <li class='course-info__courses-list-item'>
          <a href='#' class='course-info__courses-link'>
            <img
              src='/images/courses/fareelancer.png'
              alt='Course Cover'
              class='course-info__courses-img'
            />
            <span class='course-info__courses-text'>
              تعیین قیمت پروژه های فریلنسری
            </span>
          </a>
        </li>
        <li class='course-info__courses-list-item'>
          <a href='#' class='course-info__courses-link'>
            <img
              src='/images/courses/nodejs.png'
              alt='Course Cover'
              class='course-info__courses-img'
            />
            <span class='course-info__courses-text'>دوره Api نویسی</span>
          </a>
        </li>
        <li class='course-info__courses-list-item'>
          <a href='#' class='course-info__courses-link'>
            <img
              src='/images/courses/jango.png'
              alt='Course Cover'
              class='course-info__courses-img'
            />
            <span class='course-info__courses-text'>متخصص جنگو</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
