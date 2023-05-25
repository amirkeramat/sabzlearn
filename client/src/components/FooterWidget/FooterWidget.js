import React from "react";
import "./FooterWidget.css";
import Button from "../Form/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newsLetterSchema } from "../../Validator/schema";
import swal from "sweetalert";
export default function FooterWidget({ title, desc, links, grid, form }) {
  const { register, handleSubmit,reset } = useForm({
    resolver: yupResolver(newsLetterSchema),
    mode: "all",
  });
  const formSubmitHandler = (value) => {
    
    const userEmail = {
      email: value.email,
    };
    fetch("http://localhost:4000/v1/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail),
    }).then((res) => {
      if (!res.ok) {
        swal({
          title: "مشکلی پیش امده دوباره تلاش کنید",
          icon: "error",
          button: "خروج",
        });
      } else {
        swal({
          title: "با موفقیت در خبرنامه عضو شدید",
          icon: "success",
          button: "خروج",
        });
        reset()
      }
    });
  };
  return (
    <div className='col-4'>
      <div className='footer-widgets__item'>
        {title && <span className='footer-widgets__title'>{title}</span>}
        {desc && <p className='footer-widgets__text'>{desc}</p>}
        <div className={`footer-widgets__links`}>
          {links && !grid && (
            <>
              {links.map((link, index) => (
                <Button key={index} href='/' className={`footer-widgets__link`}>
                  {link}
                </Button>
              ))}
            </>
          )}
          {links && grid && (
            <div className='row'>
              {links.map((link, index) => (
                <div key={index} className='col-6'>
                  <Button href='/' className={`footer-widgets__link`}>
                    {link}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {form && (
        <div>
          <span className='footer-widgets__title mt-5'>عضویت در خبرنامه</span>
          <p className='footer-widgets__text'>
            برای اطلاع از جدیدترین خبرنامه ها عوض شوید
          </p>
          <form
            onSubmit={handleSubmit(formSubmitHandler)}
            className='d-flex mt-5 justify-content-between align-items-center'>
            <input
              className='w-100'
              placeholder='ایمیل خود را وارد نمایید'
              type='text'
              name=''
              id=''
              {...register("email")}
            />
            <Button className='footer-form-btn ' type='submit'>
              عضویت
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
