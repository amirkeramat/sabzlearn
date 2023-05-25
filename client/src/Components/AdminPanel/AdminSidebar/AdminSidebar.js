import React from "react";
import "./AdminSidebar.css";
import Button from "../../Form/Button/Button";
export default function AdminSidebar() {
  return (
    <div id='sidebar' className='col-2'>
      <div className='sidebar-header'>
        <div className='sidebar-logo'>
          <Button to='p-admin'>
            <img src='/images/logo/Logo.png' alt='Logo' />
          </Button>
        </div>

        <div className='sidebar-menu-btn'>
          <i className='fas fa-bars'></i>
        </div>
      </div>
      <div className='sidebar-menu'>
        <ul>
          <li className='active-menu'>
            <Button to='/p-admin'>
              <span>صفحه اصلی</span>
            </Button>
          </li>
          <li>
            <Button to='courses'>
              <span>دوره ها</span>
            </Button>
          </li>
          <li>
            <Button to='menus'>
              <span>منو ها</span>
            </Button>
          </li>
          <li>
            <Button to='articles'>
              <span>مقاله ها</span>
            </Button>
          </li>
          <li>
            <Button to='users'>
              <span>کاربران</span>
            </Button>
          </li>
          <li>
            <Button to='discounts'>
              <span>کدهای تخفیف</span>
            </Button>
          </li>
          <li>
            <Button to='category'>
              <span>دسته‌بندی‌ها</span>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
