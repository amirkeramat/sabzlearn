import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Form/Button/Button";
import { contactSchema } from "../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
import "./ContactForm.css";
export default function ContactForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "all",
  });
  const onSubmit = (data) => {
    console.log(data);
    const newContact = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      body: data.message,
    };
    fetch("http://localhost:4000/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
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
      .then((result) => {
        swal({
          title: "پیام شما با موفقیت ثبت شد در اسرع وقت پیگیری میشود",
          icon: "success",
          button: "حله",
        }).then((value) => {
          navigate("/contact");
        });
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "مشکلی پیش امده فیلد های ضروری را با دقت پر کنید با تشکر",
          icon: "error",
          button: "خروج",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
      <div className='login-form__username'>
        <input
          className={`login-form__username-input ${
            errors.fullName ? "input-error" : ""
          }`}
          type='text'
          placeholder='نام و نام خانوادگی'
          {...register("fullName")}
        />
        <p className='error-box'>{errors.fullName?.message}</p>
        <i className='login-form__username-icon fa fa-user'></i>
      </div>
      <div className='login-form__password'>
        <input
          className='login-form__password-input'
          type='text'
          placeholder='آدرس ایمیل'
          {...register("email")}
        />
        <p className='error-box'>{errors.email?.message}</p>

        <i className='login-form__password-icon fa fa-envelope'></i>
      </div>
      <div className='login-form__username'>
        <input
          className='login-form__username-input'
          type='text'
          placeholder='شماره تماس'
          {...register("phone")}
        />
        <p className='error-box'>{errors.phone?.message}</p>

        <i className='login-form__username-icon fa fa-user'></i>
      </div>
      <div className='login-form__username'>
        <textarea
          className='login-form__username-input'
          placeholder='نظر خود را با ما در میان بگذارید'
          {...register("message")}
        />
        <p className='error-box'>{errors.message?.message}</p>

        <i className='login-form__username-icon fa fa-user'></i>
      </div>

      <Button
        className={`login-form__btn 
                    ${
                      !errors.fullName?.message &&
                      !errors.email?.message &&
                      !errors.phone?.message &&
                      !errors.message?.message
                        ? "login-form__btn-success"
                        : "login-form__btn-error"
                    }
                 
              }`}
        disabled={
         ( !errors.fullName?.message &&
          !errors.email?.message &&
          !errors.phone?.message &&
          !errors.message?.message)
            ? false
            : true
        }
        type='submit'>
        <i className='login-form__btn-icon fa fa-user-plus'></i>
        <span className='login-form__btn-text'>ثبت</span>
      </Button>
    </form>
  );
}
