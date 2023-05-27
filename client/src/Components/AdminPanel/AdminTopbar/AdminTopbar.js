import React, { memo, useEffect, useState } from "react";
import "./AdminTopbar.css";
import Button from "../../Form/Button/Button";
export default memo(function AdminTopbar({
  adminData,
  adminNotifications,
  seeNotification,
}) {
  const [showNotif, setShowNotfi] = useState(false);
  const showNotifHandler = () => {
    setShowNotfi(true);
  };
  const hideNotifHandler = () => {
    setShowNotfi(false);
  };
  const seeNotif = (notifId) => {
    seeNotification(notifId);
  };
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div
          className={`home-header ${
            showNotif && "active-modal-notfication"
          }  `}>
          <div className='home-right'>
            <div className='home-searchbar'>
              <input
                type='text'
                className='search-bar'
                placeholder='جستجو...'
              />
            </div>
            <div className='home-notification '>
              <button type='button' onMouseEnter={showNotifHandler}>
                <i className='far fa-bell'></i>
              </button>
            </div>
            <div
              className='home-notification-modal '
              onMouseLeave={hideNotifHandler}
              onMouseEnter={showNotifHandler}>
              <ul className='home-notification-modal-list '>
                {adminNotifications.length ? (
                  <>
                    {adminNotifications.map((notif) => (
                      <li
                        key={notif._id}
                        className='home-notification-modal-item'>
                        <span className='home-notification-modal-text'>
                          {notif.msg}
                        </span>
                        <Button
                          className=' border-0 bg-transparent p-2'
                          onClick={() => seeNotif(notif._id)}>
                          دیدم
                        </Button>
                      </li>
                    ))}
                  </>
                ) : (
                  <li className='home-notification-modal-item'>
                    <span className='home-notification-modal-text'>
                      پیام جدیدی ندارید
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className='home-left'>
            <div className='home-profile'>
              <div className='home-profile-image'>
                <Button to='/p-admin'>
                  <img src={adminData.profile} alt='' />
                </Button>
              </div>
              <div className='home-profile-name'>
                <Button to='/p-admin'>{adminData.name}</Button>
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
