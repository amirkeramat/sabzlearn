import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Category.css";
import CategoryCoursesTopbar from "../../Components/CategoryCoursesTopbar/CategoryCoursesTopbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pgination/Pagination";

export default function Category() {
  return (
    <div>
      <Topbar />
      <Navbar />

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
