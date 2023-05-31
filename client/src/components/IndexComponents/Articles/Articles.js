import React, { useEffect, useState } from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Articles.css";
export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <section className='articles'>
      <div className='container'>
        <div className='articles-header'>
          <SectionHeader
            title='جدیدترین مقاله ها'
            desc='پیش به سوی ارتقای دانش'
            btnTitle='تمامی مقاله ها'
            btnHref='all-articles/1'
          />
          <div className='articles__content'>
            <div className='row'>
              {articles.slice(0, 3).map((article) => (
                <ArticleCard
                  key={article._id}
                  title={article.title}
                  desc={article.description}
                  cover={article.cover}
                  link={article.shortName}
                  animated={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
