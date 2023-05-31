import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pgination/Pagination";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Sortbar from "../../Components/Sortbar/Sortbar";
import Button from "../../Components/Form/Button/Button";
export default function Courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [showCourse, setShowCourse] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [layoutData, setLayoutData] = useState("column");
  useEffect(() => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => res.json())
      .then((data) => {
        setCoursesData(data);
        setOrderedCourses(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "تمامی دوره ها", href: "courses/1" },
        ]}
      />
      <section className='courses'>
        <div className='container'>
          <Sortbar
            setOrderedData={setOrderedCourses}
            allData={coursesData}
            setLayoutData={setLayoutData}
            page={"course"}
          />
          <div className='courses-content'>
            <div className='container'>
              <div className='row'>
                {showCourse.length ? (
                  <>
                    {showCourse.map((course) => (
                      <CourseBox
                        key={course._id}
                        title={course.name}
                        price={course.price}
                        teacher={course.creator}
                        student={course.registers}
                        link={course.shortName}
                        rate={course.courseAverageScore}
                        layout={layoutData}
                        desc={course.description}
                        cover={course.cover}
                      />
                    ))}
                  </>
                ) : (
                  <div className='alert alert-warning d-flex justify-content-between align-items-center'>
                    <h2>دوره ای یافت نشد</h2>
                    <Button
                      className='alert-button'
                      onClick={() => setOrderedCourses(coursesData)}>
                      بازگشت
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Pagination
            items={orderedCourses}
            itemCount={3}
            pathName={`/courses`}
            setShowCourse={setShowCourse}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
