import React from "react";
import "./BreadCrumb.css";
import { Link } from "react-router-dom";
import Button from "../Form/Button/Button";
export default function BreadCrumb({ links }) {
  return (
    <section className='breadcrumb'>
      <div className='container'>
        <div className='breadcrumb__content'>
          <div className='breadcrumb__home-content-icon'>
            <i className='fas fa-home breadcrumb__home-icon'></i>
          </div>
          <ul className='breadcrumb__list'>
            {links.map((linkItem) => (
              <li className='breadcrumb__item' key={linkItem.id}>
                <Button className='breadcrumb__link' to={`/${linkItem.href}`}>
                  {linkItem.title}
                  {linkItem.id !== links.length && (
                    <i className='fas fa-angle-left breadcrumb__icon'></i>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
