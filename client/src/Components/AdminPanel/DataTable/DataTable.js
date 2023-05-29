import React from 'react'

export default function DataTable({children , title,count}) {
  return (
    <div class='container'>
      <div class='home-content-latset-users'>
        <div class='home-content-users-title position-relative'>
          <span>
            لیست <span class='signup'>{title}</span>
          </span>
          <span className=' position-absolute start-0'>
            <span class='signup'>{count}</span>
            :تعداد کاربران
          </span>
        </div>
        <div class='home-content-users-table'>{children}</div>
      </div>
    </div>
  );
}
