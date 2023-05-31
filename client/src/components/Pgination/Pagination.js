import React, { useEffect, useState } from "react";
import "./Pagination.css";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Form/Button/Button";
export default function Pagination({ items, itemCount, pathName, setShow }) {
  const [pageCount, setPageCount] = useState(null);
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    let endIndex = itemCount * pageNumber;
    let startIndex = endIndex - itemCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShow(paginatedItems);

    let pagesNumber = Math.ceil(items.length / itemCount);
    setPageCount(pagesNumber);
  }, [pageNumber, items]);

  const backClickHandler = () => {
    if (Number(pageNumber) === 1) {
      navigate(`${pathName}/${1}`);
    } else {
      navigate(`${pathName}/${Number(pageNumber) - 1}`);
    }
   
  };
  const forwardClickHandler = ()=>{
 if (Number(pageNumber) === pageCount) {
   navigate(`${pathName}/${Number(pageNumber)}`);
 } else {
   navigate(`${pathName}/${Number(pageNumber) + 1}`);
 }
  }

  return (
    <>
      {items.length ? (
        <div className='courses-pagination'>
          <ul className='courses__pagination-list'>
            <li className='courses__pagination-item'>
              <Button
                onClick={backClickHandler}
                className='courses__pagination-link'>
                <i className='fas fa-long-arrow-alt-right courses__pagination-icon'></i>
              </Button>
            </li>
            {Array(pageCount)
              .fill(0)
              .map((value, index) => (
                <li key={index + 1} className='courses__pagination-item'>
                  <Button
                    to={`${pathName}/${index + 1}`}
                    className={
                      index + 1 === Number(pageNumber)
                        ? "courses__pagination-link courses__pagination-link--active"
                        : "courses__pagination-link"
                    }>
                    {index + 1}
                  </Button>
                </li>
              ))}
            <li className='courses__pagination-item'>
              <Button
                onClick={forwardClickHandler}
                className='courses__pagination-link'>
                <i className='fas fa-long-arrow-alt-left courses__pagination-icon'></i>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
