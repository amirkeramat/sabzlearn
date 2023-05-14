import React from "react";
import "./CourseProgress.css";
export default function CourseProgress() {
  return (
    <div className='course-progress'>
      <div className='course-progress__header'>
        <i className='fas fa-chart-line course-progress__icon'></i>
        <span className='course-progress__title'>درصد پیشرفت دوره: 100%</span>
      </div>
      <div className='progress course-progress__bar'>
        <div
          className='progress-bar progress-bar-striped progress-bar-animated w-75'
          role='progressbar'
          aria-label='Animated striped example'
          aria-valuenow='75'
          aria-valuemin='0'
          aria-valuemax='100'></div>
      </div>
    </div>
  );
}
