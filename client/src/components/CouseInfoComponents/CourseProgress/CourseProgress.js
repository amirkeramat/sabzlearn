import React from 'react'
import './CourseProgress.css'
export default function CourseProgress() {
  return (
    <div class='course-progress'>
      <div class='course-progress__header'>
        <i class='fas fa-chart-line course-progress__icon'></i>
        <span class='course-progress__title'>درصد پیشرفت دوره: 100%</span>
      </div>
      <div class='progress course-progress__bar'>
        <div
          class='progress-bar progress-bar-striped progress-bar-animated w-75'
          role='progressbar'
          aria-label='Animated striped example'
          aria-valuenow='75'
          aria-valuemin='0'
          aria-valuemax='100'
         ></div>
      </div>
    </div>
  );
}
