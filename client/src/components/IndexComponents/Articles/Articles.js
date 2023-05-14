import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Articels.css";
export default function Articles() {
  return (
    <section className='articles'>
      <div className='container'>
        <div className='articles-header'>
          <SectionHeader
            title='جدیدترین مقاله ها'
            desc='پیش به سوی ارتقای دانش'
            btnTitle='تمامی مقاله ها'
          />
          <div className='articles__content'>
            <div className='row'>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
