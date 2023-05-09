import React from "react";
import Header from "../../Components/Header/Header";

import "./Index.css";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses/>
      <AboutUs/>
      <PopularCourses/>
    </>
  );
}
