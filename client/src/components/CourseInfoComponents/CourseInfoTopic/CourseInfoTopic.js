import React from "react";
import "./CourseInfoTopic.css";
export default function CourseInfoTopic() {
  return (
    <div className='courseInfo__topic'>
      <span class='course-info__topic-title ms-2 me-2'>سرفصل های دوره</span>
      <span class='course-info__topic-text'>
        برای مشاهده و یا دانلود دوره روی کلمه
        <a href='#' className=' text-primary ms-2 me-2'>
          لینک
        </a>
        کلیک کنید
      </span>
    </div>
  );
}
