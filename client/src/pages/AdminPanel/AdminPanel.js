import React, {  useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../Components/AdminPanel/AdminSidebar/AdminSidebar";
import AdminTopbar from "../../Components/AdminPanel/AdminTopbar/AdminTopbar";
import Error404 from "../../Components/Error404/Error404";
import "./AdminPanel.css";
export default function AdminPanel() {
  const [adminData, setAdminData] = useState([]);
  const [isAllow, setIsAllow] = useState(null);
  const [adminNotifications, setAdminNotifications] = useState([]);
  const [notifUpdate, setNotifUpdate] = useState(false);
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
        if (data.role === "ADMIN") {
          setIsAllow(true);
          setAdminData(data);
          setAdminNotifications(data.notifications);
        } else {
          setIsAllow(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [notifUpdate]);

  const seeNotification = (notifId) => {
    let localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/notifications/see/${notifId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    }).then((res) => {
      if (res.ok) {
        setNotifUpdate((prv) => !prv);
      }
    });
  };
  if (isAllow === null) {
    return (
      <div className='d-flex justify-content-center align-items-center bg-dark text-white position-absolute top-0 start-0 end-0 bottom-0'>
        <div>
          ...Loading...
        </div>
      </div>
    );
  }
  if (!isAllow) {
    return <Error404 />;
  } else {
    return (
      <>
        <div id='content'>
          <AdminSidebar />
          <div id='home' className='col-10'>
            <AdminTopbar
              adminData={adminData}
              adminNotifications={adminNotifications}
              seeNotification={seeNotification}
            />

            <div className='container-fluid' id='home-content'>
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
}
