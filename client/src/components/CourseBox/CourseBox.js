import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import "./CourseBox.css";
import Button from "../Form/Button/Button";
export default function CourseBox({
  title,
  price,
  teacher,
  student,
  cover,
  link,
  rate,
  layout,
  desc,
}) {
  const [isImgShow, setImgShow] = useState(false);
  const localPrice = Number(price).toLocaleString();
  const onImageLoader = () => setImgShow(true);
  return (
    <div
      className={`course-box   ${
        layout === "column" ? "col-4" : "course-row"
      }`}>
      <Button to={`/course-info/${link}`} className='course-box__title-link'>
        <img
          src={`http://localhost:4000/courses/covers/${cover}`}
          alt='Course img'
          className='course-box__img'
          onLoad={onImageLoader}
        />
        {!isImgShow && <CircleSpinner />}
      </Button>
      <div className='course-box-info-container'>
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
              {Array.apply("", Array(rate)).map((item, index) => (
                <img
                  key={index + 1}
                  src='/images/svgs/star_fill.svg'
                  alt='rating'
                  className='course-box__star'
                />
              ))}
            </div>
          </div>

          <div className='course-box__status'>
            <div className='course-box__users'>
              <i className='fas fa-users course-box__users-icon'></i>
              <span className='course-box__users-text'>{student}</span>
            </div>
            <span className='course-box__price'>
              {price === 0 ? "رایگان" : localPrice}
            </span>
          </div>
          {layout === "row" && (
            <span className='course-box-desc'>
              <h6 className=''> توضیحات دوره:</h6>

              {desc}
            </span>
          )}
        </div>

        <div className='course-box__footer'>
          <Button
            to={`/course-info/${link}`}
            className='course-box__footer-link'>
            مشاهده اطلاعات
            <i className='fas fa-arrow-left course-box__footer-icon'></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

{
  /* <img
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
            /> */
}
