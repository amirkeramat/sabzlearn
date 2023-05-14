import React, { useEffect } from "react";
import "./ArticleCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Form/Button/Button";
export default function ArticleCard() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='col-4'>
      <div
        className='article-card'
        data-aos='fade-up'
        data-aos-anchor-placement='top-bottom'
        data-aos-delay='500'
        data-aos-duration='2000'>
        <div className='article-card__header'>
          <Button href='#' className='article-card__link-img'>
            <img
              src='images/blog/1.jpg'
              className='article-card__img'
              alt='Article Cover'
            />
          </Button>
        </div>
        <div className='article-card__content'>
          <Button href='#' className='article-card__link'>
            نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
          </Button>
          <p className='article-card__text'>
            زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع...
          </p>
          <Button href='#' className='article-card__btn'>
            بیشتر بخوانید
          </Button>
        </div>
      </div>
    </div>
  );
}
