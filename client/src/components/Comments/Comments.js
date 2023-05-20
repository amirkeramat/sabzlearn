import React, { useContext, useEffect, useState } from "react";
import "./Comments.css";
import Button from "../Form/Button/Button";
import AuthContext from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { commentSchema } from "../../Validator/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";

export default function Comments() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const param = useParams();
  const logOutHandler = () => {
    authContext.logout();
    navigate("/login");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentSchema),
    mode: "all",
  });

  const formSubmit = (value) => {
    fetch("http://localhost:4000/v1/comments", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authContext.token}`,
      },
      body: JSON.stringify({
        body: value.comment,
        courseShortName: param.courseName,
        score: value.score,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        console.log(result);
        swal({
          title: "دیگاه با موفقیت ثبت گردید",
          icon: "success",
          button: "خروج",
        });
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "مشکلی پیش آمده است دوباره سعی کنید",
          icon: "error",
          button: "خروج",
        });
      });
  };
  return (
    <>
      {authContext.userInfos && (
        <div className='comments'>
          <span className='comments__title'>دیدگاهتان را بنویسید</span>
          <span className='comments__text'>
            <Button href='#'>
              با {authContext.userInfos.name} وارد شده اید.
            </Button>
            <Button className='comments__button' onClick={logOutHandler}>
              خارج میشوید?{" "}
            </Button>
            بخش های موردنیاز علامت گذاری شده اند *
          </span>
          <div className='comments_content'>
            <span className='comments__content-title'>دیدگاه *</span>
            <form
              onSubmit={handleSubmit(formSubmit)}
              className='comments_content'>
              <span className='comments__score-title'>امتیاز شما</span>
              <select
                defaultValue='امتاز مورد نظر را انتخاب کنید'
                {...register("score")}>
                <option disabled value=''>
                  امتیاز مورد نظر را انتخاب کنید
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              {errors.score?.message}
              <textarea
                placeholder={
                  errors.comment
                    ? errors.comment.message
                    : "متن مورد نظر رابنویسید"
                }
                className='comments__content-textarea'
                {...register("comment")}></textarea>
              <Button type='submit' className='comments__button'>
                فرستادن دیدگاه
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
