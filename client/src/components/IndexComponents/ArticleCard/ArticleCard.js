import React, { useEffect } from "react";
import "./ArticleCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ArticleCard() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class='col-4'>
      <div
        class='article-card'
        data-aos='fade-up'
        data-aos-anchor-placement='top-bottom'
        data-aos-delay='500'
        data-aos-duration='2000'
        
        >
        <div class='article-card__header'>
          <a href='#' class='article-card__link-img'>
            <img
              src='images/blog/1.jpg'
              class='article-card__img'
              alt='Article Cover'
            />
          </a>
        </div>
        <div class='article-card__content'>
          <a href='#' class='article-card__link'>
            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
          </a>
          <p class='article-card__text'>
            زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع...
          </p>
          <a href='#' class='article-card__btn'>
            بیشتر بخوانید
          </a>
        </div>
      </div>
    </div>
  );
}
