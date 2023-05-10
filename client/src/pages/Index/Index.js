import React from "react";
import Header from "../../Components/Header/Header";
import "./Index.css";
import LastCourses from "../../Components/IndexComponents/LastCourses/LastCourses";
import AboutUs from "../../Components/IndexComponents/AboutUs/AboutUs";
import PopularCourses from "../../Components/IndexComponents/PopularCourses/PopularCourses";
import PreSellCourses from "../../Components/IndexComponents/PreSellCourses/PreSellCourses";
import Articles from "../../Components/IndexComponents/Articles/Articles";
import Footer from "../../Components/Footer/Footer";
export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PreSellCourses />
      <Articles />
      <Footer />
    </>
  );
}
