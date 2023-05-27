import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Pagination from "../../Pgination/Pagination";
import Button from "../../Form/Button/Button";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AdminUsers() {
  const [showUser, setShowUser] = useState([]);
  const [orderedUsers, setOrderedUsers] = useState([]);
  const [usersData, serUsersData] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/users`, {
      method: "GET",
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
        serUsersData(data);
        setOrderedUsers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUserHandler = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "",
      text: "آیا از حذف کاریر اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:4000/v1/users/${userID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal("کاربر مورد نظر با موفقیت حذف گردید", {
              icon: "success",
              buttons: "خروج",
            });
            getAllUser();
          } else {
            swal("مشکلی پیش امده دوباره تلاش کنید", {
              icon: "Error",
              buttons: "خروج",
            });
          }
        });
      } else {
        swal("حذف لغو شد !", {
          icon: "success",
          buttons: "خروج",
        });
      }
    });
  };

  const banUserHandler = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "",
      text: "آیا از بن کاریر اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willBan) => {
      if (willBan) {
        fetch(`http://localhost:4000/v1/users/ban/${userID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal("کاربر مورد نظر با موفقیت بن گردید", {
              icon: "success",
              buttons: "خروج",
            });
            fetch(`http://localhost:4000/v1/users/${userID}`, {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${localStorageData.token}`,
              },
            });
            getAllUser();
          } else {
            swal("مشکلی پیش امده دوباره تلاش کنید", {
              icon: "Error",
              buttons: "خروج",
            });
          }
        });
      } else {
        swal("بن کاربر لفو شد!", {
          icon: "success",
          buttons: "خروج",
        });
      }
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "all",
  });
  
  const fromSubmitHandler = (data) => {
    const newUser = {
      name: data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      phone: data.phone,
    };
    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 409) {
            swal({
              title: "نام کاربری یا ایمیل تکراری است",
              icon: "error",
              button: "خروج",
            });
          } else if (res.status === 403) {
            swal({
              title: "این شماره تماس مسدود شده است به پشتیبانی پیام دهید",
              icon: "error",
              button: "خروج",
            });
          }
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          console.log(res);
          return res.json();
        }
      })
      .then((result) => {
        swal({
          title: "کاربر با موفقیت ساخته شد",
          icon: "success",
          button: "خروج",
        });
      })
      .catch((err) => {});
  };
  return (
    <>
      <div class='home-content-edit'>
        <div class='back-btn'>
          <i class='fas fa-arrow-right'></i>
        </div>
        <form onSubmit={handleSubmit(fromSubmitHandler)} class='form'>
          <div class='col-6'>
            <div class='name input'>
              <label class='input-title'>نام و نام خانوادگی</label>
              <input
                type='text'
                className=''
                placeholder='لطفا نام و نام خانوادگی کاربر را وارد کنید...'
                {...register("fullName")}
              />
              <span class='error-message text-danger'></span>
            </div>
          </div>
          <div class='col-6'>
            <div class='family input'>
              <label class='input-title'>نام کاربری</label>
              <input
                type='text'
                className=''
                placeholder='لطفا نام کاربری را وارد کنید...'
                {...register("username")}
              />
              <span class='error-message text-danger'></span>
            </div>
          </div>
          <div class='col-6'>
            <div class='email input'>
              <label class='input-title'>ایمیل</label>
              <input
                type='text'
                className=''
                placeholder='لطفا ایمیل کاربر را وارد کنید...'
                {...register("email")}
              />
              <span class='error-message text-danger'></span>
            </div>
          </div>
          <div class='col-6'>
            <div class='phone input'>
              <label class='input-title'>شماره تلفن</label>
              <input
                type='text'
                className=''
                placeholder='لطفا شماره تلفن کاربر را وارد کنید...'
                {...register("phone")}
              />
              <span class='error-message text-danger'></span>
            </div>
          </div>
          <div class='col-6'>
            <div class='password input'>
              <label class='input-title'>رمز عبور</label>
              <input
                type='text'
                className=''
                placeholder='لطفا رمز عبور کاربر را وارد کنید...'
                {...register("password")}
              />
              <span class='error-message text-danger'></span>
            </div>
          </div>
          <div class='col-6'>
            <div class='password input'>
              <label class='input-title'>تکرار رمز</label>
              <input
                type='text'
                className=''
                placeholder='تکرار رمز عبور'
                {...register("confirmPassword")}
              />
              <span class='error-message text-danger'></span>
            </div>
          </div>
          <div class='col-12'>
            <div class='bottom-form'>
              <div class='submit-btn'>
                <input type='submit' value='افزودن' />
              </div>
            </div>
          </div>
        </form>
      </div>
      <DataTable title='کاربران'>
        <table className='table'>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>شماره</th>
              <th>ایمیل</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              showUser.map((userData, index) => (
                <tr key={userData._id}>
                  <td>{index + 1}</td>
                  <td>{userData.name}</td>
                  <td>{userData.phone}</td>
                  <td>{userData.email}</td>
                  <td>
                    <Button type='button' className='btn btn-primary edit-btn'>
                      ویرایش
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => deleteUserHandler(userData._id)}
                      type='button'
                      className='btn btn-danger delete-btn'>
                      حذف
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => banUserHandler(userData._id)}
                      type='button'
                      className='btn btn-danger delete-btn'>
                      بن
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </DataTable>
      <Pagination
        items={orderedUsers}
        itemCount={5}
        pathName={`/p-admin/users`}
        setShowCourse={setShowUser}
      />
    </>
  );
}
