import React from "react";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import CourseInfoHeader from "../../Components/SectionHeader/SectionHeader";
import CourseInfoMain from "../../Components/CourseInfoComponents/CourseInfoMain/CourseInfoMain";
import "./CourseInfo.css";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

export default function CourseInfo() {
  return (
    <>
      <header>
        <Topbar />
        <Navbar />
      </header>
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "جزیات دوره", href: "courses" },
          { id: 3, title: "مقایسه js  و  vu", href: "course-info/vu" },
        ]}
      />
      <CourseInfoHeader />
      <CourseInfoMain />
      <Footer />
    </>
  );
}
