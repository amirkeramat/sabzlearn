import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Pagination from "../../Components/Pgination/Pagination";
import ArticleCard from "../../Components/IndexComponents/ArticleCard/ArticleCard";
import Sortbar from "../../Components/Sortbar/Sortbar";
import Button from "../../Components/Form/Button/Button";
import "./AllArticles.css";
export default function AllArticles() {
  const [articlesData, setArticlesData] = useState([]);
  const [showCourse, setShowCourse] = useState([]);
  const [orderedData, setOrderData] = useState([]);
  const [layoutData, setLayoutData] = useState("column");
  useEffect(() => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => res.json())
      .then((data) => {
        setArticlesData(data);
        setOrderData(data);
      });
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", href: "" },
          { id: 2, title: "تمامی مقالات", href: "all-articles/1" },
        ]}
      />
      <section className='courses'>
        <div className='container'>
          <Sortbar
            setOrderedData={setOrderData}
            allData={articlesData}
            setLayoutData={setLayoutData}
            page={"article"}
          />
          <div className='courses-content'>
            <div className='container'>
              <div className='row'>
                {showCourse.length ? (
                  <>
                    {showCourse.map((article) => (
                      <ArticleCard
                        key={article._id}
                        title={article.name}
                        link={article.shortName}
                        animated={false}
                      />
                    ))}
                  </>
                ) : (
                  <div className='courses-content'>
                    <div className='container'>
                      <div className='alert alert-warning d-flex justify-content-between align-items-center'>
                        <h2>مقالاتی برای شما پیدا نشد</h2>
                        <Button
                          className='alert-button'
                          onClick={() => setOrderData(articlesData)}>
                          بازگشت
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Pagination
            items={orderedData}
            itemCount={3}
            pathName={`/all-articles`}
            setShow={setShowCourse}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
