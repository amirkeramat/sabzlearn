import React, { useContext, useState, useEffect } from "react";

import "./Navbar.css";
import Button from "../Form/Button/Button";
import AuthContext from "../../context/AuthContext";
export default function Navbar() {
  const authContext = useContext(AuthContext);
  const [allMenuItems, setAllMenuItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/menus")
      .then((res) => res.json())
      .then((data) => {
        setAllMenuItems(data);
      });
  }, []);
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
              {allMenuItems.map((menuItem) => (
                <li key={menuItem._id} className='main-header__item'>
                  <Button to={menuItem.href} className='main-header__link'>
                    {menuItem.title}
                    {menuItem.submenus.length ? (
                      <>
                        <i className='fas fa-angle-down main-header__link-icon'></i>
                        <ul className='main-header__dropdown'>
                          {menuItem.submenus.map((subMenu) => (
                            <li
                              key={subMenu._id}
                              className='main-header__dropdown-item'>
                              <Button
                                to={subMenu.href}
                                className='main-header__dropdown-link'>
                                {subMenu.title}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className='main-header__left'>
            <Button href='#' className='main-header__search-btn'>
              <i className='fas fa-search main-header__search-icon'></i>
            </Button>
            <Button href='#' className='main-header__cart-btn'>
              <i className='fas fa-shopping-cart main-header__cart-icon'></i>
            </Button>
            {(authContext.isLoggedIn && authContext.token !== '') ? (
              <Button to='/' className='main-header__profile'>
                <span className='main-header__profile-text'>
                  {authContext.userInfos.name}
                </span>
              </Button>
            ) : (
              <Button to='/register' className='main-header__profile'>
                <span className='main-header__profile-text'>
                  ورود / ثبت نام
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
