import React from "react";
import Comments from "../../Components/Comments/Comments";

import "./CommentsTextArea.css";
import Button from "../Form/Button/Button";

export default function CommentsTextArea({ comments, userInfos, isLoggedIn }) {
  console.log(comments.length);
  return (
    <div className='comments'>
      <div className='comments__header'>
        <div className='comments__header-icon-content'>
          <i className='comments__header-icon far fa-comment'></i>
        </div>
        <span className='comments__header-title'>نظرات</span>
      </div>
      <div className='comments__content'>
        {comments.length === 0 ?(
          <div className='alert alert-warning'>
            هنوز کامنتی برای این دوره ثبت نشده
          </div>
        ) : (
          <>
            {comments.map((comment) => (
              <div key={comment._id} className='comments__item'>
                <div className='comments__question'>
                  <div className='comments__question-header'>
                    <div className='comments__question-header-right'>
                      <span className='comments__question-name comment-name'>
                        {comment.creator}
                      </span>
                      <span className='comments__question-status comment-status'>
                        {/* {comment.creator.role === "ADMIN" ? "مدیر" : "کاربر"} */}
                      </span>
                      <span className='comments__question-date comment-date'>
                        {comment.createdAt.slice(0, 10)}
                      </span>
                    </div>
                    <div className='comments__question-header-left'>
                      <a
                        className='comments__question-header-link comment-link'
                        href='#'>
                        پاسخ
                      </a>
                    </div>
                  </div>
                  <div className='comments__question-text'>
                    <p className='comments__question-paragraph comment-paragraph'>
                      {comment.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className='comments__pagantion'>
              <ul className='comments__pagantion-list'>
                <li className='comments__pagantion-item'>
                  <a href='#' className='comments__pagantion-link'>
                    <i className='fas fa-long-arrow-alt-right comments__pagantion-icon'></i>
                  </a>
                </li>
                <li className='comments__pagantion-item'>
                  <a href='#' className='comments__pagantion-link'>
                    1
                  </a>
                </li>
                <li className='comments__pagantion-item'>
                  <a href='#' className='comments__pagantion-link'>
                    2
                  </a>
                </li>
                <li className='comments__pagantion-item'>
                  <a
                    href='#'
                    className='comments__pagantion-link comments__pagantion-link--active'>
                    3
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {isLoggedIn ? (
        <>
          <div className='comments__rules'>
            <span className='comments__rules-title'>قوانین ثبت دیدگاه</span>
            <span className='comments__rules-item'>
              <i className='fas fa-check comments__rules-icon'></i>
              اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش
              انلاین استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند شد
            </span>
            <span className='comments__rules-item'>
              <i className='fas fa-check comments__rules-icon'></i>
              دیدگاه های نامرتبط به دوره تایید نخواهد شد.
            </span>
            <span className='comments__rules-item'>
              <i className='fas fa-check comments__rules-icon'></i>
              سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.
            </span>
            <span className='comments__rules-item'>
              <i className='fas fa-check comments__rules-icon'></i>
              از درج دیدگاه های تکراری پرهیز نمایید.
            </span>
          </div>
          <div className='comments__respond'>
            <Comments />
          </div>
        </>
      ) : (
        <div className='comments__respond'>
          برای ثبت نظر باید وارد سایت شوید
          <Button to='/login' className='comments__respond-btn'>
            ورود به سایت
          </Button>
        </div>
      )}
    </div>
  );
}
