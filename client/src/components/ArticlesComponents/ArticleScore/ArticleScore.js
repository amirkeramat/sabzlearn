import React from 'react'
import './ArticleScore.css'
export default function ArticleScore() {
  return (
    <div class='article__score'>
      <div class='article__score-icons'>
        <img src='/images/svgs/star_fill.svg' class='article__score-icon' />
        <img src='/images/svgs/star_fill.svg' class='article__score-icon' />
        <img src='/images/svgs/star_fill.svg' class='article__score-icon' />
        <img src='/images/svgs/star_fill.svg' class='article__score-icon' />
        <img src='/images/svgs/star.svg' class='article__score-icon' />
      </div>
      <span class='article__score-text'>4.2/5 - (5 امتیاز)</span>
    </div>
  );
}
