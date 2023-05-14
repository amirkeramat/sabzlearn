import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import "./CourseBox.css";
import Button from "../Form/Button/Button";
export default function CourseBox() {
  const [isImgShow, setImgShow] = useState(false);

  const onImageLoader = () => setImgShow(true);
  return (
    <div className='course-box col-4'>
      <Button href='#'>
        <img
          src='/images/courses/fareelancer.png'
          alt='Course img'
          className='course-box__img'
          onLoad={onImageLoader}
        />
        {!isImgShow && <CircleSpinner />}
      </Button>
      <div className='course-box__main'>
        <Button href='#' className='course-box__title'>
          دوره پروژه محور متخصص جنگو
        </Button>

        <div className='course-box__rating-teacher'>
          <div className='course-box__teacher'>
            <i className='fas fa-chalkboard-teacher course-box__teacher-icon'></i>
            <Button href='#' className='course-box__teacher-link'>
              رضا دولتی
            </Button>
          </div>
          <div className='course-box__rating'>
            <img
              src='/images/svgs/star.svg'
              alt='rating'
              className='course-box__star'
            />
            <img
              src='/images/svgs/star_fill.svg'
              alt='rating'
              className='course-box__star'
            />
            <img
              src='/images/svgs/star_fill.svg'
              alt='rating'
              className='course-box__star'
            />
            <img
              src='/images/svgs/star_fill.svg'
              alt='rating'
              className='course-box__star'
            />
            <img
              src='/images/svgs/star_fill.svg'
              alt='rating'
              className='course-box__star'
            />
          </div>
        </div>

        <div className='course-box__status'>
          <div className='course-box__users'>
            <i className='fas fa-users course-box__users-icon'></i>
            <span className='course-box__users-text'>500</span>
          </div>
          <span className='course-box__price'>1,000,000</span>
        </div>
      </div>

      <div className='course-box__footer'>
        <Button href='#' className='course-box__footer-link'>
          مشاهده اطلاعات
          <i className='fas fa-arrow-left course-box__footer-icon'></i>
        </Button>
      </div>
    </div>
  );
}
