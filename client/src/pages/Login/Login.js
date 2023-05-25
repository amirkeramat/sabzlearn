import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Login.css";
import LoginForm from "../../Components/LoginForm/LoginForm";
import swal from "sweetalert";
import AuthContext from "../../context/AuthContext";
export default function Login() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      swal({
        title: "قبلا وارد سایت شده اید",
        icon: "success",
        button: "ورود به پنل کاربری",
      }).then((value) => {
        navigate("/");
      });
    }
  });

  return (
    <>
      {!authContext.isLoggedIn ? (
        <>
          <Topbar />
          <Navbar />

          <section className='login-register'>
            <div className='login'>
              <span className='login__title'>ورود به حساب کاربری</span>
              <span className='login__subtitle'>
                خوشحالیم دوباره میبینیمت دوست عزیز :
              </span>
              <div className='login__new-member'>
                <span className='login__new-member-text'>
                  کاربر جدید هستید؟
                </span>
                <Link className='login__new-member-link' to='/register'>
                  ثبت نام
                </Link>
              </div>
              <LoginForm />
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
      ) : null}
    </>
  );
}
