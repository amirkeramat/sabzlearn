import React from "react";
import "./CourseInfoTotal.css";
export default function CourseInfoTotal({ student, comments, views }) {
  return (
    <div className='course-info__total'>
      <div className='course-info__top'>
        <div className='course-info__total-sale'>
          <i className='fas fa-user-graduate course-info__total-sale-icon'></i>
          <span className='course-info__total-sale-text'>دانشجو</span>
          <span className='course-info__total-sale-number'>{student}</span>
        </div>
      </div>
      <div className='course-info__bottom'>
        <div className='course-info__total-comment'>
          <i className='far fa-comments course-info__total-comment-icon'></i>
          <span className='course-info__total-comment-text'>
            {comments} دیدگاه
          </span>
        </div>
        <div className='course-info__total-view'>
          <i className='far fa-eye course-info__total-view-icon'></i>
          <span className='course-info__total-view-text'>{views} بازدید</span>
        </div>
      </div>
    </div>
  );
}
