import React from "react";
import "./BreadCrumb.css";
import { Link } from "react-router-dom";
export default function BreadCrumb({ links }) {
  return (
    <section class='breadcrumb'>
      <div class='container'>
        <div class='breadcrumb__content'>
          <div class='breadcrumb__home-content-icon'>
            <i class='fas fa-home breadcrumb__home-icon'></i>
          </div>
          <ul class='breadcrumb__list'>
            {links.map((linkItem) => (
              <li className='breadcrumb__item' key={linkItem.id}>
                <Link className='breadcrumb__link' to={linkItem.to}>
                  {linkItem.title}
                  {linkItem.id !== 3 && (
                    <i class='fas fa-angle-left breadcrumb__icon'></i>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
