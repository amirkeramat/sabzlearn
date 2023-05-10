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

      <section class='courses'>
        <div class='container'>
          <CategoryCoursesTopbar />
          <div class='courses-content'>
            <div class='container'>
              <div class='row'>
                <div class='col-4'>
                  <CourseBox />
                </div>
                <div class='col-4'>
                  <CourseBox />
                </div>
                <div class='col-4'>
                  <CourseBox />
                </div>
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
