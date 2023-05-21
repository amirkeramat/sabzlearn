import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Pagination from "../../Components/Pgination/Pagination";
import ArticleCard from "../../Components/IndexComponents/ArticleCard/ArticleCard";

export default function AllArticles() {
      const [coursesData, setCoursesData] = useState([]);
      const [showCourse, setShowCourse] = useState([]);
      useEffect(() => {
        fetch("http://localhost:4000/v1/courses")
          .then((res) => res.json())
          .then((data) => {
            setCoursesData(data);
          });
      }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "تمامی مقالات", href: "all-articles" },
        ]}
      />
      <section className='courses'>
        <div className='container'>
          <div className='courses-top-bar'>
            <div className='courses-top-bar__right'>
              <div className='courses-top-bar__row-btn courses-top-bar__icon--active'>
                <i className='fas fa-border-all courses-top-bar__icon'></i>
              </div>
              <div className='courses-top-bar__column-btn'>
                <i className='fas fa-align-left courses-top-bar__icon'></i>
              </div>

              <div className='courses-top-bar__selection'>
                <span className='courses-top-bar__selection-title'>
                  مرتب سازی پیش فرض
                  <i className='fas fa-angle-down courses-top-bar__selection-icon'></i>
                </span>
                <ul className='courses-top-bar__selection-list'>
                  <li className='courses-top-bar__selection-item courses-top-bar__selection-item--active'>
                    مرتب سازی پیش فرض
                  </li>
                  <li className='courses-top-bar__selection-item'>
                    مربت سازی بر اساس محبوبیت
                  </li>
                  <li className='courses-top-bar__selection-item'>
                    مربت سازی بر اساس امتیاز
                  </li>
                  <li className='courses-top-bar__selection-item'>
                    مربت سازی بر اساس آخرین
                  </li>
                  <li className='courses-top-bar__selection-item'>
                    مربت سازی بر اساس ارزان ترین
                  </li>
                  <li className='courses-top-bar__selection-item'>
                    مربت سازی بر اساس گران ترین
                  </li>
                </ul>
              </div>
            </div>

            <div className='courses-top-bar__left'>
              <form action='#' className='courses-top-bar__form'>
                <input
                  element='input'
                  type='text'
                  className='courses-top-bar__input'
                  placeholder='جستجوی دوره ...'
                />
                <i className='fas fa-search courses-top-bar__search-icon'></i>
              </form>
            </div>
          </div>{" "}
          <div className='courses-content'>
            <div className='container'>
              <div className='row'>
                {showCourse.map((course) => (
                  <ArticleCard
                    key={course._id}
                    title={course.name}
                    price={course.price}
                    teacher={course.creator}
                    student={course.registers}
                    link={course.shortName}
                    rate={course.courseAverageScore}
                    animated={false}
                  />
                ))}
              </div>
            </div>
          </div>
          <Pagination
            items={coursesData}
            itemCount={3}
            pathName={`/all-articles`}
            setShowCourse={setShowCourse}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
