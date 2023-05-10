import React from "react";
import './ArticleSocialMedia.css'
export default function ArticleSocialMedia() {
  return (
    <div class='article-social-media'>
      <span class='article-social-media__text'>اشتراک گذاری :</span>
      <a href='#' class='article-social-media__link'>
        <i class='fab fa-telegram-plane article-social-media__icon'></i>
      </a>
      <a href='#' class='article-social-media__link'>
        <i class='fab fa-twitter article-social-media__icon'></i>
      </a>
      <a href='#' class='article-social-media__link'>
        <i class='fab fa-facebook-f article-social-media__icon'></i>
      </a>
    </div>
  );
}
