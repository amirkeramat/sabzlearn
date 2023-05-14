import React from "react";

import "./Navbar.css";
import Button from "../Form/Button/Button";

export default function Navbar() {
  return (
    <div className='main-header'>
      <div className='container-fluid'>
        <div className='main-header__content'>
          <div className='main-header__right'>
            <img
              src='/images/logo/Logo.png'
              className='main-header__logo'
              alt='لوگوی سبزلرن'
            />

            <ul className='main-header__menu d-none d-lg-flex'>
              <li className='main-header__item'>
                <Button to='/' className='main-header__link'>
                  صفحه اصلی
                </Button>
              </li>

              <li className='main-header__item'>
                <Button to='/course-info/frontend' className='main-header__link'>
                  فرانت اند
                  <i className='fas fa-angle-down main-header__link-icon'></i>
                  <ul className='main-header__dropdown'>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش Html
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش Css
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش جاوا اسکریپت
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش FlexBox
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش جامع ری‌اکت
                      </Button>
                    </li>
                  </ul>
                </Button>
              </li>
              <li className='main-header__item'>
                <Button href='#' className='main-header__link'>
                  امنیت
                  <i className='fas fa-angle-down main-header__link-icon'></i>
                  <ul className='main-header__dropdown'>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش کالی لینوکس
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش پایتون سیاه
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش جاوا اسکریپت سیاه
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        آموزش شبکه
                      </Button>
                    </li>
                  </ul>
                </Button>
              </li>
              <li className='main-header__item'>
                <Button href='/article-info/js' className='main-header__link'>
                  مقالات
                  <i className='fas fa-angle-down main-header__link-icon'></i>
                  <ul className='main-header__dropdown'>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        توسعه وب
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        جاوا اسکریپت
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        فرانت اند
                      </Button>
                    </li>
                  </ul>
                </Button>
              </li>
              <li className='main-header__item'>
                <Button href='#' className='main-header__link'>
                  پایتون
                  <i className='fas fa-angle-down main-header__link-icon'></i>
                  <ul className='main-header__dropdown'>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        دوره متخصص پایتون
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        دوره هوش مصنوعی با پایتون
                      </Button>
                    </li>
                    <li className='main-header__dropdown-item'>
                      <Button href='#' className='main-header__dropdown-link'>
                        دوره متخصص جنگو
                      </Button>
                    </li>
                  </ul>
                </Button>
              </li>
              <li className='main-header__item'>
                <Button href='#' className='main-header__link'>
                  مهارت های نرم
                </Button>
              </li>
            </ul>
          </div>

          <div className='main-header__left'>
            <Button href='#' className='main-header__search-btn'>
              <i className='fas fa-search main-header__search-icon'></i>
            </Button>
            <Button href='#' className='main-header__cart-btn'>
              <i className='fas fa-shopping-cart main-header__cart-icon'></i>
            </Button>
            <Button href='#' className='main-header__profile'>
              <span className='main-header__profile-text'>
                محمدامین سعیدی راد
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
