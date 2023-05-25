import React from "react";
import "./ArticleSocialMedia.css";
import Button from "../../Form/Button/Button";
export default function ArticleSocialMedia() {
  return (
    <div className='article-social-media'>
      <span className='article-social-media__text'>اشتراک گذاری :</span>
      <Button href='#' className='article-social-media__link'>
        <i className='fab fa-telegram-plane article-social-media__icon'></i>
      </Button>
      <Button href='#' className='article-social-media__link'>
        <i className='fab fa-twitter article-social-media__icon'></i>
      </Button>
      <Button href='#' className='article-social-media__link'>
        <i className='fab fa-facebook-f article-social-media__icon'></i>
      </Button>
    </div>
  );
}
