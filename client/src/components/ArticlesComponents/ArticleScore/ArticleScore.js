import React from "react";
import "./ArticleScore.css";
export default function ArticleScore() {
  return (
    <div className='article__score'>
      <div className='article__score-icons'>
        <img src='/images/svgs/star_fill.svg' className='article__score-icon' />
        <img src='/images/svgs/star_fill.svg' className='article__score-icon' />
        <img src='/images/svgs/star_fill.svg' className='article__score-icon' />
        <img src='/images/svgs/star_fill.svg' className='article__score-icon' />
        <img src='/images/svgs/star.svg' className='article__score-icon' />
      </div>
      <span className='article__score-text'>4.2/5 - (5 امتیاز)</span>
    </div>
  );
}
