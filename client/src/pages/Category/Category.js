import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Category.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pgination/Pagination";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import SearchBox from "../../Components/searchBox/SearchBox";
import Sortbar from "../../Components/Sortbar/Sortbar";
export default function Category() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [coursesData, setCoursesData] = useState([]);
  const [showCourse, setShowCourse] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [layoutData, setLayoutData] = useState("column");
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
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
  return (
    <div>
      <Topbar />
      <Navbar />
      <section className='courses'>
        <div className='container'>
          {coursesData.length ? (
            <Sortbar
              setOrderedData={setOrderedCourses}
              allData={coursesData}
              setLayoutData={setLayoutData}
              orderedCourses={orderedCourses}
              page={"course"}
            />
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
                      desc={courseData.description}
                      layout={layoutData}
                      cover={courseData.cover}
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
              setShow={setShowCourse}
            />
          ) : null}
        </div>
      </section>

      <Footer />
    </div>
  );
}
