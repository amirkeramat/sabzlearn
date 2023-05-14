import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CategoryCoursesTopbar from "../../Components/CategoryCoursesTopbar/CategoryCoursesTopbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pgination/Pagination";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
export default function Courses() {
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
                <CourseBox />

                <CourseBox />

                <CourseBox />
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </section>

      <Footer />
    </div>
  );
}
