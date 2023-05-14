import React from "react";
import "./TeacherDetail.css";
import Button from '../../Form/Button/Button'
export default function TeacherDetail() {
  return (
    <div className='techer-details'>
      <div className='techer-details__header'>
        <div className='techer-details__header-right'>
          <img
            src='/images/info/teacher.jfif'
            alt='Teacher Profile'
            className='techer-details__header-img'
          />
          <div className='techer-details__header-titles'>
            <Button href='#' className='techer-details__header-link'>
              محمدامین سعیدی راد
            </Button>
            <span className='techer-details__header-skill'>
              Front End & Back End Developer
            </span>
          </div>
        </div>
        <div className='techer-details__header-left'>
          <i className='fas fa-chalkboard-teacher techer-details__header-icon'></i>
          <span className='techer-details__header-name'>مدرس</span>
        </div>
      </div>
      <p className='techer-details__footer'>
        اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2 سال با زبان
        جاوا اندروید کار میکردم .بعد تصمیم گرفتم در زمینه وب فعالیت داشته
        باشم.و..
      </p>
    </div>
  );
}
