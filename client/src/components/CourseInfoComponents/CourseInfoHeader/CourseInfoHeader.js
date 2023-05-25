import React from "react";
import "./CourseInfoHeader.css";
import Button from "../../Form/Button/Button";
export default function CourseInfoHeader(props) {
  return (
    <section className='course-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Button to='/' className='course-info__link'>
              {props.name}
            </Button>
            <h1 className='course-info__title'>{props.name}</h1>
            <p className='course-info__text'>{props.description}</p>
            <div className='course-info__social-media'>
              <Button href='#' className='course-info__social-media-item'>
                <i className='fab fa-telegram-plane course-info__icon'></i>
              </Button>
              <Button href='#' className='course-info__social-media-item'>
                <i className='fab fa-twitter course-info__icon'></i>
              </Button>
              <Button href='#' className='course-info__social-media-item'>
                <i className='fab fa-facebook-f course-info__icon'></i>
              </Button>
            </div>
          </div>

          <div className='col-6'>
            <video
              src=''
              poster={`/images/courses/${props.cover}`}
              className='course-info__video'
              controls></video>
          </div>
        </div>
      </div>
    </section>
  );
}
