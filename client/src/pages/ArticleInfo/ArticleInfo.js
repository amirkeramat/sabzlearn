import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ArticlesHeader from "../../Components/ArticlesComponents/ArticlesHeader/ArticlesHeader";
import ArticleScore from "../../Components/ArticlesComponents/ArticleScore/ArticleScore";
import ArticleRead from "../../Components/ArticlesComponents/ArticleRead/ArticleRead";
import ArticleSection from "../../Components/ArticlesComponents/ArticleSection/ArticleSection";
import ArticleSocialMedia from "../../Components/ArticlesComponents/ArticleSocialMedia/ArticleSocialMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleSuggestion from "../../Components/ArticlesComponents/ArticleSuggestion/ArticleSuggestion";
import Comments from "../../Components/Comments/Comments";
import "./ArticleInfo.css";
import ArticleRatedCourses from "../../Components/ArticlesComponents/ArticleRatedCourses/ArticleRatedCourses";
import FastLinks from "../../Components/FastLinks/FastLinks";
export default function ArticleInfo() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "مقاله ها", href: "article-info/js" },
          { id: 3, title: "مقایسه js  و  vu", href: "article-info/vu" },
        ]}
      />
      <main className='main'>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <div className='article'>
                <h1 className='article__title'>
                  معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش
                  رایگان
                </h1>
                <ArticlesHeader />
                <img
                  src='/images/blog/1.jpg'
                  alt='Article Cover'
                  className='article__banner w-100'
                />
                <ArticleScore />
                <p className='article__paragraph paragraph'>
                  جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند
                  است که به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها،
                  اپلیکیشن‌ها و وب اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از
                  یادگیری html و css معمولاً باید آموزش جاوا اسکریپت را نیز فرا
                  بگیرید. . چرا که این زبان تکمیل‌کننده html و css بوده و در
                  چنین شرایطی موقعیت‌های شغلی بیشتر را در اختیار خواهید داشت و
                  همچنین می‌توانید پروژه‌های گسترده‌تری را انجام دهید. در حال
                  حاضر با وجود منابع رایگان موجود در وب شما به راحتی می‌توانید
                  زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به همین واسطه
                  در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
                  برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که
                  بهترین سایت آموزش جاوا اسکریپت کدام است.
                </p>
                <ArticleRead />
                <img
                  src='/images/blog/2.jpg'
                  alt='Article Image'
                  className='article__seconadary-banner'
                />
                <ArticleSection />
                <ArticleSection />
                <ArticleSection />
                <ArticleSocialMedia />
                <div className='suggestion-articles'>
                  <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                      <ArticleSuggestion />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ArticleSuggestion />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ArticleSuggestion />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <Comments />
              </div>
            </div>
            <div className='col-4'>
              <div className='courses-info'>
                <div className='course-info'>
                  <ArticleRatedCourses />
                </div>
                <div className='course-info'>
                  <FastLinks
                    title='دسترسی سریع'
                    links={[
                      "صفحه اصلی",
                      "فرانت اند",
                      "امنیت",
                      "پایتون",
                      "مهارت های نرم افزاری",
                    ]}
                  />
                </div>
                <div className='course-info'>
                  <FastLinks
                    title='مقاله های جدید'
                    links={[
                      "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                      "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                      "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                      "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                      "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                      "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                      "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
                    ]}
                  />
                </div>
                <div className='course-info'>
                  <FastLinks
                    title='دسته بندی مفالات'
                    links={[
                      "صفحه اصلی",
                      "فرانت اند",
                      "امنیت",
                      "پایتون",
                      "مهارت های نرم افزاری",
                    ]}
                  />
                </div>
                <div className='course-info'>
                  <FastLinks
                    title='دوره های جدید'
                    links={[
                      "صفحه اصلی",
                      "فرانت اند",
                      "امنیت",
                      "پایتون",
                      "مهارت های نرم افزاری",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
