import React from "react";
import swal from "@sweetalert/with-react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AddCourse({getAllUser}) {
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
          console.log(res);
          return res.json();
        }
      })
      .then((result) => {
        getAllUser();
        reset();
        swal({
          title: "کاربر با موفقیت ساخته شد",
          icon: "success",
          button: "خروج",
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
            placeholder='نام دوره'
            {...register("courseName")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='family input'>
          <label className='input-title'>نام کاربری</label>
          <textarea
            type=''
            className=''
            placeholder='توضیحات دوره'
            {...register("courseDescription")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='email input'>
          <label className='input-title'>عکس دوره</label>
          <input
            type='text'
            className=''
            placeholder='مسیر عکس دوره را وارد نمایید'
            {...register("CourseCover")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='phone input'>
          <label className='input-title'>لینک دوره</label>
          <input
            type='text'
            className=''
            placeholder='لینک دوره را وارد نمایید'
            {...register("courseLink")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='password input'>
          <label className='input-title'>مبلغ دوره </label>
          <input
            type='text'
            className=''
            placeholder='مبلغ دوره را وارد نمایید'
            {...register("coursePrice")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='password input'>
          <label className='input-title'>وضعیت </label>
          <input
            type='text'
            className=''
            placeholder='در حال برگذاری یا تمام شده؟'
            {...register("courseStatue")}
          />
          <span className='error-message text-danger'></span>
        </div>
      </div>
      <div className='col-6'>
        <div className='password input'>
          <label className='input-title'>دسته بندی </label>
          <select {...register("courseCategory")} name='' id=''></select>
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
