import React from 'react'
import './CourseInfoTotal.css'
export default function CourseInfoTotal() {
  return (
    <div class='course-info__total'>
      <div class='course-info__top'>
        <div class='course-info__total-sale'>
          <i class='fas fa-user-graduate course-info__total-sale-icon'></i>
          <span class='course-info__total-sale-text'>تعداد دانشجو :</span>
          <span class='course-info__total-sale-number'>178</span>
        </div>
      </div>
      <div class='course-info__bottom'>
        <div class='course-info__total-comment'>
          <i class='far fa-comments course-info__total-comment-icon'></i>
          <span class='course-info__total-comment-text'>67 دیدگاه</span>
        </div>
        <div class='course-info__total-view'>
          <i class='far fa-eye course-info__total-view-icon'></i>
          <span class='course-info__total-view-text'>14,234 بازدید</span>
        </div>
      </div>
    </div>
  );
}
