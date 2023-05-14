import React from "react";
import "./AboutUsBox.css";
export default function AboutUsBox({ title, desc, icon, aos }) {
  return (
    <div className='col-6'>
      <div
        className='about-us__box'
        data-aos={aos}
        data-aos-duration='3000'
        data-aos-delay='100'>
        <div className='about-us__box-right'>
          <i className={`${icon} about-us__icon`}></i>
        </div>
        <div className='about-us__box-left'>
          <span className='about-us__box-title'>{title}</span>
          <span className='about-us__box-text'>{desc}</span>
        </div>
      </div>
    </div>
  );
}
