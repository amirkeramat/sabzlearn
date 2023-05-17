import React from "react";
import "./CourseInfoRegister.css";
import Button from "../../Form/Button/Button";
export default function CourseInfoRegister({title}) {
  return (
    <div className='course-info__register'>
      <span className='course-info__register-title'>
        <i className='fas fa-graduation-cap course-info__register-icon'></i>
        {title ? (
          "دانشجوی دوره هستید"
        ) : (
          <Button to='/register' className='course-info__link'>
            خرید دوره
          </Button>
        )}
      </span>
    </div>
  );
}
