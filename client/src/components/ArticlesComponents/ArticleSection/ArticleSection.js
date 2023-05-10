import React from 'react'
import './ArticleSection.css'
export default function ArticleSection({title,desc,img}) {
  return (
    <div class='article-section'>
      <h2 class='article-section__title'>
        معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
      </h2>
      <p class='paragraph article-section__text'>
        توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش جاوا
        اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود در آن‌ها
        به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و حداقلی به زبان
        انگلیسی داشته باشید و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را
        ترجمه کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا به شما
        خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که
        شما بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را یاد
        بگیرید.
      </p>
      <img
        src='/images/blog/4.png'
        alt='article body img'
        class='article-section__img'
      />
    </div>
  );
}
