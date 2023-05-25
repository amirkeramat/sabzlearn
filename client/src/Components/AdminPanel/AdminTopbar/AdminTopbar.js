import React, { memo, useEffect, useState } from "react";
import "./AdminTopbar.css";
import Button from "../../Form/Button/Button";
export default memo(function AdminTopbar() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch("http://localhost:4000/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='home-header'>
          <div className='home-right'>
            <div className='home-searchbar'>
              <input
                type='text'
                className='search-bar'
                placeholder='جستجو...'
              />
            </div>
            <div className='home-notification'>
              <button type='button'>
                <i className='far fa-bell'></i>
              </button>
            </div>
            <div className='home-notification-modal'>
              <ul className='home-notification-modal-list'>
                <li className='home-notification-modal-item'>
                  <span className='home-notification-modal-text'>پیغام ها</span>
                  <label className='switch'>
                    <input type='checkbox' checked />
                    <span className='slider round'></span>
                  </label>
                </li>
                <li className='home-notification-modal-item'>
                  <span className='home-notification-modal-text'>پیغام ها</span>
                  <label className='switch'>
                    <input type='checkbox' checked />
                    <span className='slider round'></span>
                  </label>
                </li>
                <li className='home-notification-modal-item'>
                  <span className='home-notification-modal-text'>پیغام ها</span>
                  <label className='switch'>
                    <input type='checkbox' checked />
                    <span className='slider round'></span>
                  </label>
                </li>
                <li className='home-notification-modal-item'>
                  <span className='home-notification-modal-text'>پیغام ها</span>
                  <label className='switch'>
                    <input type='checkbox' checked />
                    <span className='slider round'></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className='home-left'>
            <div className='home-profile'>
              <div className='home-profile-image'>
                <Button to='/p-admin'>
                  <img src={userData.profile} alt='' />
                </Button>
              </div>
              <div className='home-profile-name'>
                <Button to='/p-admin'>{userData.name}</Button>
              </div>
              <div className='home-profile-icon'>
                <i className='fas fa-angle-down'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
