import React from "react";
import "./ArticleRead.css";
import Button from "../../Form/Button/Button";
export default function ArticleRead() {
  return (
    <div className='article-read'>
      <span className='article-read__title'>
        آنچه در این مقاله خواهید خواند
      </span>
      <ul className='article-read__list'>
        <li className='article-read__item'>
          <Button href='#' className='article-read__link'>
            معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
          </Button>
        </li>
        <li className='article-read__item'>
          <Button href='#' className='article-read__link'>
            یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
          </Button>
        </li>
        <li className='article-read__item'>
          <Button href='#' className='article-read__link'>
            ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
          </Button>
        </li>
      </ul>
    </div>
  );
}
