import React from "react";
import './ArticleRatedCourses.css'
import RatedCourse from "../../RatedCourse/RatedCourse";

export default function ArticleRatedCourses() {
  return (
    <>
      <span class='course-info__courses-title'>پر امتیازترین دوره ها</span>
      <ul class='course-info__courses-list'>
        <RatedCourse/>
        <RatedCourse/>
        <RatedCourse/>
        <RatedCourse/>
      </ul>
    </>
  );
}
