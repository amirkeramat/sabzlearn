import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import CourseInfoHeader from "../../Components/CourseInfoComponents/CourseInfoHeader/CourseInfoHeader";
import CourseInfoMain from "../../Components/CourseInfoComponents/CourseInfoMain/CourseInfoMain";
import "./CourseInfo.css";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { useParams } from "react-router-dom";
export default function CourseInfo() {
  const [courseInfoData,setCourseInfoData]=useState({})
  const [categoryData,setCategoryData] = useState({})
  const [relatedCourses,setRelatedCourses] = useState([])
  const { courseName } = useParams();
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user")).token;

    fetch(`http://localhost:4000/v1/courses/${courseName}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).then((res) =>{
      if(!res.ok){
        return res.text().then(text=>{
          throw new Error(text)
        })
      }else{
        return res.json()
      }
      
    }).then(courseData=>{
      setCourseInfoData(courseData)
      setCategoryData(courseData.categoryID)
      console.log(courseData);
    }).catch(err=>{
      alert(err.message)
    })

    fetch(`http://localhost:4000/v1/courses/related/${courseName}`,{
      method:'GET'
    }).then(res=>{
      if(!res.ok){
        return res.text().then(text=>{
          throw new Error(text)
        })
      }else{
        return res.json()
      }
    }).then(data=>{
      console.log(data);
      setRelatedCourses(data)
    }).catch(err=>{
      alert(err)
    })
  }, []);
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
          {
            id: 3,
            title: `${courseInfoData.name}`,
            href: `course-info/${courseInfoData.name}`,
          },
        ]}
      />
      ‍‍‍‍‍‍‍‍
      <CourseInfoHeader
        title={courseInfoData.name}
        desc={courseInfoData.description}
        link={categoryData.title}
        cover={courseInfoData.cover}
      />
      <CourseInfoMain {...courseInfoData} relatedCourses={relatedCourses} />
      <Footer />
    </>
  );
}
