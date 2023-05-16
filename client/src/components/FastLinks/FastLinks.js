import React from "react";
import "./FastLinks.css";
import Button from "../Form/Button/Button";
export default function ArticleFastLinks({ title, links }) {
  return (
    <>
      <span className='course-info__courses-title'>{title}</span>
      <ul className='sidebar-articles__list'>
        {links.map((linksItem, index) => (
          <li className='sidebar-articles__item' key={index}>
            <i className='fas fa-angle-left sidebar-articles__icon'></i>
            <Button href='#' className='sidebar-articles__link'>
              {linksItem}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
