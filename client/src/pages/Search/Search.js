import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import Sortbar from "../../Components/Sortbar/Sortbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import ArticleCard from "../../Components/IndexComponents/ArticleCard/ArticleCard";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { useParams } from "react-router-dom";
export default function Search() {
  const [coursesData, setCoursesData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);
  const [orderedData,setOrderedData] = useState([])
  const [layoutData,setLayoutData] = useState('column')
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/v1/search/${params.searchValue}`)
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCoursesData(data.allResultCourses);
        setOrderedData(data.allResultCourses);
        setArticlesData(data.allResultArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "تمامی دوره ها", href: "courses/1" },
        ]}
      />
      {coursesData.length ? (
        <section className='courses'>
          <div className='container'>
            <Sortbar
              setOrderedData={setOrderedData}
              allData={coursesData}
              setLayoutData={setLayoutData}
            />
            <div className='courses-content'>
              <div className='container'>
                <div className='row'>
                  {orderedData.map((course) => (
                    <CourseBox
                      key={course._id}
                      title={course.name}
                      price={course.price}
                      teacher='امیر کرامت'
                      student={course.registers}
                      link={course.shortName}
                      rate={course.courseAverageScore}
                      layout={layoutData}
                      desc={course.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className='courses'>
          <div className='container'>
            <div className='alert alert-warning'>دوره ای وجود ندارد</div>
          </div>
        </section>
      )}
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "مقاله ها", href: "all-articles/1" },
        ]}
      />
      {articlesData.length ? (
        <section className='courses'>
          <div className='container'>
            <div className='courses-content'>
              <div className='container'>
                <div className='row'>
                  {articlesData.map((article) => (
                    <ArticleCard
                      key={article._id}
                      title={article.title}
                      link={article.shortName}
                      animated={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className='courses'>
          <div className='container'>
            <div className='alert alert-warning'>مقاله ای وجود ندارد</div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
