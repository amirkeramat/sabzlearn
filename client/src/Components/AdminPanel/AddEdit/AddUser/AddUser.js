import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AddUser({ getAllData }) {
  const { register, handleSubmit, reset } = useForm({
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
          return res.json();
        }
      })
      .then((result) => {
        getAllData();
        reset();
        swal({
          title: "کاربر با موفقیت ساخته شد",
          icon: "success",
          button: "خروج",
        }).then(() => {
          reset();
        });
      })
      .catch((err) => {});
  };

  return (
    <form onSubmit={handleSubmit(fromSubmitHandler)} className='form'>
      <div className='col-6'>
        <div className='name input'>
          <label className='input-title'>نام و نام خانوادگی</label>
          <input
            type='text'
            className=''
            placeholder='لطفا نام و نام خانوادگی کاربر را وارد کنید...'
            {...register("fullName")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='family input'>
          <label className='input-title'>نام کاربری</label>
          <input
            type='text'
            className=''
            placeholder='لطفا نام کاربری را وارد کنید...'
            {...register("username")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='email input'>
          <label className='input-title'>ایمیل</label>
          <input
            type='text'
            className=''
            placeholder='لطفا ایمیل کاربر را وارد کنید...'
            {...register("email")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='phone input'>
          <label className='input-title'>شماره تلفن</label>
          <input
            type='text'
            className=''
            placeholder='لطفا شماره تلفن کاربر را وارد کنید...'
            {...register("phone")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='password input'>
          <label className='input-title'>رمز عبور</label>
          <input
            type='text'
            className=''
            placeholder='لطفا رمز عبور کاربر را وارد کنید...'
            {...register("password")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='password input'>
          <label className='input-title'>تکرار رمز</label>
          <input
            type='text'
            className=''
            placeholder='تکرار رمز عبور'
            {...register("confirmPassword")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-12'>
        <div className='bottom-form'>
          <div className='submit-btn'>
            <input type='submit' value='افزودن' />
          </div>
        </div>
      </div>
    </form>
  );
}
