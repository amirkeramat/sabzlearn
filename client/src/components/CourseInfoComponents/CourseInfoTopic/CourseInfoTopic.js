import React from "react";
import "./CourseInfoTopic.css";
import Button from '../../Form/Button/Button'
export default function CourseInfoTopic() {
  return (
    <div className='courseInfo__topic'>
      <span className='course-info__topic-title ms-2 me-2'>سرفصل های دوره</span>
      <span className='course-info__topic-text'>
        برای مشاهده و یا دانلود دوره روی کلمه
        <Button href='#' className=' text-primary ms-2 me-2'>
          لینک
        </Button>
        کلیک کنید
      </span>
    </div>
  );
}
