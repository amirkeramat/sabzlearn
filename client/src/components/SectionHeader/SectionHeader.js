import React from "react";
import "./SectionHeader.css";
import Button from "../Form/Button/Button";
export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className='courses-header'>
      <div className='courses-header__right'>
        <span className='courses-header__title title'>{title}</span>
        <span className='courses-header__text'>{desc}</span>
      </div>
      {btnTitle ? (
        <div className='courses-header__left'>
          <Button to={`/${btnHref}`} className='courses-header__link'>
            {btnTitle}
            <i className='fas fa-arrow-left courses-header__icon'></i>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
