import React, { useEffect } from "react";
import "./ArticleCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Form/Button/Button";
export default function ArticleCard({ cover, title, desc, link, animated }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {animated ? (
        <div className='col-4'>
          <div
            className='article-card'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-delay='500'
            data-aos-duration='2000'>
            <div className='article-card__header'>
              <Button href='#' className='article-card__link-img'>
                <img
                  src='/images/blog/3.jpg'
                  className='article-card__img'
                  alt='Article Cover'
                />
              </Button>
            </div>
            <div className='article-card__content'>
              <Button href='#' className='article-card__link'>
                {title}
              </Button>
              <p className='article-card__text'>{desc}</p>
              <Button
                to={`/article-info/${link}`}
                className='article-card__btn'>
                بیشتر بخوانید
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className='col-4'>
          <div className='article-card'>
            <div className='article-card__header'>
              <Button href='#' className='article-card__link-img'>
                <img
                  src='/images/blog/3.jpg'
                  className='article-card__img'
                  alt='Article Cover'
                />
              </Button>
            </div>
            <div className='article-card__content'>
              <Button href='#' className='article-card__link'>
                {title}
              </Button>
              <p className='article-card__text'>{desc}</p>
              <Button
                to={`/article-info/${link}`}
                className='article-card__btn'>
                بیشتر بخوانید
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
