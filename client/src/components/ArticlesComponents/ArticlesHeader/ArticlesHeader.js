import React from 'react'
import './ArticlesHeader.css'
export default function ArticlesHeader() {
  return (
    <div class='article__header'>
      <div class='article-header__category article-header__item'>
        <i class='far fa-folder article-header__icon'></i>
        <a href='#' class='article-header__text'>
          جاوا اسکریپت
        </a>
      </div>
      <div class='article-header__category article-header__item'>
        <i class='far fa-user article-header__icon'></i>
        <span class='article-header__text'> ارسال شده توسط قدیر</span>
      </div>
      <div class='article-header__category article-header__item'>
        <i class='far fa-clock article-header__icon'></i>
        <span class='article-header__text'> ارسال شده توسط قدیر</span>
      </div>
      <div class='article-header__category article-header__item'>
        <i class='far fa-eye article-header__icon'></i>
        <span class='article-header__text'> 2.14k بازدید</span>
      </div>
    </div>
  );
}
