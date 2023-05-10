import React from 'react'
import './FastLinks.css'
export default function ArticleFastLinks({title,links}) {
  return (
    <>
      <span class='course-info__courses-title'>{title}</span>
      <ul class='sidebar-articles__list'>
        {links.map((linksItem, index) => (
          <li class='sidebar-articles__item' key={index}>
            <i class='fas fa-angle-left sidebar-articles__icon'></i>
            <a href='#' class='sidebar-articles__link'>
              {linksItem}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
