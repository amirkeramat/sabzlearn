import React from "react";
import CourseInfoRegister from "../CourseInfoRegister/CourseInfoRegister";
import CourseInfoTotal from "../CourseInfoTotal/CourseInfoTotal";
import './CourseInfoMain.css'
import CourseInfoLink from "../CourseInfoLink/CourseInfoLink";
import CourseInfoTopic from '../CourseInfoTopic/CourseInfoTopic'
import CourseInfoRelatedCourses from '../CourseInfoRelatedCourses/CourseInfoRelatedCourses'
export default function CourseInfoMain() {
  return (
    <main class='main'>
      <div class='container'>
        <div class='row'>
          <div className='mainCourse-right col-8'></div>
          <div className='mainCourse-left col-4'>
            <div class='courses-info'>
              <div class='course-info'>
                <CourseInfoRegister />
              </div>
              <div class='course-info'>
                <CourseInfoTotal/>
              </div>
              <div class='course-info'>
                <CourseInfoLink/>
              </div>
              <div class='course-info'>
                <CourseInfoTopic/>
              </div>
              <div class='course-info'>
                <CourseInfoRelatedCourses/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
