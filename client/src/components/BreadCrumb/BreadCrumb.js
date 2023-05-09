import React from 'react'
import './BreadCrumb.css'
export default function BreadCrumb() {
  return (
    <section class='breadcrumb'>
      <div class='container'>
        <div class='breadcrumb__content'>
          <div class='breadcrumb__home-content-icon'>
            <i class='fas fa-home breadcrumb__home-icon'></i>
          </div>
          <ul class='breadcrumb__list'>
            <li class='breadcrumb__item'>
              <a href='#' class='breadcrumb__link'>
                خانه
                <i class='fas fa-angle-left breadcrumb__icon'></i>
              </a>
            </li>
            <li class='breadcrumb__item'>
              <a href='#' class='breadcrumb__link'>
                آموزش برنامه نویسی فرانت اند
                <i class='fas fa-angle-left breadcrumb__icon'></i>
              </a>
            </li>
            <li class='breadcrumb__item'>
              <a href='#' class='breadcrumb__link'>
                دوره متخصص جاوا اسکریپت
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
