import React, { useState, useEffect } from "react";
import "./Sortbar.css";
import SearchBox from "../searchBox/SearchBox";
export default function Sortbar({ setOrderedData, allData, orderedCourses,setLayoutData,page }) {
  const [status, setStatus] = useState("default");
  const [orderShow, setOrderShow] = useState("مرتب سازی پیش فرض");
  const [layout, setLayout] = useState("column");
  const onClickHandler = (title, status) => {
    setOrderShow(title);
    setStatus(status);
  };

  const CourseOrder = ()=> {
    return (
      <ul className='courses-top-bar__selection-list'>
        <li
          className='courses-top-bar__selection-item courses-top-bar__selection-item--active'
          onClick={() => onClickHandler("مراب سازی پیش فرض", "default")}>
          مرتب سازی پیش فرض
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی رایگان", "free")}>
          مربت سازی بر اساس رایگان
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی پولی", "money")}>
          مربت سازی بر اساس پولی
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی اولین", "first")}>
          مربت سازی بر اساس اولین
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی آخرین", "last")}>
          مربت سازی بر اساس آخرین
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی ارزان ترین", "cheap")}>
          مربت سازی بر اساس ارزان ترین
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی گران ترین", "expensive")}>
          مربت سازی بر اساس گران ترین
        </li>
      </ul>
    );
  }

  const ArticleOrder = ()=>{
    return (
      <ul className='courses-top-bar__selection-list'>
        <li
          className='courses-top-bar__selection-item courses-top-bar__selection-item--active'
          onClick={() => onClickHandler("مراب سازی پیش فرض", "default")}>
          مرتب سازی پیش فرض
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی اولین", "first")}>
          مربت سازی بر اساس اولین
        </li>
        <li
          className='courses-top-bar__selection-item'
          onClick={() => onClickHandler("مرتب سازی آخرین", "last")}>
          مربت سازی بر اساس آخرین
        </li>
      </ul>
    );
  }





  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = allData.filter((course) => course.price === 0);
        setOrderedData(freeCourses);
        break;
      }
      case "money": {
        const notFreeCourses = allData.filter((course) => course.price !== 0);
        setOrderedData(notFreeCourses);
        break;
      }
      case "first": {
        setOrderedData(allData);
        break;
      }
      case "last": {
        const lastCourses = allData.slice().reverse();
        setOrderedData(lastCourses);
        break;
      }
      case "cheap": {
        const sortCheapCourses = allData.sort((a, b) => {
          return a.price - b.price;
        });
        setOrderedData(sortCheapCourses);
        break;
      }
      case "expensive": {
        const sortExpensiveCourses = allData.sort((a, b) => {
          return b.price - a.price;
        });
        setOrderedData(sortExpensiveCourses);
        break;
      }

      default: {
        setOrderedData(allData);
      }
    }
  }, [status]);
  const layoutHandler = (value) => {
    setLayout(value);
    setLayoutData(value);
  };
  return (
    <div className='courses-top-bar'>
      <div className='courses-top-bar__right'>
        <div
          onClick={() => layoutHandler("column")}
          className={`courses-top-bar__row-btn ${
            layout === "column" && "courses-top-bar__icon--active"
          }`}>
          <i className='fas fa-border-all courses-top-bar__icon'></i>
        </div>

        <div
          onClick={() => layoutHandler("row")}
          className={`courses-top-bar__column-btn  ${
            layout === "row" && "courses-top-bar__icon--active"
          }`}>
          <i className='fas fa-align-left courses-top-bar__icon'></i>
        </div>
        <div className='courses-top-bar__selection'>
          <span className='courses-top-bar__selection-title'>
            {orderShow}
            <i className='fas fa-angle-down courses-top-bar__selection-icon'></i>
          </span>
          {page === "course" ? <CourseOrder /> : <ArticleOrder />}
        </div>
      </div>

      <div className='courses-top-bar__left'>
        <SearchBox allData={allData} setData={setOrderedData} />
      </div>
    </div>
  );
}
