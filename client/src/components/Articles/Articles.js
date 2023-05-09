import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Articels.css";
export default function Articles() {
  return (
    <section class='articles'>
      <div class='container'>
        <div class='articles-header'>
          <SectionHeader
            title='جدیدترین مقاله ها'
            desc='پیش به سوی ارتقای دانش'
            btnTitle='تمامی مقاله ها'
          />
          <div class='articles__content'>
            <div class='row'>
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
