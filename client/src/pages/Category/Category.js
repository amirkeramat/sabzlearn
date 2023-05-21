import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Category.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pgination/Pagination";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Category() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [coursesData, setCoursesData] = useState([]);
  const [showCourse, setShowCourse] = useState([]);
  const [status, setStatus] = useState("default");
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [orderShow, setOrderShow] = useState("مرتب سازی پیش فرض");
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
        setOrderedCourses(data);
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

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = coursesData.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "money": {
        const notFreeCourses = coursesData.filter(
          (course) => course.price !== 0
        );
        setOrderedCourses(notFreeCourses);
        break;
      }
      case "first": {
        setOrderedCourses(coursesData);
        break;
      }
      case "last": {
        const lastCourses = coursesData.slice().reverse();
        setOrderedCourses(lastCourses);
        break;
      }
      case "cheap": {
        const sortCheapCourses = coursesData.sort((a, b) => {
          return a.price - b.price;
        });
        setOrderedCourses(sortCheapCourses);
        break;
      }
      case "expensive": {
        const sortExpensiveCourses = coursesData.sort((a, b) => {
          return b.price - a.price;
        });
        setOrderedCourses(sortExpensiveCourses);
        break;
      }

      default: {
        setOrderedCourses(coursesData);
      }
    }
  }, [status]);
  return (
    <div>
      <Topbar />
      <Navbar />
      <section className='courses'>
        <div className='container'>
          {coursesData.length ? (
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
                    {orderShow}
                    <i className='fas fa-angle-down courses-top-bar__selection-icon'></i>
                  </span>
                  <ul className='courses-top-bar__selection-list'>
                    <li
                      className='courses-top-bar__selection-item courses-top-bar__selection-item--active'
                      onClick={() => {
                        setOrderShow("مرتب سازی پیش فرض");
                        setStatus("default");
                      }}>
                      مرتب سازی پیش فرض
                    </li>
                    <li
                      className='courses-top-bar__selection-item'
                      onClick={() => {
                        setOrderShow("مرتب سازی رایگان");
                        setStatus("free");
                      }}>
                      مربت سازی بر اساس رایگان
                    </li>
                    <li
                      className='courses-top-bar__selection-item'
                      onClick={() => {
                        setOrderShow("مرتب سازی پولی");
                        setStatus("money");
                      }}>
                      مربت سازی بر اساس پولی
                    </li>
                    <li
                      className='courses-top-bar__selection-item'
                      onClick={() => {
                        setOrderShow("مرتب سازی اولین");
                        setStatus("first");
                      }}>
                      مربت سازی بر اساس اولین
                    </li>
                    <li
                      className='courses-top-bar__selection-item'
                      onClick={() => {
                        setOrderShow("مرتب سازی آخرین");
                        setStatus("last");
                      }}>
                      مربت سازی بر اساس آخرین
                    </li>
                    <li
                      className='courses-top-bar__selection-item'
                      onClick={() => {
                        setOrderShow("مرتب سازی ارزان ترین");
                        setStatus("cheap");
                      }}>
                      مربت سازی بر اساس ارزان ترین
                    </li>
                    <li
                      className='courses-top-bar__selection-item'
                      onClick={() => {
                        setOrderShow("مرتب سازی گران ترین");
                        setStatus("expensive");
                      }}>
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
          ) : null}

          <div className='courses-content'>
            <div className='container'>
              <div className='row'>
                {coursesData.length && orderedCourses.length ? (
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
              items={orderedCourses}
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
