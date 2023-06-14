import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";
import Button from "../../Form/Button/Button";
import AuthContext from "../../../context/AuthContext";
import swal from "sweetalert";
export default function AdminSidebar() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const signOutHandler = () => {
    authContext.logout();
     swal({
       title:"از حساب خود با موفقیت خارج شدید",
       icon: "success",
       button: "ورود به سایت",
     }).then((value) => {
       navigate("/login");
     });
  };
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
          <li >
            <Button to='/'>
              <span>صفحه اصلی</span>
            </Button>
          </li>
          <li>
            <Button to='courses/1'>
              <span>دوره ها</span>
            </Button>
          </li>
          <li>
            <Button to='sessions'>
              <span> جلسات</span>
            </Button>
          </li>
          <li>
            <Button to='menus'>
              <span>منو ها</span>
            </Button>
          </li>
          <li>
            <Button to='articles/1'>
              <span>مقاله ها</span>
            </Button>
          </li>
          <li>
            <Button to='users/1'>
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
          <li>
            <Button onClick={signOutHandler} to=''>
              <span>خروج از حساب</span>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
