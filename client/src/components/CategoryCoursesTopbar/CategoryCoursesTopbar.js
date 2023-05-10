import React from 'react'
import './CategoryCoursesTopbar.css'
export default function CategoryCoursesTopbar() {
  return (
    <div class='courses-top-bar'>
      <div class='courses-top-bar__right'>
        <div class='courses-top-bar__row-btn courses-top-bar__icon--active'>
          <i class='fas fa-border-all courses-top-bar__icon'></i>
        </div>
        <div class='courses-top-bar__column-btn'>
          <i class='fas fa-align-left courses-top-bar__icon'></i>
        </div>

        <div class='courses-top-bar__selection'>
          <span class='courses-top-bar__selection-title'>
            مرتب سازی پیش فرض
            <i class='fas fa-angle-down courses-top-bar__selection-icon'></i>
          </span>
          <ul class='courses-top-bar__selection-list'>
            <li class='courses-top-bar__selection-item courses-top-bar__selection-item--active'>
              مرتب سازی پیش فرض
            </li>
            <li class='courses-top-bar__selection-item'>
              مربت سازی بر اساس محبوبیت
            </li>
            <li class='courses-top-bar__selection-item'>
              مربت سازی بر اساس امتیاز
            </li>
            <li class='courses-top-bar__selection-item'>
              مربت سازی بر اساس آخرین
            </li>
            <li class='courses-top-bar__selection-item'>
              مربت سازی بر اساس ارزان ترین
            </li>
            <li class='courses-top-bar__selection-item'>
              مربت سازی بر اساس گران ترین
            </li>
          </ul>
        </div>
      </div>

      <div class='courses-top-bar__left'>
        <form action='#' class='courses-top-bar__form'>
          <input
            type='text'
            class='courses-top-bar__input'
            placeholder='جستجوی دوره ...'
          />
          <i class='fas fa-search courses-top-bar__search-icon'></i>
        </form>
      </div>
    </div>
  );
}
