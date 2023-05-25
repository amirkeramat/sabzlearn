import React, { useEffect, useState, memo } from "react";

import "./Topbar.css";
import Button from "../Form/Button/Button";

export default memo(function Topbar() {
  const [allTopbarLinks, setAllTopbarLinks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/menus/topbar")
      .then((res) => res.json())
      .then((data) => {
        setAllTopbarLinks(data);
      });
  }, []);
  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };
  return (
    <div className='top-bar position-relative'>
      <div className='container-fluid '>
        <div className='top-bar__content'>
          <div className={`top-bar__right`}>
            <ul className='top-bar__menu flex-column flex-md-row'>
              {getRandomItemsFromArray(allTopbarLinks, 5).map((link) => (
                <li key={link._id} className='top-bar__item'>
                  <Button to={link.href} className='top-bar__link'>
                    {link.title}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className='top-bar__left'>
            <div className='top-bar__email'>
              <Button href='#' className='top-bar__email-text top-bar__link'>
                sabzlearn@gmail.com
              </Button>
              <i className='fas fa-envelope top-bar__email-icon'></i>
            </div>
            <div className='top-bar__phone'>
              <Button href='#' className='top-bar__phone-text top-bar__link'>
                09921558293
              </Button>
              <i className='fas fa-phone top-bar__phone-icon'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
