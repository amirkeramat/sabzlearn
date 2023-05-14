import React from "react";
import "./ArticleSuggestion.css";
import Button from '../../Form/Button/Button'
export default function ArticleSuggestion() {
  return (
    <div className='suggestion-articles__right suggestion-articles__content'>
      <Button href='#' className='suggestion-articles__icon-link'>
        <i className='fas fa-arrow-right suggestion-articles__icon'></i>
      </Button>
      <Button href='#' className='suggestion-articles__link'>
        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
      </Button>
    </div>
  );
}
