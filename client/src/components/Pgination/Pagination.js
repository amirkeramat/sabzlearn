import React from "react";
import "./Pagination.css";
import Button from "../Form/Button/Button";
export default function Pagination() {
  return (
    <div className='courses-pagination'>
      <ul className='courses__pagination-list'>
        <li className='courses__pagination-item'>
          <Button href='#' className='courses__pagination-link'>
            <i className='fas fa-long-arrow-alt-right courses__pagination-icon'></i>
          </Button>
        </li>
        <li className='courses__pagination-item'>
          <Button href='#' className='courses__pagination-link'>
            1
          </Button>
        </li>
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
        </li>
        <li className='courses__pagination-item'>
          <Button href='#' className='courses__pagination-link'>
            <i className='fas fa-long-arrow-alt-left courses__pagination-icon'></i>
          </Button>
        </li>
      </ul>
    </div>
  );
}
