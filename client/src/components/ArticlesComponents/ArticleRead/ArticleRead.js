import React from 'react'
import './ArticleRead.css'
export default function ArticleRead() {
  return (
    <div class='article-read'>
      <span class='article-read__title'>آنچه در این مقاله خواهید خواند</span>
      <ul class='article-read__list'>
        <li class='article-read__item'>
          <a href='#' class='article-read__link'>
            معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
          </a>
        </li>
        <li class='article-read__item'>
          <a href='#' class='article-read__link'>
            یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
          </a>
        </li>
        <li class='article-read__item'>
          <a href='#' class='article-read__link'>
            ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
          </a>
        </li>
      </ul>
    </div>
  );
}
