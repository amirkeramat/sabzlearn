import React from 'react'
import './TeacherDetail.css'
export default function TeacherDetail() {
  return (
    <div class='techer-details'>
      <div class='techer-details__header'>
        <div class='techer-details__header-right'>
          <img
            src='/images/info/teacher.jfif'
            alt='Teacher Profile'
            class='techer-details__header-img'
          />
          <div class='techer-details__header-titles'>
            <a href='#' class='techer-details__header-link'>
              محمدامین سعیدی راد
            </a>
            <span class='techer-details__header-skill'>
              Front End & Back End Developer
            </span>
          </div>
        </div>
        <div class='techer-details__header-left'>
          <i class='fas fa-chalkboard-teacher techer-details__header-icon'></i>
          <span class='techer-details__header-name'>مدرس</span>
        </div>
      </div>
      <p class='techer-details__footer'>
        اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2 سال با زبان
        جاوا اندروید کار میکردم .بعد تصمیم گرفتم در زمینه وب فعالیت داشته
        باشم.و..
      </p>
    </div>
  );
}
