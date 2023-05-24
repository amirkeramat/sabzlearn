import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Form/Button/Button";
import { loginSchema } from "../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";

import swal from "sweetalert";

export default function LoginForm() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [isGoogleRecaptcha, setIsGoogleRecaptcha] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
  });
  //  const onChange = (value) => {
  //    console.log("Captcha value:", value);
  //    setIsGoogleRecaptcha(true);
  //  };
  const onError = (err) => {
    console.log(err);
  };
  const onSubmit = (data) => {
    const userData = {
      identifier: data.username,
      password: data.password,
    };
    console.log(userData);
    fetch("http://localhost:4000/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
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
        console.log(result);
        authContext.login({}, result.accessToken);
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
          title: "کاربری با مشخصات وارد شده وجود ندارد",
          icon: "error",
          button: "خروج",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className='login-form'>
      <div className='login-form__username'>
        <input
          className='login-form__username-input'
          type='text'
          placeholder='نام کاربری'
          {...register("username")}
        />
        <p>{errors.username?.message}</p>

        <i className='login-form__username-icon fa fa-user'></i>
      </div>

      <div className='login-form__password'>
        <input
          className='login-form__password-input'
          type='password'
          placeholder='رمز عبور'
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <i className='login-form__password-icon fa fa-lock-open'></i>
      </div>
      <div className='login-form__username mt-2 d-flex justify-content-center'>
        {/* <ReCAPTCHA
          sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
          onChange={onChange}
        /> */}
      </div>
      <Button
        className={`login-form__btn 
                    ${
                      !errors.username?.message && !errors.password?.message
                        ? "login-form__btn-success"
                        : "login-form__btn-error"
                    }
                 
              }`}
        disabled={
          !errors.username?.message && !errors.password?.message ? false : true
        }
        type='submit'>
        <i className='login-form__btn-icon fa fa-user-plus'></i>
        <span className='login-form__btn-text'>ورود</span>
      </Button>
    </form>
  );
}
