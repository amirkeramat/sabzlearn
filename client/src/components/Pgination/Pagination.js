import React, { useEffect, useState } from "react";
import "./Pagination.css";
import { useParams } from "react-router-dom";
import Button from "../Form/Button/Button";
export default function Pagination({
  items,
  itemCount,
  pathName,
  setShowCourse,
}) {
  const [pageCount, setPageCount] = useState(null);
  const { pageNumber } = useParams();
  useEffect(() => {
    let endIndex = itemCount * pageNumber;
    let startIndex = endIndex - itemCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShowCourse(paginatedItems);

    let pagesNumber = Math.ceil(items.length / itemCount);
    setPageCount(pagesNumber);
  }, [pageNumber, items]);
  return (
    <div className='courses-pagination'>
      <ul className='courses__pagination-list'>
        <li className='courses__pagination-item'>
          <Button  to={`${pathName}/${Number(pageNumber) - 1}`} className='courses__pagination-link'>
            <i className='fas fa-long-arrow-alt-right courses__pagination-icon'></i>
          </Button>
        </li>
        {Array(pageCount)
          .fill(0)
          .map((value, index) => (
            <li key={index + 1} className='courses__pagination-item'>
              <Button
                to={`${pathName}/${index +1}`}
                className={
                  index + 1 === Number(pageNumber)
                    ? "courses__pagination-link courses__pagination-link--active"
                    : "courses__pagination-link"
                }>
                {index + 1}
              </Button>
            </li>
          ))}
        {/*         
        <li className='courses__pagination-item'>
          <Button href='#' className='courses__pagination-link'>
            2
          </Button>
        </li>
        <li className='courses__pagination-item'>
          <Button
            href='#'
            className='courses__pagination-link courses__pagination-link--active'>
            3
          </Button>
        </li> */}
        <li className='courses__pagination-item'>
          <Button
            to={`${pathName}/${Number(pageNumber) + 1}`}
            className='courses__pagination-link'>
            <i className='fas fa-long-arrow-alt-left courses__pagination-icon'></i>
          </Button>
        </li>
      </ul>
    </div>
  );
}
