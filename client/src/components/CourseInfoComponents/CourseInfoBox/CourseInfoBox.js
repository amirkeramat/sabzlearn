import React from "react";
import "./CourseInfoBox.css";
export default function CourseInfoBox({ title, subtitle, icon }) {
  return (
    <div className='col-4'>
      <div className='course-boxes__box d-flex'>
        <div className='course-boxes__box-right'>
          <i className={`course-boxes__box-right-icon ${icon}`}></i>
        </div>
        <div className='course-boxes__box-left'>
          <span className='course-boxes__box-left-title'>{title}</span>
          <span className='course-boxes__box-left--subtitle'>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
