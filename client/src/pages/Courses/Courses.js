import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CategoryCoursesTopbar from "../../Components/CategoryCoursesTopbar/CategoryCoursesTopbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pgination/Pagination";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
export default function Courses() {
  const [coursesData,setCoursesData] = useState([])
  const [showCourse,setShowCourse] =useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/v1/courses").then(res=>res.json()).then(data=>{
      setCoursesData(data)
    })
  },[])
  return (
    <div>
      <Topbar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "تمامی دوره ها", href: "courses" },
        ]}
      />
      <section className='courses'>
        <div className='container'>
          <CategoryCoursesTopbar />
          <div className='courses-content'>
            <div className='container'>
              <div className='row'>
                {showCourse.map((course) => (
                  <CourseBox
                    key={course._id}
                    title={course.name}
                    price={course.price}
                    teacher={course.creator}
                    student={course.registers}
                    link={course.shortName}
                    rate={course.courseAverageScore}
                  />
                ))}
              </div>
            </div>
          </div>
          <Pagination
            items={coursesData}
            itemCount={3}
            pathName={`/courses`}
            setShowCourse={setShowCourse}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
