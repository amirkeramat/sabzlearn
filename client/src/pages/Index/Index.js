import React from "react";
import Header from '../../components/Header/Header'
import "./Index.css";
import LastCourses from '../../components/LastCourses/LastCourses'
import AboutUs from '../../components/AboutUsBox/AboutUsBox'
import PopularCourses from '../../components/PopularCourses/PopularCourses'
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
