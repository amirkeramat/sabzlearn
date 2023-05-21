import React, { useState } from "react";
import Comments from "../../Components/Comments/Comments";
import Pagination from '../../Components/Pgination/Pagination'
import "./CommentsTextArea.css";
import Button from "../Form/Button/Button";

export default function CommentsTextArea({ commentsData, isLoggedIn }) {
  const [showCourse,setShowCourse] = useState([])
  return (
    <div className='comments'>
      <div className='comments__header'>
        <div className='comments__header-icon-content'>
          <i className='comments__header-icon far fa-comment'></i>
        </div>
        <span className='comments__header-title'>نظرات</span>
      </div>
      <div className='comments__content'>
        {commentsData.length === 0 && (
          <div className='alert alert-warning'>
            هنوز کامنتی برای این دوره ثبت نشده
          </div>
        )}
        {commentsData.length !== 0 && (
          <>
            {commentsData.map((comment) => (
              <div key={comment._id} className='comments__item'>
                <div className='comments__question'>
                  <div className='comments__question-header'>
                    <div className='comments__question-header-right'>
                      <span className='comments__question-name comment-name'>
                        {comment.creator.name}
                      </span>
                      <span className='comments__question-status comment-status'>
                        {comment.creator.role === "ADMIN" ? "مدیر" : "کاربر"}
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
                {comment.answerContent !== null && (
                  <div className='comments__question-text'>
                    <h6>جواب:</h6>
                    <p className='comments__question-paragraph comment-paragraph'>
                      {comment.answerContent.body}
                    </p>
                  </div>
                )}
              </div>
            ))}
            {/* <Pagination
              items={commentsData}
              itemCount={3}
              setShowCourse={setShowCourse}
            /> */}
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
