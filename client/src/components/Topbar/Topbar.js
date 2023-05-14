import React from "react";

import "./Topbar.css";
import Button from "../Form/Button/Button";

export default function Topbar() {
  return (
    <div className='top-bar position-relative'>
      <div className='container-fluid '>
        <div className='top-bar__content'>
          <div className={`top-bar__right`}>
            <ul className='top-bar__menu flex-column flex-md-row'>
              <li className='top-bar__item'>
                <Button href='#' className='top-bar__link'>
                  آموزش Html
                </Button>
              </li>
              <li className='top-bar__item'>
                <Button href='#' className='top-bar__link'>
                  آموزش Css
                </Button>
              </li>
              <li className='top-bar__item'>
                <Button href='#' className='top-bar__link'>
                  آموزش جاوا اسکریپت
                </Button>
              </li>
              <li className='top-bar__item'>
                <Button href='#' className='top-bar__link'>
                  آموزش بوت استرپ
                </Button>
              </li>
              <li className='top-bar__item'>
                <Button href='#' className='top-bar__link'>
                  آموزش پایتون
                </Button>
              </li>
              <li className='top-bar__item'>
                <Button href='#' className='top-bar__link'>
                  آموزش ری‌اکت
                </Button>
              </li>
              <li className='top-bar__item'>
                <Button href='#' className='top-bar__link'>
                  20,000 تومان
                </Button>
              </li>
            </ul>
          </div>
          <div className='top-bar__left'>
            <div className='top-bar__email'>
              <Button href='#' className='top-bar__email-text top-bar__link'>
                sabzlearn@gmail.com
              </Button>
              <i className='fas fa-envelope top-bar__email-icon'></i>
            </div>
            <div className='top-bar__phone'>
              <Button href='#' className='top-bar__phone-text top-bar__link'>
                09921558293
              </Button>
              <i className='fas fa-phone top-bar__phone-icon'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
