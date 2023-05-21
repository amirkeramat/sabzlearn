import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Category.css";
import CategoryCoursesTopbar from "../../Components/CategoryCoursesTopbar/CategoryCoursesTopbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pgination/Pagination";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Category() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [coursesData, setCoursesData] = useState([]);
  const [showCourse,setShowCourse] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          console.log(res);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCoursesData(data);
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "کاربری با مشخصات وارد شده وجود ندارد",
          icon: "error",
          button: "خروج",
        }).then((value) => {
          navigate("/");
        });
      });
  }, [categoryName]);
  return (
    <div>
      <Topbar />
      <Navbar />
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
          </div>
          <div className='courses-content'>
            <div className='container'>
              <div className='row'>
                {coursesData.length ? (
                  showCourse.map((courseData) => (
                    <CourseBox
                      key={courseData._id}
                      title={courseData.name}
                      price={courseData.price}
                      teacher={courseData.creator}
                      student={courseData.registers}
                      link={courseData.shortName}
                      rate={courseData.courseAverageScore}
                    />
                  ))
                ) : (
                  <div className='alert alert-danger text-center'>
                    دوره ای وجود ندارد
                  </div>
                )}
              </div>
            </div>
          </div>
          {coursesData.length ? (
            <Pagination
              items={coursesData}
              itemCount={3}
              pathName={`/category-info/${categoryName}`}
              setShowCourse={setShowCourse}
            />
          ) : null}
        </div>
      </section>

      <Footer />
    </div>
  );
}
