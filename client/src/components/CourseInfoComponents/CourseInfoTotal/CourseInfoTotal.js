import React from "react";
import "./CourseInfoTotal.css";
export default function CourseInfoTotal() {
  return (
    <div className='course-info__total'>
      <div className='course-info__top'>
        <div className='course-info__total-sale'>
          <i className='fas fa-user-graduate course-info__total-sale-icon'></i>
          <span className='course-info__total-sale-text'>تعداد دانشجو :</span>
          <span className='course-info__total-sale-number'>178</span>
        </div>
      </div>
      <div className='course-info__bottom'>
        <div className='course-info__total-comment'>
          <i className='far fa-comments course-info__total-comment-icon'></i>
          <span className='course-info__total-comment-text'>67 دیدگاه</span>
        </div>
        <div className='course-info__total-view'>
          <i className='far fa-eye course-info__total-view-icon'></i>
          <span className='course-info__total-view-text'>14,234 بازدید</span>
        </div>
      </div>
    </div>
  );
}
