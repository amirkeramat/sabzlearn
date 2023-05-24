import React , {useState,useEffect} from "react";
import "./LastCourses.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import CourseBox from "../../CourseBox/CourseBox";
export default function LastCourses() {
   const [latestCourses, setLatestCourses] = useState([]);
   useEffect(() => {
     fetch("http://localhost:4000/v1/courses/presell")
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setLatestCourses(data);
       });
   }, []);
  return (
    <div className='courses'>
      <div className='container'>
        <SectionHeader
          title='جدیدترین دوره ها'
          desc='سکوی پرتاپ شما به سمت موفقیت'
          btnTitle='تمامی دوره ها'
          btnHref='courses/1'
        />
        <div className='courses-content'>
          <div className='container'>
            <div className='row'>
              {latestCourses.length &&
                latestCourses.slice(0,3).map((product) => (
                  <CourseBox
                    title={product.name}
                    cover={product.cover}
                    teacher={product.teacher}
                    price={product.price}
                    student={product.creator}
                    link={product.shortName}
                    rate={product.courseAverageScore}
                    layout={'column'}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
