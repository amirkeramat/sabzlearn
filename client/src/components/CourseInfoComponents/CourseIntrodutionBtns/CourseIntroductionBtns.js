import React from "react";
import "./CourseIntroductionBtns.css";
import Button from "../../Form/Button/Button";
export default function CourseIntroductionBtns() {
  return (
    <div className='introduction__btns'>
      <Button href='#' className='introduction__btns-item'>
        دانلود همگانی ویدیوها
      </Button>
      <Button href='#' className='introduction__btns-item'>
        دانلود همگانی پیوست‌ها
      </Button>
    </div>
  );
}
