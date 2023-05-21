import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import "./CourseBox.css";
import Button from "../Form/Button/Button";
export default function CourseBox({title,price,teacher,student,cover,link,rate}) {
  const [isImgShow, setImgShow] = useState(false);
  const localPrice = Number(price).toLocaleString()
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
          {title}
        </Button>

        <div className='course-box__rating-teacher'>
          <div className='course-box__teacher'>
            <i className='fas fa-chalkboard-teacher course-box__teacher-icon'></i>
            <Button href='#' className='course-box__teacher-link'>
              {teacher}
            </Button>
          </div>
          <div className='course-box__rating'>
            {Array.apply("", Array(rate)).map((item,index) => (
              <img
                key={index + 1}
                src='/images/svgs/star_fill.svg'
                alt='rating'
                className='course-box__star'
              />
            ))}

            {/* <img
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
            /> */}
          </div>
        </div>

        <div className='course-box__status'>
          <div className='course-box__users'>
            <i className='fas fa-users course-box__users-icon'></i>
            <span className='course-box__users-text'>{student}</span>
          </div>
          <span className='course-box__price'>{localPrice}</span>
        </div>
      </div>

      <div className='course-box__footer'>
        <Button to={`/course-info/${link}`} className='course-box__footer-link'>
          مشاهده اطلاعات
          <i className='fas fa-arrow-left course-box__footer-icon'></i>
        </Button>
      </div>
    </div>
  );
}
