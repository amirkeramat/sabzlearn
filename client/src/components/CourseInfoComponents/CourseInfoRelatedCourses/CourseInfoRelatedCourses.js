import React from "react";
import "./CourseInfoRelatedCourses.css";
import Button from '../../Form/Button/Button'
export default function CourseInfoRelatedCourses() {
  return (
    <div className='courseInfo__relatedCourses'>
      <span className='course-info__courses-title'>دوره های مرتبط</span>
      <ul className='course-info__courses-list'>
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
        <li className='course-info__courses-list-item'>
          <Button href='#' className='course-info__courses-link'>
            <img
              src='/images/courses/fareelancer.png'
              alt='Course Cover'
              className='course-info__courses-img'
            />
            <span className='course-info__courses-text'>
              تعیین قیمت پروژه های فریلنسری
            </span>
          </Button>
        </li>
        <li className='course-info__courses-list-item'>
          <Button href='#' className='course-info__courses-link'>
            <img
              src='/images/courses/nodejs.png'
              alt='Course Cover'
              className='course-info__courses-img'
            />
            <span className='course-info__courses-text'>دوره Api نویسی</span>
          </Button>
        </li>
        <li className='course-info__courses-list-item'>
          <Button href='#' className='course-info__courses-link'>
            <img
              src='/images/courses/jango.png'
              alt='Course Cover'
              className='course-info__courses-img'
            />
            <span className='course-info__courses-text'>متخصص جنگو</span>
          </Button>
        </li>
      </ul>
    </div>
  );
}
