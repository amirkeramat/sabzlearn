import React from "react";
import "./Error404.css";
import Button from "../Form/Button/Button";
export default function Error404() {
  return (
    <div className='error-container'>
      <div className=' d-flex justify-content-center align-items-center h-100'>
        <span className='text-center '>
          <h1 className='text-danger h1'>Error404</h1>
          <p className=' display-4'>دسترسی به این بخش مجاز نیست</p>
          <div className="mt-5">
            <Button to='/' className='error-btn'>
              بازگشت
            </Button>
          </div>
        </span>
      </div>
    </div>
  );
}
