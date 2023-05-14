import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./AboutUs.css";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
export default function AboutUs() {
  return (
    <div className='about-us'>
      <div className='container'>
        <div className='about-us__header'>
          <SectionHeader
            title='ما چه کمکی بهتون میکنیم؟'
            desc='از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست'
          />
        </div>
        <div className='container'>
          <div className='row'>
            <AboutUsBox
              title='دوره های اختصاصی'
              desc='با پشتیبانی و کیفیت بالا ارائه میده !'
              icon='far fa-copyright'
              aos='zoom-in-right'
            />
            <AboutUsBox
              title='اجازه تدریس'
              desc='به هر مدرسی رو نمیده. چون کیفیت براش مهمه !'
              icon='fa fa-leaf'
              aos='zoom-in-left'
            />
            <AboutUsBox
              title='دوره پولی و رایگان'
              desc='براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده'
              icon='fa fa-gem'
              aos='zoom-in-right'
            />
            <AboutUsBox
              title='اهمیت به کاربر'
              desc='اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست'
              icon='fa fa-crown'
              aos='zoom-in-left'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
