import React from 'react'
import './CourseInfoBox.css'
export default function CourseInfoBox({title,subtitle,icon}) {
  return (
    <div class='col-4'>
      <div class='course-boxes__box'>
        <div class='course-boxes__box-right'>
          <i class={`course-boxes__box-right-icon ${icon}`}></i>
        </div>
        <div class='course-boxes__box-left'>
          <span class='course-boxes__box-left-title'>{title}</span>
          <span class='course-boxes__box-left--subtitle'>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
