import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Register.css";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
export default function Register() {
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
          <RegisterForm />

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
