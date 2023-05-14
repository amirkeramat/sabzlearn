import React from "react";
import "./ArticleComments.css";
import Button from '../../Form/Button/Button'
export default function ArticleComments() {
  return (
    <div className='comments'>
      <span className='comments__title'>دیدگاهتان را بنویسید</span>
      <span className='comments__text'>
        <Button href='#'>با عنوان محمدامین سعیدی راد وارد شده اید.</Button>
        <Button href='#'>خارج میشوید? </Button>
        بخش های موردنیاز علامت گذاری شده اند *
      </span>
      <div className='comments_content'>
        <span className='comments__content-title'>دیدگاه *</span>
        <textarea className='comments__content-textarea'></textarea>
      </div>
      <Button type='submit' className='comments__button'>
        فرستادن دیدگاه
      </Button>
    </div>
  );
}
