import React,{useContext, useEffect,useState} from "react";
import "./Comments.css";
import Button from '../Form/Button/Button'
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Comments() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate();
  const logOutHandler = ()=>{
    localStorage.removeItem('user')
    setInterval(()=>{
      navigate('/login')
    },3000)
  }
  return (
    <div className='comments'>
      <span className='comments__title'>دیدگاهتان را بنویسید</span>
      <span className='comments__text'>
        <Button href='#'>با {authContext.userInfos.name} وارد شده اید.</Button>
        <Button onClick={logOutHandler}  >خارج میشوید? </Button>
        بخش های موردنیاز علامت گذاری شده اند *
      </span>
      <div className='comments_content'>
        <span className='comments__content-title'>دیدگاه *</span>
        <textarea className='comments__content-textarea'></textarea>
      </div>
      <Button type='submit' className='comments__button'>
        فرستادن دیدگاه
      </Button>
    </div>
  );
}
