import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../Components/AdminPanel/AdminSidebar/AdminSidebar";
import AdminTopbar from "../../Components/AdminPanel/AdminTopbar/AdminTopbar";
import "./AdminPanel.css";
export default function AdminPanel() {
  return (
    <>
      <div id='content'>
        <AdminSidebar />
        <div id='home' className='col-10'>
          <AdminTopbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}
