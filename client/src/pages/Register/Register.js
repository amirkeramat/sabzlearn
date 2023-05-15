import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import Input from "../../Components/Form/Input/Input";
import Button from "../../Components/Form/Button/Button";
import {
  requireValidator,
  maxValidator,
  minValidator,
  emailValidator,
  phoneValidator,
  equalValidator,
  unequalValidator,
} from "../../Validator/rules";

import { useForm } from "../../hooks/useForm";
import AuthContext from "../../context/AuthContext";
import "./Register.css";
export default function Register() {
  const authContext = useContext(AuthContext);
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      repassword: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  // console.log(formState);
  console.log(authContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.repassword.value,
      phone: formState.inputs.phone.value,
    };
   
    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((result) => {
        authContext.login(result.user,result.accessToken);
      });

    console.log("register ");
  };
  return (
    <>
      <Topbar />
      <Navbar />

      <section className='login-register'>
        <div className='login register-form'>
          <span className='login__title'>ساخت حساب کاربری</span>
          <span className='login__subtitle'>
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className='login__new-member'>
            <span className='login__new-member-text'>
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Link className='login__new-member-link' to='/login'>
              وارد شوید
            </Link>
          </div>
          <form action='#' className='login-form'>
            <div className='login-form__username'>
              <Input
                element='input'
                id='name'
                className='login-form__username-input'
                type='text'
                placeholder='نام و نام خانوادگی'
                onInputHandler={onInputHandler}
                validations={[
                  requireValidator(),
                  minValidator(8),
                  maxValidator(30),
                ]}
              />
              <i className='login-form__username-icon fa fa-user'></i>
            </div>
            <div className='login-form__username'>
              <Input
                element='input'
                id='phone'
                className='login-form__username-input'
                type='text'
                placeholder='شماره تماس'
                onInputHandler={onInputHandler}
                validations={[
                  requireValidator(),
                  minValidator(11),
                  maxValidator(11),
                  phoneValidator(),
                ]}
              />
              <i className='login-form__username-icon fa fa-user'></i>
            </div>
            <div className='login-form__username'>
              <Input
                element='input'
                id='username'
                className='login-form__username-input'
                type='text'
                placeholder='نام کاربری'
                onInputHandler={onInputHandler}
                validations={[
                  requireValidator(),
                  minValidator(8),
                  maxValidator(30),
                  unequalValidator(formState.inputs.password.value),
                ]}
              />
              <i className='login-form__username-icon fa fa-user'></i>
            </div>
            <div className='login-form__password'>
              <Input
                id='email'
                element='input'
                className='login-form__password-input'
                type='text'
                placeholder='آدرس ایمیل'
                onInputHandler={onInputHandler}
                validations={[
                  requireValidator(),
                  minValidator(8),
                  maxValidator(30),
                  emailValidator(),
                ]}
              />
              <i className='login-form__password-icon fa fa-envelope'></i>
            </div>
            <div className='login-form__password'>
              <Input
                id='password'
                element='input'
                className='login-form__password-input'
                type='password'
                placeholder='رمز عبور'
                onInputHandler={onInputHandler}
                validations={[
                  requireValidator(),
                  minValidator(8),
                  maxValidator(30),
                  unequalValidator(formState.inputs.username.value),
                ]}
              />
              <i className='login-form__password-icon fa fa-lock-open'></i>
            </div>
            <div className='login-form__password'>
              <Input
                id='repassword'
                element='input'
                className='login-form__password-input'
                type='password'
                placeholder='تکرار رمز عبور'
                onInputHandler={onInputHandler}
                validations={[
                  requireValidator(),
                  equalValidator(formState.inputs.password.value),
                ]}
              />
              <i className='login-form__password-icon fa fa-lock-open'></i>
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type='submit'
              onClick={onClickHandler}
              disabled={!formState.isFormValid}>
              <i className='login-form__btn-icon fa fa-user-plus'></i>
              <span className='login-form__btn-text'>عضویت</span>
            </Button>
          </form>
          <div className='login__des'>
            <span className='login__des-title'>سلام کاربر محترم:</span>
            <ul className='login__des-list'>
              <li className='login__des-item'>
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className='login__des-item'>
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className='login__des-item'>
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
