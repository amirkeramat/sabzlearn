import React from "react";

export default function DataTable({ children, title, count }) {
  return (
    <div className='container'>
      <div className='home-content-latset-users'>
        <div className='home-content-users-title position-relative'>
          <span>
            لیست <span className='signup'>{title}</span>
          </span>
          <span className=' position-absolute start-0'>
            <span className='signup'>{count}</span>
            :تعداد کاربران
          </span>
        </div>
        <div className='home-content-users-table'>{children}</div>
      </div>
    </div>
  );
}
