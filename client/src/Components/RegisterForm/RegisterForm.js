import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Form/Button/Button";
import {registerSchema} from "../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../context/AuthContext";
import swal from "sweetalert";
import './RegisterForm.css'
export default function RegisterForm() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "all",
  });
  const onSubmit = (data) => {
    console.log(data);
    const newUser = {
      name: data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      phone: data.phone,
    };
    console.log(newUser);
    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
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
        authContext.login(result.user, result.accessToken);
        swal({
          title: "با موفقیت وارد شدید",
          icon: "success",
          button: "ورود به پنل کاربری",
        }).then((value) => {
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err);
         swal({
           title: 'نام کاربری یا ایمیل در سایت وجود دارد',
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
        <input
          className='login-form__username-input'
          type='text'
          placeholder='نام کاربری'
          {...register("username")}
        />
        <p className='error-box'>{errors.username?.message}</p>

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
      <div className='login-form__password'>
        <input
          className='login-form__password-input'
          type='password'
          placeholder='رمز عبور'
          {...register("password")}
        />
        <p className='error-box'>{errors.password?.message}</p>

        <i className='login-form__password-icon fa fa-lock-open'></i>
      </div>
      <div className='login-form__password'>
        <input
          className='login-form__password-input'
          type='password'
          placeholder='تکرار رمز عبور'
          {...register("confirmPassword")}
        />
        <p className='error-box'>{errors.confirmPassword?.message}</p>

        <i className='login-form__password-icon fa fa-lock-open'></i>
      </div>
      <Button
        className={`login-form__btn 
                
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
        type='submit'>
        <i className='login-form__btn-icon fa fa-user-plus'></i>
        <span className='login-form__btn-text'>عضویت</span>
      </Button>
    </form>
  );
}
