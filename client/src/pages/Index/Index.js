import React from "react";
import Header from '../../Components/Header/Header'
import "./Index.css";
import LastCourses from '../../Components/LastCourses/LastCourses'
import AboutUs from '../../Components/AboutUs/AboutUs'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import PreSellCourses from "../../Components/PreSellCourses/PreSellCourses";
import Articles from "../../Components/Articles/Articles";
import Footer from '../../Components/Footer/Footer'
export default function Index() {
  return (
    <>
      <Header />
      <LastCourses/>
      <AboutUs/>
      <PopularCourses/>
      <PreSellCourses/>
      <Articles/>
      <Footer/>
    </>
  );
}
