import React from "react";
import "./ArticlesHeader.css";
import Button from '../../Form/Button/Button'
export default function ArticlesHeader() {
  return (
    <div className='article__header'>
      <div className='article-header__category article-header__item'>
        <i className='far fa-folder article-header__icon'></i>
        <Button href='#' className='article-header__text'>
          جاوا اسکریپت
        </Button>
      </div>
      <div className='article-header__category article-header__item'>
        <i className='far fa-user article-header__icon'></i>
        <span className='article-header__text'> ارسال شده توسط قدیر</span>
      </div>
      <div className='article-header__category article-header__item'>
        <i className='far fa-clock article-header__icon'></i>
        <span className='article-header__text'> ارسال شده توسط قدیر</span>
      </div>
      <div className='article-header__category article-header__item'>
        <i className='far fa-eye article-header__icon'></i>
        <span className='article-header__text'> 2.14k بازدید</span>
      </div>
    </div>
  );
}
